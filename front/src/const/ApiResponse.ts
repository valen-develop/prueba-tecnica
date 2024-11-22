export type ApiResponse<T> = {
  status: number;
  statusMessage: string;
  data: T;
};

export type ApiResponseError<T> = {
  status: number;
  data: T;
};
