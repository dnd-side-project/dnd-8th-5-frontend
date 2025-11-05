export interface PageableResponse<T> {
  content: T[];
  pageRequest: {
    page: number;
    size: number;
    offset: number;
  };
  total: number;
  hasNext: boolean;
  hasPrevious: boolean;
  hasContent: boolean;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface InfinitePage<T> {
  items: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  nextPage?: number;
}

export function convertPageable<T>(res: PageableResponse<T>): InfinitePage<T> {
  const hasNext = !res.isLast;
  return {
    items: res.content,
    page: res.pageRequest.page,
    size: res.pageRequest.size,
    totalElements: res.total,
    totalPages: res.totalPages,
    hasNext,
    nextPageP: hasNext ? res.pageRequest.page + 1 : undefined,
  };
}
