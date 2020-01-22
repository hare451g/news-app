import INews from '../interfaces/INews';

const INITIAL_NEWS_STATE: INews = {
  status: '',
  totalResults: 0,
  articles: []
};

const NEWS_API_ENDPOINT = 'https://newsapi.org';
const NEWS_API_KEY = 'd5d93292f2bf402897ad3c9f81967ea2';

export { INITIAL_NEWS_STATE, NEWS_API_ENDPOINT, NEWS_API_KEY };
