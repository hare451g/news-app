interface INewsRequest {
  country?: string;
  category?: string;
  sources?: string;
  pageSize?: number;
  page?: number;
  apiKey?: string;
}

export default INewsRequest;
