// src/assets/data/rowActions.ts

export interface Action {
    label: string;
    onClick: (row: any) => void;
  }
  


  // Acciones genéricas que puede usar cualquier tabla
  export const genericActions: Action[] = [
    {
      label: "Editar",
      onClick: (row) => alert(`Editar: ${JSON.stringify(row)}`),
    },
    {
      label: "Eliminar",
      onClick: (row) => alert(`Eliminar: ${JSON.stringify(row)}`),
    },
  ];
  
  //prueba para ver que son intercambiables

  export const productActions: Action[] = [
    { label: "Editar producto", onClick: (row) => alert(`Editar producto: ${JSON.stringify(row)}`) },
    { label: "Eliminar producto", onClick: (row) => alert(`Eliminar producto: ${JSON.stringify(row)}`) },
  ];