import IArticles from '../../interfaces/IArticles';

const initialState: IArticles = {
  author: '',
  title: '',
  description: '',
  url: '',
  urlToImage: '',
  publishedAt: '',
  content: '',
  source: {
    id: '',
    name: '0'
  }
};

const ACTION_SET_ARTICLE: string = 'SET_ARTICLE';
const ACTION_UNSET_ARTICLE: string = 'UNSET_ARTICLE';

export { initialState, ACTION_SET_ARTICLE, ACTION_UNSET_ARTICLE };
