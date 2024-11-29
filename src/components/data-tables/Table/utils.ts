// @ts-nocheck
"use client";

import {
  ITablePagination,
  ITableColumn,
  ITableQueries,
  ITableFilter,
} from "./types";

export interface DataToFormat {
  __typename?: string;
  count: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  docs: any[];
}

export const formatPagination = (
  dataToFormat: DataToFormat
): ITablePagination => {
  const hasNextPage = dataToFormat?.hasNextPage ?? false;
  const hasPrevPage = dataToFormat?.hasPrevPage ?? false;
  const limit = dataToFormat?.limit ?? 10;
  const page = dataToFormat?.page ?? 1;
  const labels = { plural: "Items", single: "Item" };

  return { hasNextPage, hasPrevPage, limit, page, labels };
};

export const camelToSnake = (str: string | unknown) =>
  str
    // @ts-ignore
    .replace(/[A-Z]/g, (letter: any) => `_${letter.toLowerCase()}`)
    .toUpperCase();

export const initialPagination: { limit: number; page: number } = {
  limit: 10,
  page: 1,
};

export const generateUUID = () =>
  // @ts-ignore
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

export const insertColumn = (
  newColumn: ITableColumn<any>,
  originalColumn: ITableColumn<any>[]
) => {
  return [
    ...originalColumn.slice(0, originalColumn.length - 1),
    newColumn,
    ...originalColumn.slice(originalColumn.length - 1),
  ];
};

export function updateSearchInUrl(params: ITableQueries) {
  const queryParts = [];

  // Procesar queries
  if (params.queries) {
    params.queries.forEach((query, index) => {
      queryParts.push(
        `queries[${index}][field]=${encodeURIComponent(query.field)}`
      );
      queryParts.push(
        `queries[${index}][text]=${encodeURIComponent(query.text)}`
      );
    });
  }

  // Procesar filters
  if (params.filters) {
    params.filters.forEach((filter) => {
      filter.options.forEach((option, index) => {
        queryParts.push(
          `filters[${filter.id}][${index}]=${encodeURIComponent(option as any)}`
        );
      });
    });
  }

  // Agregar limit y page
  if (params.limit) {
    queryParts.push(`perPage=${params.limit}`);
  }
  if (params.page) {
    queryParts.push(`page=${params.page}`);
  }

  const search = queryParts.join("&");

  window.history.pushState(
    {},
    "",
    window.location.origin + window.location.pathname + "?" + search.toString()
  );
}

export const parseURLSearchParams: () => ITableQueries = () => {
  const url = window.location.href;
  const queryString = url.split("?")[1];

  const obj = {
    queries: [],
    filters: [],
    limit: null,
    page: null,
  };

  // Dividir el query string en pares clave-valor
  const pairs = queryString?.split("&");

  if (pairs?.length) {
    pairs.forEach((pair) => {
      const [key, value] = pair.split("=").map(decodeURIComponent);

      // Procesar queries
      const queryMatch = key.match(/^queries\[(\d+)\]\[(\w+)\]$/);
      if (queryMatch) {
        const index = queryMatch[1];
        const field = queryMatch[2];

        if (!obj.queries[index]) {
          obj.queries[index] = {};
        }
        obj.queries[index][field] = value;
        return;
      }

      // Procesar filters
      const filterMatch = key.match(/^filters\[(\w+)\]\[(\d+)\]$/);
      if (filterMatch) {
        const filterId = filterMatch[1];
        const optionIndex = filterMatch[2];

        // Asegurarse de que el filtro exista
        const filter = obj.filters.find((f) => f.id === filterId);
        if (!filter) {
          obj.filters.push({ id: filterId, options: [] });
        }
        obj.filters.find((f) => f.id === filterId).options[optionIndex] = value;
        return;
      }

      // Procesar limit y page
      if (key === "perPage") {
        obj.limit = Number(value);
      } else if (key === "page") {
        obj.page = Number(value);
      }
    });
  }

  // Limpiar las opciones de los filtros para eliminar espacios vacíos
  obj.filters.forEach((filter) => {
    filter.options = filter.options.filter((option) => option !== undefined);
  });

  return obj;
};

export function newFiltersBasedInUrlSearch(
  original: ITableQueries,
  newFilters: ITableFilter[]
) {
  let response = [...newFilters];

  const statusFilter = original.filters.filter((filter) => {
    return newFilters.some(({ id }) => filter.id === id);
  });

  if (statusFilter) {
    response = response.map(({ id, ...rest }) => {
      if (statusFilter.some((current) => current.id === id)) {
        return {
          ...rest,
          id,
          options: rest.options.map((currentOption) => {
            return {
              ...currentOption,
              selected: statusFilter.some(({ options }) => {
                return options.includes(currentOption.value);
              }),
            };
          }),
        };
      } else {
        return { id, ...rest };
      }
    });
  }

  return response;
}
