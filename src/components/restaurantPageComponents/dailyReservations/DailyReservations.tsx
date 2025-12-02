import { Phone } from "lucide-react";
import {
  Container,
  Title,
  ReservationCard,
  NamePhoneRow,
  ReservationName,
  ReservationPhone,
  ReservationTable,
  TableChip,
  ReservationTime,
} from "./DailyReservations.styles";

interface Reservation {
  nombre: string;
  mesa: number;
  telf: string;
  horario: string;
}

export default function DailyReservations() {
  const data: Reservation[] = [
    { nombre: "Juan Sin Miedo", mesa: 10, telf: "123456789", horario: "12:00-14:00" },
    { nombre: "María de la O", mesa: 5, telf: "987654321", horario: "13:00-15:00" },
    { nombre: "Pedrito Sanchez", mesa: 2, telf: "555555555", horario: "14:00-16:00" },
    { nombre: "Juan", mesa: 10, telf: "123456789", horario: "12:00-14:00" },
    { nombre: "María", mesa: 5, telf: "987654321", horario: "13:00-15:00" },
    { nombre: "Pedro", mesa: 2, telf: "555555555", horario: "14:00-16:00" },
    { nombre: "Juan", mesa: 10, telf: "123456789", horario: "12:00-14:00" },
    { nombre: "María", mesa: 5, telf: "987654321", horario: "13:00-15:00" },
    { nombre: "Pedro", mesa: 2, telf: "555555555", horario: "14:00-16:00" },
  ];

  return (
    <Container>
      <Title>RESERVAS</Title>
      {data.map((res, index) => (
        <ReservationCard key={index}>
          <NamePhoneRow>
            <ReservationName>{res.nombre}</ReservationName>
            <ReservationPhone>
              <Phone size={14} /> {res.telf}
            </ReservationPhone>
          </NamePhoneRow>
          <ReservationTable>
            Mesa: <TableChip>{res.mesa}</TableChip> <ReservationTime>{res.horario}</ReservationTime>
          </ReservationTable>
        </ReservationCard>
      ))}
    </Container>
  );
}
