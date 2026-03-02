import { useEffect, useState } from "react";
import { getPermissionsByRole } from "../../../services/permissions/getPermissionsByRol";
import type { PermissionByRole } from "../../../services/permissions/getPermissionsByRol";
import { getRecursos } from "../../../services/recursos/getRecursos";
import { permissionValueToLabel } from "../../../utils/permissionUtils";
import {
  Overlay,
  Card,
  Header,
  CloseButton,
  Body,
  Table,
  Message,
  ToggleCell,
  PermissionIcon,
  PermissionCheckbox,
  Footer,
  SaveButton,
} from "./PermissionsByRoleModal.styles";

interface PermissionsByRoleModalProps {
  open: boolean;
  onClose: () => void;
  roleId: number | null;
  roleName?: string;
}

function PermissionsByRoleModal({
  open,
  onClose,
  roleId,
  roleName,
}: PermissionsByRoleModalProps) {
  const [permissions, setPermissions] = useState<PermissionByRole[]>([]);
  const [draftPermissions, setDraftPermissions] = useState<PermissionByRole[]>([]);
  const [recursoDescMap, setRecursoDescMap] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open || roleId == null) {
      setPermissions([]);
      setDraftPermissions([]);
      setRecursoDescMap({});
      setError(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    const token = sessionStorage.getItem("token");
    if (!token) {
      setError("No hay sesión");
      setLoading(false);
      return;
    }

    Promise.all([
      getPermissionsByRole(token, roleId),
      getRecursos(token),
    ])
      .then(([perms, recursos]) => {
        if (!cancelled) {
          setPermissions(perms);
          setDraftPermissions(perms.map((p) => ({ ...p })));
          const map: Record<number, string> = {};
          recursos.forEach((r) => {
            map[r.id] = r.descripcion;
          });
          setRecursoDescMap(map);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Error al cargar permisos");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [open, roleId]);

  function updateDraft(permissionId: number, field: "crear" | "leer" | "actualizar" | "eliminar") {
    setDraftPermissions((prev) =>
      prev.map((p) =>
        p.id === permissionId ? { ...p, [field]: p[field] === 1 ? 0 : 1 } : p
      )
    );
  }

  function handleSave() {
    // Placeholder: cuando exista el endpoint, aquí se enviará draftPermissions
    console.log("Guardar permisos (payload para futuro endpoint):", draftPermissions);
  }

  if (!open) return null;

  const title = roleName ? `Permisos: ${roleName}` : "Permisos del rol";

  return (
    <Overlay onClick={onClose}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Header>
          <h3>{title}</h3>
          <CloseButton type="button" onClick={onClose} aria-label="Cerrar">
            ×
          </CloseButton>
        </Header>

        <Body>
          {loading && <Message>Cargando…</Message>}
          {error && <Message>{error}</Message>}
          {!loading && !error && permissions.length === 0 && (
            <Message>No hay permisos para este rol.</Message>
          )}
          {!loading && !error && permissions.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>Recurso</th>
                  <th>Leer</th>
                  <th>Actualizar</th>
                  <th>Crear</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {draftPermissions.map((p) => (
                  <tr key={p.id}>
                    <td>{recursoDescMap[p.id_recurso] ?? p.id_recurso}</td>
                    <td>
                      <ToggleCell>
                        <PermissionIcon $allowed={p.leer === 1}>
                          <PermissionCheckbox
                            checked={p.leer === 1}
                            onChange={() => updateDraft(p.id, "leer")}
                            aria-label={permissionValueToLabel(p.leer)}
                          />
                        </PermissionIcon>
                      </ToggleCell>
                    </td>
                    <td>
                      <ToggleCell>
                        <PermissionIcon $allowed={p.actualizar === 1}>
                          <PermissionCheckbox
                            checked={p.actualizar === 1}
                            onChange={() => updateDraft(p.id, "actualizar")}
                            aria-label={permissionValueToLabel(p.actualizar)}
                          />
                        </PermissionIcon>
                      </ToggleCell>
                    </td>
                    <td>
                      <ToggleCell>
                        <PermissionIcon $allowed={p.crear === 1}>
                          <PermissionCheckbox
                            checked={p.crear === 1}
                            onChange={() => updateDraft(p.id, "crear")}
                            aria-label={permissionValueToLabel(p.crear)}
                          />
                        </PermissionIcon>
                      </ToggleCell>
                    </td>
                    <td>
                      <ToggleCell>
                        <PermissionIcon $allowed={p.eliminar === 1}>
                          <PermissionCheckbox
                            checked={p.eliminar === 1}
                            onChange={() => updateDraft(p.id, "eliminar")}
                            aria-label={permissionValueToLabel(p.eliminar)}
                          />
                        </PermissionIcon>
                      </ToggleCell>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Body>
        {!loading && !error && draftPermissions.length > 0 && (
          <Footer>
            <SaveButton type="button" onClick={handleSave}>
              Guardar cambios
            </SaveButton>
          </Footer>
        )}
      </Card>
    </Overlay>
  );
}

export default PermissionsByRoleModal;
