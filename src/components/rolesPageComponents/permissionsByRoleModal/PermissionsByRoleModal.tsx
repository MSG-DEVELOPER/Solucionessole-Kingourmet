import { useEffect, useState } from "react";
import { getPermissionsByRole } from "../../../services/permissions/getPermissionsByRol";
import type { PermissionByRole } from "../../../services/permissions/getPermissionsByRol";
import { updatePermissionByRole } from "../../../services/permissions/updatePermissionByRole";
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
  PermissionSwitchWrapper,
  PermissionSwitchInput,
  PermissionSwitchTrack,
  PermissionSwitchThumb,
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

  function handleSwitchChange(p: PermissionByRole, field: "crear" | "leer" | "actualizar" | "eliminar") {
    const newVal = p[field] === 1 ? 0 : 1;
    const payload = { crear: p.crear, leer: p.leer, actualizar: p.actualizar, eliminar: p.eliminar, [field]: newVal };
    setDraftPermissions((prev) =>
      prev.map((perm) => (perm.id === p.id ? { ...perm, [field]: newVal } : perm))
    );
    const token = sessionStorage.getItem("token");
    if (token && roleId != null) {
      updatePermissionByRole(token, roleId, p.id, payload).catch(() => {});
    }
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
                        <PermissionSwitchWrapper>
                          <PermissionSwitchInput
                            checked={p.leer === 1}
                            onChange={() => handleSwitchChange(p, "leer")}
                            aria-label={permissionValueToLabel(p.leer)}
                          />
                          <PermissionSwitchTrack $checked={p.leer === 1}>
                            <PermissionSwitchThumb $checked={p.leer === 1} />
                          </PermissionSwitchTrack>
                        </PermissionSwitchWrapper>
                      </ToggleCell>
                    </td>
                    <td>
                      <ToggleCell>
                        <PermissionSwitchWrapper>
                          <PermissionSwitchInput
                            checked={p.actualizar === 1}
                            onChange={() => handleSwitchChange(p, "actualizar")}
                            aria-label={permissionValueToLabel(p.actualizar)}
                          />
                          <PermissionSwitchTrack $checked={p.actualizar === 1}>
                            <PermissionSwitchThumb $checked={p.actualizar === 1} />
                          </PermissionSwitchTrack>
                        </PermissionSwitchWrapper>
                      </ToggleCell>
                    </td>
                    <td>
                      <ToggleCell>
                        <PermissionSwitchWrapper>
                          <PermissionSwitchInput
                            checked={p.crear === 1}
                            onChange={() => handleSwitchChange(p, "crear")}
                            aria-label={permissionValueToLabel(p.crear)}
                          />
                          <PermissionSwitchTrack $checked={p.crear === 1}>
                            <PermissionSwitchThumb $checked={p.crear === 1} />
                          </PermissionSwitchTrack>
                        </PermissionSwitchWrapper>
                      </ToggleCell>
                    </td>
                    <td>
                      <ToggleCell>
                        <PermissionSwitchWrapper>
                          <PermissionSwitchInput
                            checked={p.eliminar === 1}
                            onChange={() => handleSwitchChange(p, "eliminar")}
                            aria-label={permissionValueToLabel(p.eliminar)}
                          />
                          <PermissionSwitchTrack $checked={p.eliminar === 1}>
                            <PermissionSwitchThumb $checked={p.eliminar === 1} />
                          </PermissionSwitchTrack>
                        </PermissionSwitchWrapper>
                      </ToggleCell>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Body>
      </Card>
    </Overlay>
  );
}

export default PermissionsByRoleModal;
