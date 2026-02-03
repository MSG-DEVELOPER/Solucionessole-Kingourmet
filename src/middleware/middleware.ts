type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";


export const KANDU = async (recurso: number, accion: HttpMethod) => {

  const token = sessionStorage.getItem("token");
  
  const handleAccion: Record<HttpMethod, "leer" | "crear" | "actualizar" | "eliminar"> = {
    GET: "leer",
    POST: "crear",
    PUT: "actualizar",
    DELETE: "eliminar",
  };
  

  

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



  if (data[handleAccion[accion]] == 1) {
    return true;
  }

  return false;
};

export const middleware = async (
  recurso: number,
  accion: string,
  openModal?: () => void
): Promise<boolean> => {
  const allowed = await KANDU(recurso, accion as HttpMethod);

  if (!allowed && openModal) {
    openModal();
  }

  return allowed;
};