import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { getReservations } from "../../../services/reservations/getReservations";
import { createReservation, type CreateReservationPayload } from "../../../services/reservations/postReservation";
import { Users, Clock, Plus, Search, Calendar } from "lucide-react";
import tableIcon from "../../../assets/icons/tableMin.svg";
import type { RootState } from "../../../redux/store";
import {
  Container,
  TitleRow,
  DateSelectorWrapper,
  DateDisplay,
  DayNumber,
  DateRest,
  DateInput,
  CalendarIcon,
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
  TableIcon,
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
  const [searchQuery, setSearchQuery] = useState("");
  const establecimientoId = useSelector(
    (state: RootState) => state.auth.user?.id_establecimiento ?? 1
  );
  
  // Estado para la fecha seleccionada (inicialmente hoy)
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Formato YYYY-MM-DD
  });

  const formatHour = (hora?: string) => (hora ? hora.slice(0, 5) : "");

  // Obtener fecha en formato DD/MM/YYYY, con día separado para estilo
  const getDateParts = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return { day, rest: `/${month}/${year}` };
  };

  const loadReservations = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getReservations(); // ← obtiene array del backend
      setArrayReservations(response);
    } catch {
      setError("No se pudieron cargar las reservas. Si el problema persiste, contacta al soporte.");
      setArrayReservations([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadReservations();
  }, [loadReservations]);

  // Filtrar reservas basado en la búsqueda
  const filteredReservations = useMemo(() => {
    if (!searchQuery.trim()) return arrayReservations;

    const query = searchQuery.toLowerCase();
    return arrayReservations.filter((res) => {
      const horaFormateada = formatHour(res.hora);
      return (
        res.nombre_cliente.toLowerCase().includes(query) ||
        horaFormateada.includes(query) ||
        res.comensales.toString().includes(query) ||
        res.sala_id.toString().includes(query) ||
        res.estado.toLowerCase().includes(query)
      );
    });
  }, [arrayReservations, searchQuery]);

  const handleCreateReservation = async (payload: CreateReservationPayload) => {
    setLoading(true);
    setError(null);
    try {
      await createReservation(payload);
      await loadReservations();
      toast.success("Reserva creada");
    } catch {
      setError("No se pudo crear la reserva. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
      setShowAddModal(false);
    }
  };

  return (
    <Container>
      <TitleRow>
        <DateSelectorWrapper>
          <DateDisplay>
            <DayNumber>{getDateParts(selectedDate).day}</DayNumber>
            <DateRest>  {getDateParts(selectedDate).rest}</DateRest>
          </DateDisplay>
          <CalendarIcon>
            <Calendar size={18} />
            <DateInput
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              aria-label="Seleccionar fecha"
            />
          </CalendarIcon>
        </DateSelectorWrapper>
        <ButtonsGroup>
          <SearchBarWrapper>
            <SearchBar
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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

      {!loading && !error && filteredReservations.length === 0 && arrayReservations.length === 0 && (
        <StatusMessage>No hay reservas para mostrar.</StatusMessage>
      )}

      {!loading && !error && filteredReservations.length === 0 && arrayReservations.length > 0 && (
        <StatusMessage>No se encontraron reservas que coincidan con la búsqueda.</StatusMessage>
      )}

      {!loading && !error && filteredReservations.map((res, index) => (
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
              <TableIcon src={tableIcon} alt="Mesa" /> {res.sala_id}
            </ReservationInfo>
          </ReservationInfoRow>
        </ReservationCard>
      ))}

      <AddReservationModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleCreateReservation}
        establecimientoId={establecimientoId}
      />
    </Container>
  );
}
