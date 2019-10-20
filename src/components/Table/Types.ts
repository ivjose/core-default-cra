export interface Query {
  _limit: number | undefined;
  _page: number | undefined;
  sortField?: string | null;
  sortOrder?: string | null;
}
