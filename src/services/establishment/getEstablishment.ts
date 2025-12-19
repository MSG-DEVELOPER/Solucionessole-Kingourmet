// src/services/establishment/getEstablishment.ts

import type { EstablishmentData } from "../../redux/slices/establishment/establishmentSlice";

export async function getEstablishment(
  token: string,
  establecimientoId: number | null
): Promise<EstablishmentData> {
  const res = await fetch(
    `http://localhost/kingourmet-api/api/establecimientos/${establecimientoId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }
  );

  if (res.status !== 200) {
    throw new Error("Error al obtener el establecimiento");
  }

  const json = await res.json();
  return json;
}

