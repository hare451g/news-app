import React, { useState } from 'react';
import axios from 'axios';

import INewsRequest from '../interfaces/INewsRequest';
import INews from '../interfaces/INews';
import INewsFeed from '../interfaces/INewsFeed';

import {
  INITIAL_NEWS_STATE,
  NEWS_API_ENDPOINT,
  NEWS_API_KEY
} from '../constants/request';

import IUseFetchNews from '../interfaces/IUseFetchNews';

function useFetchNews(args: INewsFeed): IUseFetchNews {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [news, setNews] = useState<INews>(INITIAL_NEWS_STATE);
  const [page, setPage] = useState<number>(1);

  const fetchNews = async () => {
    setLoading(true);
    setError(false);

    try {
      const url = `${NEWS_API_ENDPOINT}/v2/top-headlines`;

      const params: INewsRequest = {
        page,
        apiKey: NEWS_API_KEY,
        country: 'us',
        pageSize: args.pageSize,
        category: args.category
      };

      const response = await axios.get(url, { params });
      const data: INews = response.data;

      if (data.status !== 'ok') {
        throw new Error('Something went wrong . . .');
      }

      setNews(current => ({
        ...current,
        status: data.status,
        articles: [...current.articles, ...data.articles],
        totalResults: data.totalResults
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return {
    loading,
    error,
    news,
    page,
    fetchNews,
    setPage
  };
}

export default useFetchNews;
