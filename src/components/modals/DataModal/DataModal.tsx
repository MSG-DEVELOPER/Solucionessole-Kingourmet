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
  SearchBar,
  FilterIcon,
  CloseButton,
  SearchContainer,
  SearchBarWrapper,
  ActionsIconWrapper,
  TableWrapper,
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
  rowActions,
}) => {
  const [openRowMenu, setOpenRowMenu] = useState<number | null>(null);

  if (!isOpen) return null;

  // 👇 KISS: no pintamos keys internas
  const columns =
    data.length > 0
      ? Object.keys(data[0]).filter((key) => !key.startsWith("_"))
      : [];

  return (
    <ModalOverlay>
      <ModalContainer>
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
                {data.map((row, index) => (
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
          {data.length} registro{data.length !== 1 ? "s" : ""}
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DataModal;
