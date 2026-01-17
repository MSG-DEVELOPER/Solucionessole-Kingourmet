export const KANDU = async (recurso: number, accion: string) => {
  const token = sessionStorage.getItem("token");

  

  const res = await fetch(
    `http://localhost/kingourmet-api/api/permisos/check/${recurso}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }
  );

  const data = await res.json();

  if (data[accion] == 1) {
    return true;
  }

  return false;
};

export const middleware = async (
  recurso: number,
  accion: string,
  openModal?: () => void
): Promise<boolean> => {
  const allowed = await KANDU(recurso, accion);

  if (!allowed && openModal) {
    openModal();
  }

  return allowed;
};