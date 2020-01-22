import IArticles from '../interfaces/IArticles';

interface INews {
  status: string;
  totalResults: number;
  articles: Array<IArticles>;
}

export default INews;
