import IArticleSource from '../interfaces/IArticleSource';

interface IArticles {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: IArticleSource;
}

export default IArticles;
