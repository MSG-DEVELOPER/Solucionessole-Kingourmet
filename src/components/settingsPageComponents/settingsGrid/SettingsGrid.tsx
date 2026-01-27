// SettingsGrid.tsx, el orquestador de la pagina de settings
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import type { RootState } from "../../../redux/store";
import { settingsData } from "../../../assets/data/settingsData";
import SettingsItem from "../settingsItem/SettingsItem";
import { GridContainer } from "./SettingsGrid.styles";
import { mockData } from "../../../assets/data/mockData";
import DataModal from "../../modals/DataModal/DataModal";
import AddRowModal from "../../modals/DataModal/addRowModal/AddRowModal";
import EditRowModal from "../../modals/DataModal/editRowModal/EditRowModal";
import EditMultiFieldModal from "../../modals/DataModal/editMultiFieldModal/EditMultiFieldModal";
import type { EditField } from "../../modals/DataModal/editMultiFieldModal/EditMultiFieldModal";
import { configToTableData } from "../../../utils/configAdapters";
import { establishmentToTableData } from "../../../utils/establishmentAdapter";
import { festivosToTableData } from "../../../utils/festivesAdapter";
import { alergenosToTableData } from "../../../utils/alergenosAdapter";
import { clientesToTableData } from "../../../utils/clientesAdapter";
import { horariosToTableData } from "../../../utils/horariosAdapter";
import { handleSaveHorarioEdit } from "./handlers/handleSaveHorarioEdit";
import { handleSaveConfigEdit } from "./handlers/handleSaveConfigEdit";
import { handleSaveEstablishmentEdit } from "./handlers/handleSaveEstablishmentEdit";
import { handleSaveAlergenoEdit } from "./handlers/handleSaveAlergenoEdit";
import { handleDeleteRow as handleDeleteRowHandler } from "./handlers/handleDeleteRow";
import { handleAddFestivo } from "./handlers/handleAddFestivo";
import { handleAddAlergeno } from "./handlers/handleAddAlergeno";
import { handleAddCliente } from "./handlers/handleAddCliente";
import { handleSaveClienteEdit } from "./handlers/handleSaveClienteEdit";
import { addSchemas } from "../../../utils/addRowSchemas";
import type { AddField } from "../../modals/DataModal/addRowModal/AddRowModal";

function generateTimeOptions(): { label: string; value: string }[] {
  const options: { label: string; value: string }[] = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const hh = hour.toString().padStart(2, "0");
      const mm = minute.toString().padStart(2, "0");
      const label = `${hh}:${mm}`;
      const value = `${hh}:${mm}:00`;
      options.push({ label, value });
    }
  }
  return options;
}

