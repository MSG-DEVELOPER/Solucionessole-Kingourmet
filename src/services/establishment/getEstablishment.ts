// src/services/establishment/getEstablishment.ts

import type { EstablishmentData } from "../../redux/slices/establishment/establishmentSlice";

export async function getEstablishment(
  token: string,
  establecimientoId: number | null
): Promise<EstablishmentData> {
  const res = await fetch(
    "http://localhost/kingourmet-api/api/establecimientos",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error al obtener el establecimiento");
  }

  const list = await res.json();
  const arr = Array.isArray(list) ? list : [];

  if (arr.length === 0) {
    throw new Error("No se encontró ningún establecimiento");
  }

  const found =
    establecimientoId != null
      ? arr.find((e: { id: number }) => e.id === establecimientoId)
      : null;
  const establishment = found ?? arr[0];

  return establishment as EstablishmentData;
}

