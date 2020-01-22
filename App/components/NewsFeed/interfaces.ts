interface IArticleSource {
  id: string | null;
  name: string;
}

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

interface INews {
  status: string;
  totalResults: number;
  articles: Array<IArticles>;
}

export { IArticleSource, IArticles, INews };
