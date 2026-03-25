import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import {
  getReservations,
  parseReservationEstado,
  type Reservation,
} from "../../../services/reservations/getReservations";
import { createReservation, type CreateReservationPayload } from "../../../services/reservations/postReservation";
import { Users, Clock, Plus, Search, Calendar, Info } from "lucide-react";
import tableIcon from "../../../assets/icons/tableMin.svg";
import type { RootState } from "../../../redux/store";
import type { Cliente } from "../../../services/clientes/getClientes";
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
  ReservationNameGroup,
  NameInfoButton,
  ReservationName,
  ReservationInfoRow,
  ReservationInfo,
  NotesText,
  ReservationCodeBadge,
  ReservationStatus,
  StatusChip,
  LoadingWrapper,
  StatusMessage,
  TableIcon,
} from "./DailyReservations.styles";
import Spinner from "../../spinner/Spinner";
import AddReservationModal from "../../modals/AddReservationModal/AddReservationModal";
import MoreInfoClientReservation from "../../modals/MoreInfoClientReservation/MoreInfoClientReservation";
import MoreInfoReservation from "../../modals/MoreInfoReservation/MoreInfoReservation";

export default function DailyReservations() {
  const [arrayReservations, setArrayReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);
  const [moreInfoCliente, setMoreInfoCliente] = useState<Cliente | null>(null);
  const [moreReservationOpen, setMoreReservationOpen] = useState(false);
  const [moreReservationId, setMoreReservationId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const establecimientoId = useSelector(
    (state: RootState) => state.auth.user?.id_establecimiento ?? 1
  );
  const clientes = useSelector((state: RootState) => state.clientes.data);
  const clienteById = useMemo(
    () => new Map(clientes.map((c) => [c.id, c])),
    [clientes]
  );

  // Estado para la fecha seleccionada (inicialmente hoy)
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Formato YYYY-MM-DD
  });

  const formatHour = (hora?: string) => (hora ? hora.slice(0, 5) : "");

  const resolveDisplayName = useCallback(
    (res: Reservation) => {
      const fromApi = res.nombre_cliente?.trim();
      if (fromApi) return fromApi;

      if (res.id_cliente == null) return "—";

      const c = clienteById.get(res.id_cliente);
      if (!c) return "—";

      return `${c.nombre} ${c.apellidos}`.trim();
    },
    [clienteById]
  );

  const resolveNotas = (res: Reservation) =>
    res.notas && res.notas.trim() ? res.notas : "-";

  function handleClientInfoClick(res: Reservation) {
    if (res.id_cliente == null) {
      alert("Sin cliente asociado a esta reserva.");
      return;
    }
    const c = clienteById.get(res.id_cliente);
    setMoreInfoCliente(c ?? null);
    setMoreInfoOpen(true);
  }

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
      const estadoNombre =
        parseReservationEstado(res.estado)?.estado_nombre ?? res.estado;
      const nombre = resolveDisplayName(res);
      return (
        nombre.toLowerCase().includes(query) ||
        horaFormateada.includes(query) ||
        res.comensales.toString().includes(query) ||
        res.id_sala.toString().includes(query) ||
        estadoNombre.toLowerCase().includes(query) ||
        res.codigo_reserva.toLowerCase().includes(query) ||
        res.pago.toLowerCase().includes(query)
      );
    });
  }, [arrayReservations, searchQuery, resolveDisplayName]);

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
            <ReservationNameGroup>
              <ReservationName>{resolveDisplayName(res)}</ReservationName>
              <NameInfoButton
                type="button"
                title="Información del cliente"
                aria-label="Información del cliente"
                onClick={() => handleClientInfoClick(res)}
              >
                <Info size={18} strokeWidth={2} aria-hidden />
              </NameInfoButton>
            </ReservationNameGroup>

            <ReservationStatus>
              <StatusChip $estado={res.estado as "confirmada" | "Pendiente"}>
                {parseReservationEstado(res.estado)?.estado_nombre ?? "Pendiente"}
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
              <TableIcon src={tableIcon} alt="Pago" /> {res.pago}
            </ReservationInfo>

            <ReservationInfo>
              <NotesText>{resolveNotas(res)}</NotesText>
            </ReservationInfo>

            <ReservationInfo>
              <ReservationCodeBadge>
                {res.codigo_reserva}
                <NameInfoButton
                  type="button"
                  title="Información de la reserva"
                  aria-label="Información de la reserva"
                  onClick={() => {
                    setMoreReservationId(res.id);
                    setMoreReservationOpen(true);
                  }}
                >
                  <Info size={18} strokeWidth={2} aria-hidden />
                </NameInfoButton>
              </ReservationCodeBadge>
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

      <MoreInfoClientReservation
        open={moreInfoOpen}
        onClose={() => {
          setMoreInfoOpen(false);
          setMoreInfoCliente(null);
        }}
        cliente={moreInfoCliente}
      />

      <MoreInfoReservation
        open={moreReservationOpen}
        onClose={() => {
          setMoreReservationOpen(false);
          setMoreReservationId(null);
        }}
        reservationId={moreReservationId}
      />
    </Container>
  );
}
