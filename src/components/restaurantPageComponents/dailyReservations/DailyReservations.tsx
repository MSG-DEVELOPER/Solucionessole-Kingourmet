import { useState, useEffect } from "react";
import { getReservations } from "../../../services/reservationsService";
import { Users, Clock, Plus, Search, Armchair } from "lucide-react";
import {
  Container,
  TitleRow,
  Title,
  ButtonsGroup,
  SearchBarWrapper,
  SearchBar,
  AddButton,
  ReservationCard,
  NameRow,
  ReservationName,
  ReservationInfoRow,
  ReservationInfo,
  ReservationStatus,
  StatusChip,
  LoadingWrapper,
  StatusMessage,
} from "./DailyReservations.styles";
import Spinner from "../../spinner/Spinner";
import AddReservationModal from "../../modals/AddReservationModal/AddReservationModal";

// Adaptamos el tipo a los campos que usa tu API
interface ReservationFromApi {
  nombre_cliente: string;
  hora: string;
  comensales: number;
  sala_id: number;       // lo usaremos como "mesa"
  estado: string;
  // (el resto de campos existen pero no los necesitamos ahora)
}

export default function DailyReservations() {
  const [arrayReservations, setArrayReservations] = useState<ReservationFromApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const formatHour = (hora?: string) => (hora ? hora.slice(0, 5) : "");

  useEffect(() => {
    let mounted = true;
    async function getDataReservations() {
      setLoading(true);
      setError(null);
      try {
        const response = await getReservations(); // ← obtiene array del backend
        if (mounted) {
          setArrayReservations(response);
        }
      } catch {
        if (mounted) {
          setError("No se pudieron cargar las reservas. Si el problema persiste, contacta al soporte.");
          setArrayReservations([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }
    getDataReservations();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Container>
      <TitleRow>
        <Title>RESERVAS</Title>
        <ButtonsGroup>
          <SearchBarWrapper>
            <SearchBar placeholder="Buscar..." onChange={() => {}} />
            <Search size={18} />
          </SearchBarWrapper>
          <AddButton
            onClick={() => setShowAddModal(true)}
            aria-label="Añadir reserva"
          >
            <Plus size={20} />
          </AddButton>
        </ButtonsGroup>
      </TitleRow>

      {loading && (
        <LoadingWrapper>
          <Spinner />
        </LoadingWrapper>
      )}

      {!loading && error && (
        <StatusMessage>{error}</StatusMessage>
      )}

      {!loading && !error && arrayReservations.length === 0 && (
        <StatusMessage>No hay reservas para mostrar.</StatusMessage>
      )}

      {!loading && !error && arrayReservations.map((res, index) => (
        <ReservationCard key={index}>
          <NameRow>
            <ReservationName>
              {res.nombre_cliente}
            </ReservationName>

            <ReservationStatus>
              <StatusChip $estado={res.estado as "confirmada" | "Pendiente"}>
                {res.estado}
              </StatusChip>
            </ReservationStatus>
          </NameRow>

          <ReservationInfoRow>
            <ReservationInfo>
                <Clock size={14} /> {formatHour(res.hora)}
            </ReservationInfo>

            <ReservationInfo>
              <Users size={14} /> {res.comensales}
            </ReservationInfo>

            <ReservationInfo>
              <Armchair size={14} /> {res.sala_id}
            </ReservationInfo>
          </ReservationInfoRow>
        </ReservationCard>
      ))}

      <AddReservationModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </Container>
  );
}
