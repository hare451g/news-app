import INews from '../interfaces/INews';

interface IUseFetchNews {
  loading: boolean;
  error: boolean;
  news: INews;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  fetchNews: () => Promise<void>;
}
export default IUseFetchNews;