function SettingsGrid() {
  const dispatch = useDispatch();
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  // lectura
  const [tableModalOpen, setTableModalOpen] = useState(false);
  // edición
  const [rowBeingEdited, setRowBeingEdited] = useState<{
    Parámetro: string;
    Valor: unknown;
    _key?: string;
  } | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  // edición multi-campo
  const [editMultiFieldModalOpen, setEditMultiFieldModalOpen] = useState(false);
  const [editFields, setEditFields] = useState<EditField[]>([]);
  const [editingRowId, setEditingRowId] = useState<string | null>(null);
  // alta
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addFields, setAddFields] = useState<AddField[]>([]);
  // 👉 config desde redux para cuando entras a Ajustes generales
  const config = useSelector((state: RootState) => state.config.data);
  const establishment = useSelector((state: RootState) => state.establishment.data);
  const festivos = useSelector((state: RootState) => state.festive.data);
  const alergenos = useSelector((state: RootState) => state.alergenos.data);
  const clientes = useSelector((state: RootState) => state.clientes.data);
  const horarios = useSelector((state: RootState) => state.horarios.data);
  // establecimientoId desde redux para cuando entras a Ajustes generales y tienes que enviar el establecimientoId por URl
  const establecimientoId = useSelector(
    (state: RootState) => state.auth.establecimientoId
  );

  function handleOpenModal(title: string) {
    setSelectedSetting(title);
    setTableModalOpen(true);
  }

  function resolveData() {
    //helper que te dice los datos de la tabla a renderizar
    if (!selectedSetting) return [];

    if (selectedSetting === "Ajustes Generales") {
      if (!config) return [];
      return configToTableData(config);

    }else if (selectedSetting === "Establecimiento") {
      if (!establishment) return [];
      return establishmentToTableData(establishment);
    }else if (selectedSetting === "Festivos") {
      if (!festivos) return [];
      return festivosToTableData(festivos);
    }else if (selectedSetting === "Alérgenos") {
      if (!alergenos || alergenos.length === 0) return [];
      return alergenosToTableData(alergenos);
    }else if (selectedSetting === "Clientes") {
      if (!clientes || clientes.length === 0) return [];
      return clientesToTableData(clientes);
    }else if (selectedSetting === "Horarios") {
      if (!horarios || horarios.length === 0) return [];
      return horariosToTableData(horarios);
    }

   return mockData[selectedSetting] ?? [];
  }

  function handleEditRow(row: Record<string, unknown>) {
    //pàra editar una fila en tablas que solo tengan la accion editar y un solo campo,clave-valor
    setRowBeingEdited(
      row as {
        Parámetro: string;
        Valor: unknown;
        _key?: string;
      }
    );
    setEditModalOpen(true);
  }

  function handleEditClienteRow(row: Record<string, unknown>) {
    //para editar un cliente con múltiples campos
    const rowId = row._key as string;
    
    // Usar keys que coincidan con el backend (lowercase) para evitar conversiones
    const fields: EditField[] = [
      { key: "nombre", label: "Nombre", type: "text", value: row.Nombre as string, required: true },
      { key: "apellidos", label: "Apellidos", type: "text", value: row.Apellidos as string, required: true },
      { key: "email", label: "Email", type: "email", value: row.Email as string, required: true },
      { key: "telefono", label: "Teléfono", type: "text", value: row.Teléfono as string, required: true },
    ];

    setEditingRowId(rowId);
    setEditFields(fields);
    setEditMultiFieldModalOpen(true);
  }

  function handleEditHorarioRow(row: Record<string, unknown>) {
    // para editar un horario con múltiples campos
    const rowId = row._key as string;
    const timeOptions = generateTimeOptions();

    const fields: EditField[] = [
      {
        key: "nombre",
        label: "Nombre",
        type: "text",
        value: row.Nombre as string,
        required: true,
      },
      {
        key: "descripcion",
        label: "Descripción",
        type: "text",
        value: (row.Descripción as string) ?? "",
        required: false,
      },
      {
        key: "hora_inicio",
        label: "Inicio",
        type: "select",
        value: row.Inicio as string,
        required: true,
        options: timeOptions,
      },
      {
        key: "hora_fin",
        label: "Fin",
        type: "select",
        value: row.Fin as string,
        required: true,
        options: timeOptions,
      },
      {
        key: "estado",
        label: "Estado",
        type: "select",
        value: row.Estado as string,
        required: true,
        options: [
          { label: "Activo", value: "activo" },
          { label: "Inactivo", value: "inactivo" },
        ],
      },
    ];

    setEditingRowId(rowId);
    setEditFields(fields);
    setEditMultiFieldModalOpen(true);
  }

  async function handleDeleteRow(row: Record<string, unknown>) {
    //pàra eliminar una fila en tablas que tengan la accion eliminar
    if (!selectedSetting || !establecimientoId) return;
    await handleDeleteRowHandler(row, selectedSetting, establecimientoId, dispatch);
  }

  function resolveRowActions(row: Record<string, unknown>) { //lo que pones aqui es el menu de acciones que se muestra en la fila clickada

    if (selectedSetting === "Festivos" ) {
      return [
        {
          label: "Eliminar",
          onClick: () => handleDeleteRow(row),
        },
        {
          label: "Editar",
          onClick: () => handleEditRow(row),
        },
      ];
    }

    if (selectedSetting === "Clientes") {
      return [
        {
          label: "Editar",
          onClick: () => handleEditClienteRow(row),
        },
      ];
    }

    if (selectedSetting === "Horarios") {
      return [
        {
          label: "Editar",
          onClick: () => handleEditHorarioRow(row),
        },
      ];
    }

    return [ //cuando en la tabla solo hay la accion editar y un solo campo,clave-valor
      {
        label: "Editar",
        onClick: () => handleEditRow(row),
      },
    ];
  }

  function handleAddRow() {//para añadir una nueva fila en tablas que tengan el boton de añadir
    if (!selectedSetting) return;

    if (selectedSetting === "Festivos") {
      setAddFields(addSchemas.Festivos);
      setAddModalOpen(true);
    } else if (selectedSetting === "Alérgenos") {
      setAddFields(addSchemas.Alérgenos);
      setAddModalOpen(true);
    } else if (selectedSetting === "Clientes") {
      setAddFields(addSchemas.Clientes);
      setAddModalOpen(true);
    }
  }

  async function handleSaveEdit(key: string, newValue: string) {
    if (!selectedSetting) return;

    switch (selectedSetting) {
      case "Ajustes Generales":
        if (!establecimientoId) return;
        return handleSaveConfigEdit(key, newValue, establecimientoId, dispatch);
      
      case "Establecimiento":
        if (!establecimientoId) return;
        return handleSaveEstablishmentEdit(key, newValue, establecimientoId, dispatch);
      
      case "Alérgenos":
        return handleSaveAlergenoEdit(key, newValue, dispatch);
      
      default:
        toast.error("Tipo de ajuste no soportado");
    }
  }

  return (
    <>
      <GridContainer>
        {settingsData.map(
          (
            item,
            index //renderizamos los items del grid, los botones
          ) => (
            <SettingsItem
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              onClick={() => handleOpenModal(item.title)}
            />
          )
        )}
      </GridContainer>

      {/* Modal global */}
      <DataModal //modal global que contiene la tabla
        isOpen={tableModalOpen}
        onClose={() => setTableModalOpen(false)}
        title={selectedSetting ?? ""}
        data={resolveData()} //datos de la tabla a renderizar
        showSearchBar
        showFilterIcon
        onAdd={selectedSetting === "Festivos" || selectedSetting === "Alérgenos" || selectedSetting === "Clientes" ? handleAddRow : undefined}
        rowActions={resolveRowActions} //actions para la fila clickada
      />
      {/* Modal de añadir nueva fila, este se puede reutilizar para cualquier tabla que tenga el boton de añadir*/}
      <AddRowModal
        open={addModalOpen}
        title={selectedSetting ? `Añadir ${selectedSetting}` : "Añadir registro"}
        fields={addFields}
        onClose={() => setAddModalOpen(false)}
        onSubmit={async (values) => {
          if (!selectedSetting) return;

          try {
            if (selectedSetting === "Festivos") {
              if (!establecimientoId) return;
              await handleAddFestivo(values, establecimientoId, dispatch);
              setAddModalOpen(false);
            } else if (selectedSetting === "Alérgenos") {
              await handleAddAlergeno(values, dispatch);
              setAddModalOpen(false);
            } else if (selectedSetting === "Clientes") {
              if (!establecimientoId) return;
              await handleAddCliente(values, establecimientoId, dispatch);
              setAddModalOpen(false);
            } else {
              toast.error("Tipo de ajuste no soportado para añadir");
            }
          } catch {
            // El error ya se maneja en el handler con toast
          }
        }}
      />
      {/* Modal de edición de fila,este se puede reutilizar para cualquier tabla que SOLO tenga la accion editar y un solo campo,clave-valor */}
      <EditRowModal
        key={rowBeingEdited?._key ?? "edit-modal"}
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        row={rowBeingEdited} //datos de la fila a editar
        onSave={handleSaveEdit} //funcion que se ejecuta cuando le das al boton guardar en el modal de edición de fila
      />
      {/* Modal de edición multi-campo, para tablas con múltiples campos editables como Clientes */}
      <EditMultiFieldModal
        open={editMultiFieldModalOpen}
        title={selectedSetting ? `Editar ${selectedSetting}` : "Editar registro"}
        fields={editFields}
        onClose={() => {
          setEditMultiFieldModalOpen(false);
          setEditingRowId(null);
          setEditFields([]);
        }}
        onSubmit={async (changedValues) => {
          if (!selectedSetting || !editingRowId) return;

          try {
            if (selectedSetting === "Clientes") {
              await handleSaveClienteEdit(editingRowId, changedValues, dispatch);
              setEditMultiFieldModalOpen(false);
            } else if (selectedSetting === "Horarios") {
              await handleSaveHorarioEdit(editingRowId, changedValues, dispatch);
              setEditMultiFieldModalOpen(false);
            } else {
              toast.error("Tipo de ajuste no soportado para edición multi-campo");
            }

            setEditingRowId(null);
            setEditFields([]);
          } catch {
            // El error ya se maneja en el handler con toast
          }
        }}
      />
    </>
  );
}

export default SettingsGrid;
