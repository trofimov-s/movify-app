export interface ListApiResponse<T> {
  dates?: {
    maximum: string; // Date 'YYYY-MM-DD'
    minimum: string; // Date 'YYYY-MM-DD'
  };
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
}
