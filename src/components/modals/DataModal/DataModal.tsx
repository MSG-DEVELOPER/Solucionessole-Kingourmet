// DataModal.tsx
import React, { useState, useMemo, useEffect } from "react";
import {
  LucideMoreVertical,
  LucideX,
  LucideSearch,
  LucideSliders,
  LucidePlus,
} from "lucide-react";

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  SearchBar,
  FilterIcon,
  CloseButton,
  SearchContainer,
  SearchBarWrapper,
  ActionsIconWrapper,
  TableWrapper,
  HeaderRight,
  AddButton,
} from "./DataModal.styles.ts";

import ActionsMenu from "./actionsMenu/ActionsMenu";

interface DataModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Record<string, unknown>[];
  title?: string;

  showSearchBar?: boolean;
  showFilterIcon?: boolean;
  onSearch?: (value: string) => void;
  onSort?: (column: string) => void;
  onFilter?: () => void;
  onAdd?: () => void;

  rowActions?: (
    row: Record<string, unknown>
  ) => { label: string; onClick: (row: Record<string, unknown>) => void }[];
}

const DataModal: React.FC<DataModalProps> = ({
  isOpen,
  onClose,
  data,
  title = "Datos",
  showSearchBar = false,
  showFilterIcon = false,
  onSearch,
  onSort,
  onFilter,
  onAdd,
  rowActions,
}) => {
  const [openRowMenu, setOpenRowMenu] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Resetear búsqueda cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  // Filtrar datos basado en la búsqueda
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;

    const query = searchQuery.toLowerCase();
    return data.filter((row) => {
      return Object.values(row).some((value) => {
        const stringValue = String(value ?? "").toLowerCase();
        return stringValue.includes(query);
      });
    });
  }, [data, searchQuery]);

  if (!isOpen) return null;

  // 👇 KISS: no pintamos keys internas
  const columns =
    filteredData.length > 0
      ? Object.keys(filteredData[0]).filter((key) => !key.startsWith("_"))
      : [];

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>{title}</h2>

          <HeaderRight>
            {onAdd && (
              <AddButton onClick={onAdd}>
                <LucidePlus size={20} />
              </AddButton>
            )}

            {(showSearchBar || showFilterIcon) && (
              <SearchContainer>
                {showSearchBar && (
                  <SearchBarWrapper>
                    <SearchBar
                      placeholder="Buscar..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        onSearch?.(e.target.value);
                      }}
                    />
                    <LucideSearch size={18} />
                  </SearchBarWrapper>
                )}

                {showFilterIcon && (
                  <FilterIcon onClick={() => onFilter?.()}>
                    <LucideSliders size={20} />
                  </FilterIcon>
                )}
              </SearchContainer>
            )}

            <CloseButton onClick={onClose}>
              <LucideX size={20} />
            </CloseButton>
          </HeaderRight>
        </ModalHeader>

        <ModalBody>
          <TableWrapper>
            <Table>
              <thead>
                <TableRow>
                  {columns.map((col) => (
                    <TableHeader key={col} onClick={() => onSort?.(col)}>
                      {col}
                    </TableHeader>
                  ))}
                  <TableHeader>Acciones</TableHeader>
                </TableRow>
              </thead>

              <tbody>
                {filteredData.map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((col) => (
                      <TableCell key={col}>
                        {String(row[col] ?? "")}
                      </TableCell>
                    ))}

                    <TableCell>
                      <ActionsIconWrapper
                        onClick={() =>
                          setOpenRowMenu(openRowMenu === index ? null : index)
                        }
                      >
                        <LucideMoreVertical size={20} />

                        {openRowMenu === index && rowActions && (
                          <ActionsMenu actions={rowActions(row)} row={row} />
                        )}
                      </ActionsIconWrapper>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </ModalBody>

        <ModalFooter>
          {filteredData.length} registro{filteredData.length !== 1 ? "s" : ""}
          {searchQuery && filteredData.length !== data.length && (
            <span> de {data.length} total{data.length !== 1 ? "es" : ""}</span>
          )}
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DataModal;
