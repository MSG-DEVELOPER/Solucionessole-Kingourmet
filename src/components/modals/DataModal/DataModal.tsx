// DataModal.tsx
import React, { useState } from "react";
import {
  LucideMoreVertical,
  LucideX,
  LucideSearch,
  LucideSliders,
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
  ActionsMenu,
  SearchBar,
  FilterIcon,
  CloseButton,
  SearchContainer,
  SearchBarWrapper,
  ActionsIconWrapper,
  TableWrapper,
} from "./DataModal.styles.ts";

interface DataModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Record<string, any>[];
  title?: string;

  // Opcionales para lógica futura
  showSearchBar?: boolean;
  showFilterIcon?: boolean;
  onSearch?: (value: string) => void;
  onSort?: (column: string) => void;
  onFilter?: () => void;
  onRowAction?: (action: string, row: any) => void;
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
  onRowAction,
}) => {
  const [openRowMenu, setOpenRowMenu] = useState<number | null>(null);

  if (!isOpen) return null;

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <ModalOverlay>
      <ModalContainer>
        {/* Header */}
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>
            <LucideX size={20} />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {(showSearchBar || showFilterIcon) && (
            <SearchContainer>
              {showSearchBar && (
                <SearchBarWrapper>
                  <SearchBar
                    placeholder="Buscar..."
                    onChange={(e) => onSearch?.(e.target.value)}
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

          {/* Tabla */}
          <TableWrapper>
            <Table>
              <thead>
                <TableRow>
                  {columns.map((col) => (
                    <TableHeader
                      key={col}
                      onClick={() => onSort?.(col)}
                    >
                      {col}
                    </TableHeader>
                  ))}
                  <TableHeader>Acciones</TableHeader>
                </TableRow>
              </thead>

              <tbody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((col) => (
                      <TableCell key={col}>{row[col]}</TableCell>
                    ))}

                    <TableCell>
                      <ActionsIconWrapper
                        onClick={() =>
                          setOpenRowMenu(openRowMenu === index ? null : index)
                        }
                      >
                        <LucideMoreVertical size={20} />

                        {openRowMenu === index && (
                          <ActionsMenu>
                            <button
                              onClick={() => onRowAction?.("edit", row)}
                            >
                              Editar
                            </button>

                            <button
                              onClick={() => onRowAction?.("delete", row)}
                            >
                              Eliminar
                            </button>
                          </ActionsMenu>
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
          {data.length} registro{data.length !== 1 ? "s" : ""}
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DataModal;
