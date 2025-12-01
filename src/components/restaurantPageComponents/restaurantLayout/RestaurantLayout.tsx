import { useEffect, useRef, useState, useCallback } from 'react';
import { Toolbar } from './toolbar';
import {
  CanvasContainer,
  CanvasElement,
} from './RestaurantLayout.styles';
import {
  Shape,
  Circle,
  Rectangle,
  Ellipse,
  Wall,
  Door,
  Window,
  Bathroom,
  Plant,
} from './shapes';
import { getWoodPattern } from './utils/textures';

type DragMode = 'MOVE' | 'ROTATE' | 'RESIZE' | 'NONE';

function RestaurantLayout() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedShapeIndex, setSelectedShapeIndex] = useState<number | null>(null);
  const [currentColor, setCurrentColor] = useState('#4a90e2');
  const [isDragging, setIsDragging] = useState(false);
  const [dragMode, setDragMode] = useState<DragMode>('NONE');
  const [showGrid, setShowGrid] = useState(false);
  
  const dragStateRef = useRef({
    dragStartX: 0,
    dragStartY: 0,
    currentShapeIndex: null as number | null,
    initialRotation: 0,
    initialRadius: 0,
    initialRadiusX: 0,
    initialRadiusY: 0,
    initialWidth: 0,
    initialHeight: 0,
  });

  const gridSize = 20;

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const displayWidth = container.clientWidth;
    const displayHeight = container.clientHeight;

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
    }
  }, []);

  const drawGrid = useCallback((ctx: CanvasRenderingContext2D) => {
    if (!showGrid) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx.save();
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    ctx.restore();
  }, [showGrid]);

  const drawAll = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);

    const woodPatternFn = (color: string) => getWoodPattern(ctx, color);

    shapes.forEach((shape, i) => {
      const isSelected = i === selectedShapeIndex;
      if (shape instanceof Circle) {
        shape.draw(ctx, isSelected, woodPatternFn);
      } else if (shape instanceof Rectangle) {
        shape.draw(ctx, isSelected, woodPatternFn);
      } else if (shape instanceof Ellipse) {
        shape.draw(ctx, isSelected, woodPatternFn);
      } else {
        shape.draw(ctx, isSelected);
      }
    });
  }, [shapes, selectedShapeIndex, drawGrid]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  useEffect(() => {
    drawAll();
  }, [drawAll]);

  useEffect(() => {
    resizeCanvas();
  }, [resizeCanvas]);

  const getMousePos = useCallback((evt: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in evt && evt.touches.length > 0) {
      return {
        x: (evt.touches[0].clientX - rect.left) * scaleX,
        y: (evt.touches[0].clientY - rect.top) * scaleY,
      };
    } else if ('clientX' in evt) {
      return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY,
      };
    }
    return { x: 0, y: 0 };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const pos = getMousePos(e.nativeEvent);

    // Check handles of selected shape first
    if (selectedShapeIndex !== null) {
      const shape = shapes[selectedShapeIndex];
      const handle = shape.checkHandles(pos.x, pos.y);
      if (handle) {
        setIsDragging(true);
        setDragMode(handle);
        dragStateRef.current.currentShapeIndex = selectedShapeIndex;
        dragStateRef.current.dragStartX = pos.x;
        dragStateRef.current.dragStartY = pos.y;
        dragStateRef.current.initialRotation = shape.rotation;
        if (shape instanceof Circle || shape instanceof Plant) {
          dragStateRef.current.initialRadius = (shape as Circle | Plant).radius;
        } else if (shape instanceof Ellipse) {
          dragStateRef.current.initialRadiusX = shape.radiusX;
          dragStateRef.current.initialRadiusY = shape.radiusY;
        } else if (shape instanceof Rectangle || shape instanceof Wall || shape instanceof Door || shape instanceof Window || shape instanceof Bathroom) {
          dragStateRef.current.initialWidth = shape.width;
          dragStateRef.current.initialHeight = shape.height;
        }
        return;
      }
    }

    // Check shape bodies
    let found = false;
    for (let i = shapes.length - 1; i >= 0; i--) {
      if (shapes[i].isPointInside(pos.x, pos.y)) {
        dragStateRef.current.currentShapeIndex = i;
        setSelectedShapeIndex(i);
        setIsDragging(true);
        setDragMode('MOVE');
        found = true;

        dragStateRef.current.dragStartX = pos.x - shapes[i].x;
        dragStateRef.current.dragStartY = pos.y - shapes[i].y;

        // Update color picker
        const shape = shapes[i];
        if (
          (shape instanceof Circle || shape instanceof Rectangle || shape instanceof Ellipse) &&
          !(shape instanceof Wall) &&
          !(shape instanceof Bathroom) &&
          !(shape instanceof Plant)
        ) {
          setCurrentColor(shape.color);
        }

        // Move to top
        const newShapes = [...shapes];
        const s = newShapes.splice(i, 1)[0];
        newShapes.push(s);
        setShapes(newShapes);
        dragStateRef.current.currentShapeIndex = newShapes.length - 1;
        setSelectedShapeIndex(newShapes.length - 1);
        return;
      }
    }

    if (!found) {
      setSelectedShapeIndex(null);
    }
  }, [shapes, selectedShapeIndex, getMousePos]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    const pos = getMousePos(e.nativeEvent);
    const currentIndex = dragStateRef.current.currentShapeIndex;
    if (currentIndex === null || currentIndex >= shapes.length) return;

    const shape = shapes[currentIndex];
    const newShapes = [...shapes];

    if (dragMode === 'MOVE') {
      shape.x = pos.x - dragStateRef.current.dragStartX;
      shape.y = pos.y - dragStateRef.current.dragStartY;
    } else if (dragMode === 'ROTATE') {
      let cx: number, cy: number;
      if (shape instanceof Circle || shape instanceof Plant || shape instanceof Ellipse) {
        cx = shape.x;
        cy = shape.y;
      } else if (shape instanceof Rectangle || shape instanceof Wall || shape instanceof Door || shape instanceof Window || shape instanceof Bathroom) {
        cx = shape.x + shape.width / 2;
        cy = shape.y + shape.height / 2;
      } else {
        return;
      }

      const dx = pos.x - cx;
      const dy = pos.y - cy;
      let angle = Math.atan2(dy, dx);

      angle += Math.PI / 2;
      if (angle < 0) angle += Math.PI * 2;

      let degrees = angle * (180 / Math.PI);
      if (Math.abs(degrees % 90) < 5) {
        degrees = Math.round(degrees / 90) * 90;
      } else if (Math.abs(degrees % 90) > 85) {
        degrees = Math.round(degrees / 90) * 90;
      }
      shape.rotation = degrees * (Math.PI / 180);
    } else if (dragMode === 'RESIZE') {
      if (shape instanceof Circle || shape instanceof Plant) {
        const cx = shape.x;
        const cy = shape.y;
        const dx = pos.x - cx;
        const dy = pos.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        shape.radius = Math.max(5, dist);
      } else if (shape instanceof Ellipse) {
        const local = shape.getLocalPoint(pos.x, pos.y, shape.x, shape.y);
        shape.radiusX = Math.max(10, Math.abs(local.x));
        shape.radiusY = Math.max(10, Math.abs(local.y));
      } else if (shape instanceof Rectangle || shape instanceof Wall || shape instanceof Door || shape instanceof Window || shape instanceof Bathroom) {
        const cx = shape.x + shape.width / 2;
        const cy = shape.y + shape.height / 2;
        const local = shape.getLocalPoint(pos.x, pos.y, cx, cy);
        shape.width = Math.max(20, Math.abs(local.x) * 2);
        shape.height = Math.max(20, Math.abs(local.y) * 2);
        shape.x = cx - shape.width / 2;
        shape.y = cy - shape.height / 2;
      }
    }

    newShapes[currentIndex] = shape;
    setShapes(newShapes);
  }, [isDragging, dragMode, shapes, getMousePos]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragMode('NONE');
    dragStateRef.current.currentShapeIndex = null;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const pos = getMousePos(e.nativeEvent);

    if (selectedShapeIndex !== null) {
      const shape = shapes[selectedShapeIndex];
      const handle = shape.checkHandles(pos.x, pos.y);
      if (handle) {
        setIsDragging(true);
        setDragMode(handle);
        dragStateRef.current.currentShapeIndex = selectedShapeIndex;
        dragStateRef.current.dragStartX = pos.x;
        dragStateRef.current.dragStartY = pos.y;
        dragStateRef.current.initialRotation = shape.rotation;
        if (shape instanceof Circle || shape instanceof Plant) {
          dragStateRef.current.initialRadius = (shape as Circle | Plant).radius;
        } else if (shape instanceof Ellipse) {
          dragStateRef.current.initialRadiusX = shape.radiusX;
          dragStateRef.current.initialRadiusY = shape.radiusY;
        } else if (shape instanceof Rectangle || shape instanceof Wall || shape instanceof Door || shape instanceof Window || shape instanceof Bathroom) {
          dragStateRef.current.initialWidth = shape.width;
          dragStateRef.current.initialHeight = shape.height;
        }
        return;
      }
    }

    let found = false;
    for (let i = shapes.length - 1; i >= 0; i--) {
      if (shapes[i].isPointInside(pos.x, pos.y)) {
        dragStateRef.current.currentShapeIndex = i;
        setSelectedShapeIndex(i);
        setIsDragging(true);
        setDragMode('MOVE');
        found = true;

        dragStateRef.current.dragStartX = pos.x - shapes[i].x;
        dragStateRef.current.dragStartY = pos.y - shapes[i].y;

        const shape = shapes[i];
        if (
          (shape instanceof Circle || shape instanceof Rectangle || shape instanceof Ellipse) &&
          !(shape instanceof Wall) &&
          !(shape instanceof Bathroom) &&
          !(shape instanceof Plant)
        ) {
          setCurrentColor(shape.color);
        }

        const newShapes = [...shapes];
        const s = newShapes.splice(i, 1)[0];
        newShapes.push(s);
        setShapes(newShapes);
        dragStateRef.current.currentShapeIndex = newShapes.length - 1;
        setSelectedShapeIndex(newShapes.length - 1);
        return;
      }
    }

    if (!found) {
      setSelectedShapeIndex(null);
    }
  }, [shapes, selectedShapeIndex, getMousePos]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    const pos = getMousePos(e.nativeEvent);
    const currentIndex = dragStateRef.current.currentShapeIndex;
    if (currentIndex === null || currentIndex >= shapes.length) return;

    const shape = shapes[currentIndex];
    const newShapes = [...shapes];

    if (dragMode === 'MOVE') {
      shape.x = pos.x - dragStateRef.current.dragStartX;
      shape.y = pos.y - dragStateRef.current.dragStartY;
    } else if (dragMode === 'ROTATE') {
      let cx: number, cy: number;
      if (shape instanceof Circle || shape instanceof Plant || shape instanceof Ellipse) {
        cx = shape.x;
        cy = shape.y;
      } else if (shape instanceof Rectangle || shape instanceof Wall || shape instanceof Door || shape instanceof Window || shape instanceof Bathroom) {
        cx = shape.x + shape.width / 2;
        cy = shape.y + shape.height / 2;
      } else {
        return;
      }

      const dx = pos.x - cx;
      const dy = pos.y - cy;
      let angle = Math.atan2(dy, dx);

      angle += Math.PI / 2;
      if (angle < 0) angle += Math.PI * 2;

      let degrees = angle * (180 / Math.PI);
      if (Math.abs(degrees % 90) < 5) {
        degrees = Math.round(degrees / 90) * 90;
      } else if (Math.abs(degrees % 90) > 85) {
        degrees = Math.round(degrees / 90) * 90;
      }
      shape.rotation = degrees * (Math.PI / 180);
    } else if (dragMode === 'RESIZE') {
      if (shape instanceof Circle || shape instanceof Plant) {
        const cx = shape.x;
        const cy = shape.y;
        const dx = pos.x - cx;
        const dy = pos.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        shape.radius = Math.max(5, dist);
      } else if (shape instanceof Ellipse) {
        const local = shape.getLocalPoint(pos.x, pos.y, shape.x, shape.y);
        shape.radiusX = Math.max(10, Math.abs(local.x));
        shape.radiusY = Math.max(10, Math.abs(local.y));
      } else if (shape instanceof Rectangle || shape instanceof Wall || shape instanceof Door || shape instanceof Window || shape instanceof Bathroom) {
        const cx = shape.x + shape.width / 2;
        const cy = shape.y + shape.height / 2;
        const local = shape.getLocalPoint(pos.x, pos.y, cx, cy);
        shape.width = Math.max(20, Math.abs(local.x) * 2);
        shape.height = Math.max(20, Math.abs(local.y) * 2);
        shape.x = cx - shape.width / 2;
        shape.y = cy - shape.height / 2;
      }
    }

    newShapes[currentIndex] = shape;
    setShapes(newShapes);
  }, [isDragging, dragMode, shapes, getMousePos]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setDragMode('NONE');
    dragStateRef.current.currentShapeIndex = null;
  }, []);

  const deleteSelectedShape = useCallback(() => {
    if (selectedShapeIndex !== null && selectedShapeIndex >= 0 && selectedShapeIndex < shapes.length) {
      const newShapes = shapes.filter((_, i) => i !== selectedShapeIndex);
      setShapes(newShapes);
      setSelectedShapeIndex(null);
    }
  }, [shapes, selectedShapeIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        deleteSelectedShape();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deleteSelectedShape]);

  const canvas = canvasRef.current;

  const addCircle = useCallback(() => {
    if (!canvas) return;
    const r = 30;
    const x = Math.random() * (canvas.width - 2 * r) + r;
    const y = Math.random() * (canvas.height - 2 * r) + r;
    const newShape = new Circle(x, y, r, currentColor);
    setShapes((prev) => [...prev, newShape]);
    setSelectedShapeIndex(shapes.length);
  }, [canvas, currentColor, shapes.length]);

  const addSquare = useCallback(() => {
    if (!canvas) return;
    const s = 60;
    const x = Math.random() * (canvas.width - s);
    const y = Math.random() * (canvas.height - s);
    const newShape = new Rectangle(x, y, s, s, currentColor);
    setShapes((prev) => [...prev, newShape]);
    setSelectedShapeIndex(shapes.length);
  }, [canvas, currentColor, shapes.length]);

  const addEllipse = useCallback(() => {
    if (!canvas) return;
    const rx = 40;
    const ry = 25;
    const x = Math.random() * (canvas.width - 2 * rx) + rx;
    const y = Math.random() * (canvas.height - 2 * ry) + ry;
    const newShape = new Ellipse(x, y, rx, ry, currentColor);
    setShapes((prev) => [...prev, newShape]);
    setSelectedShapeIndex(shapes.length);
  }, [canvas, currentColor, shapes.length]);

  const addWall = useCallback(() => {
    if (!canvas) return;
    const w = 150;
    const h = 20;
    const x = Math.random() * (canvas.width - w);
    const y = Math.random() * (canvas.height - h);
    const newShape = new Wall(x, y, w, h);
    setShapes((prev) => [...prev, newShape]);
    setSelectedShapeIndex(shapes.length);
  }, [canvas, shapes.length]);

  const addDoor = useCallback(() => {
    if (!canvas) return;
    const x = Math.random() * (canvas.width - 50);
    const y = Math.random() * (canvas.height - 50);
    const newShape = new Door(x, y);
    setShapes((prev) => [...prev, newShape]);
    setSelectedShapeIndex(shapes.length);
  }, [canvas, shapes.length]);

  const addWindow = useCallback(() => {
    if (!canvas) return;
    const x = Math.random() * (canvas.width - 60);
    const y = Math.random() * (canvas.height - 40);
    const newShape = new Window(x, y);
    setShapes((prev) => [...prev, newShape]);
    setSelectedShapeIndex(shapes.length);
  }, [canvas, shapes.length]);

  const addBathroom = useCallback(() => {
    if (!canvas) return;
    const x = Math.random() * (canvas.width - 60);
    const y = Math.random() * (canvas.height - 60);
    const newShape = new Bathroom(x, y);
    setShapes((prev) => [...prev, newShape]);
    setSelectedShapeIndex(shapes.length);
  }, [canvas, shapes.length]);

  const addPlant = useCallback(() => {
    if (!canvas) return;
    const x = Math.random() * (canvas.width - 30) + 15;
    const y = Math.random() * (canvas.height - 30) + 15;
    const newShape = new Plant(x, y);
    setShapes((prev) => [...prev, newShape]);
    setSelectedShapeIndex(shapes.length);
  }, [canvas, shapes.length]);

  const clearCanvas = useCallback(() => {
    setShapes([]);
    setSelectedShapeIndex(null);
  }, []);

  const saveJson = useCallback(() => {
    const exportData = shapes.map((shape) => {
      const data: {
        type: string;
        x: number;
        y: number;
        rotation: number;
        color: string;
        radius?: number;
        radiusX?: number;
        radiusY?: number;
        width?: number;
        height?: number;
      } = {
        type: shape.constructor.name,
        x: shape.x,
        y: shape.y,
        rotation: shape.rotation,
        color: shape.color,
      };

      if (shape instanceof Circle || shape instanceof Plant) {
        data.radius = shape.radius;
      } else if (shape instanceof Ellipse) {
        data.radiusX = shape.radiusX;
        data.radiusY = shape.radiusY;
      } else if (shape instanceof Rectangle || shape instanceof Wall || shape instanceof Door || shape instanceof Window || shape instanceof Bathroom) {
        data.width = shape.width;
        data.height = shape.height;
      }

      return data;
    });

    const jsonString = JSON.stringify(exportData, null, 2);
    console.log(jsonString);
    navigator.clipboard.writeText(jsonString).then(() => {
      alert('JSON generado en la consola (F12) y copiado al portapapeles.\n\n' + jsonString);
    }).catch(() => {
      alert('JSON generado en la consola (F12).\n\n' + jsonString);
    });
  }, [shapes]);

  const loadFromJSON = useCallback((jsonData: string | unknown[]) => {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      const newShapes: Shape[] = [];

      for (const item of data) {
        let shape: Shape;
        switch (item.type) {
          case 'Circle':
            shape = new Circle(item.x, item.y, item.radius, item.color);
            break;
          case 'Ellipse':
            shape = new Ellipse(item.x, item.y, item.radiusX, item.radiusY, item.color);
            break;
          case 'Rectangle':
            shape = new Rectangle(item.x, item.y, item.width, item.height, item.color);
            break;
          case 'Wall':
            shape = new Wall(item.x, item.y, item.width, item.height);
            break;
          case 'Window':
            shape = new Window(item.x, item.y);
            if (item.width && shape instanceof Window) shape.width = item.width;
            if (item.height && shape instanceof Window) shape.height = item.height;
            break;
          case 'Door':
            shape = new Door(item.x, item.y);
            if (item.width && shape instanceof Door) shape.width = item.width;
            if (item.height && shape instanceof Door) shape.height = item.height;
            break;
          case 'Bathroom':
            shape = new Bathroom(item.x, item.y);
            if (item.width && shape instanceof Bathroom) shape.width = item.width;
            if (item.height && shape instanceof Bathroom) shape.height = item.height;
            break;
          case 'Plant':
            shape = new Plant(item.x, item.y);
            if (item.radius && shape instanceof Plant) shape.radius = item.radius;
            break;
          default:
            console.warn('Unknown shape type:', item.type);
            continue;
        }

        shape.rotation = item.rotation || 0;
        newShapes.push(shape);
      }

      setShapes(newShapes);
      setSelectedShapeIndex(null);
      return { success: true, count: newShapes.length };
    } catch (e) {
      console.error('Error loading JSON:', e);
      const error = e instanceof Error ? e.message : 'Unknown error';
      return { success: false, error };
    }
  }, []);

  const loadJson = useCallback(() => {
    const jsonInput = prompt('Pega el JSON del plano:');
    if (!jsonInput) return;

    const result = loadFromJSON(jsonInput);
    if (result.success) {
      alert(`Cargados ${result.count} elementos correctamente.`);
    } else {
      alert('Error al cargar JSON: ' + result.error);
    }
  }, [loadFromJSON]);

  const handleColorChange = useCallback((color: string) => {
    setCurrentColor(color);
    if (selectedShapeIndex !== null) {
      const shape = shapes[selectedShapeIndex];
      if (
        (shape instanceof Circle || shape instanceof Rectangle || shape instanceof Ellipse) &&
        !(shape instanceof Wall) &&
        !(shape instanceof Bathroom) &&
        !(shape instanceof Plant)
      ) {
        const newShapes = [...shapes];
        shape.color = color;
        newShapes[selectedShapeIndex] = shape;
        setShapes(newShapes);
      }
    }
  }, [selectedShapeIndex, shapes]);

  return (
    <CanvasContainer ref={containerRef}>
      <Toolbar
        currentColor={currentColor}
        onColorChange={handleColorChange}
        onAddCircle={addCircle}
        onAddSquare={addSquare}
        onAddEllipse={addEllipse}
        onAddWall={addWall}
        onAddDoor={addDoor}
        onAddWindow={addWindow}
        onAddBathroom={addBathroom}
        onAddPlant={addPlant}
        onDeleteSelected={deleteSelectedShape}
        onClearCanvas={clearCanvas}
        onToggleGrid={() => setShowGrid(!showGrid)}
        onSaveJson={saveJson}
        onLoadJson={loadJson}
        showGrid={showGrid}
      />
      <CanvasElement
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      />
    </CanvasContainer>
  );
}

export default RestaurantLayout;
