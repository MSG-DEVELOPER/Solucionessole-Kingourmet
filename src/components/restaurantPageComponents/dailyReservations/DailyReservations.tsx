import { Phone } from "lucide-react";
import {
  Container,
  ReservationCard,
  ReservationName,
  ReservationPhone,
  ReservationTable,
  TableChip,
} from "./DailyReservations.styles";

interface Reservation {
  nombre: string;
  mesa: number;
  telf: string;
}

export default function DailyReservations() {
  const data: Reservation[] = [
    { nombre: "Juan", mesa: 10, telf: "123456789" },
    { nombre: "María", mesa: 5, telf: "987654321" },
    { nombre: "Pedro", mesa: 2, telf: "555555555" },
    { nombre: "Juan", mesa: 10, telf: "123456789" },
    { nombre: "María", mesa: 5, telf: "987654321" },
    { nombre: "Pedro", mesa: 2, telf: "555555555" },
    { nombre: "Juan", mesa: 10, telf: "123456789" },
    { nombre: "María", mesa: 5, telf: "987654321" },
    { nombre: "Pedro", mesa: 2, telf: "555555555" },
  ];

  return (
    <Container>
      {data.map((res, index) => (
        <ReservationCard key={index}>
          <ReservationName>{res.nombre}</ReservationName>
          <ReservationPhone>
            <Phone size={16} /> {res.telf}
          </ReservationPhone>
          <ReservationTable>
            Mesa: <TableChip>{res.mesa}</TableChip>
          </ReservationTable>
        </ReservationCard>
      ))}
    </Container>
  );
}
