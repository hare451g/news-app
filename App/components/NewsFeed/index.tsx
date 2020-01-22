import React, { useState, useEffect } from 'react';
import axios from 'axios';

import News from '../../components/News';

import INews from '../../interfaces/INews';
import INewsFeed from '../../interfaces/INewsFeed';
import INewsRequest from '../../interfaces/INewsRequest';

import { Title } from './styled';

import {
  INITIAL_NEWS_STATE,
  NEWS_API_ENDPOINT,
  NEWS_API_KEY
} from './constants';

const NewsFeed: React.FC<INewsFeed> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [news, setNews] = useState<INews>(INITIAL_NEWS_STATE);
  const [page, setPage] = useState<number>(1);

  const fetchNews = async (url: string, params: INewsRequest) => {
    setLoading(true);
    setError(false);

    try {
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

  useEffect(() => {
    const url = `${NEWS_API_ENDPOINT}/v2/top-headlines`;
    const params = { country: 'us', apiKey: NEWS_API_KEY, page: page };
    fetchNews(url, params);
  }, [page]);

  const handleLoadMore = () => {
    setPage(currentPage => currentPage + 1);
  };

  if (loading) {
    return <div>Loading News . . . </div>;
  }

  if (error) {
    return <div> Something went wrong! </div>;
  }

  if (news.articles && news.articles.length >= 1) {
    const { articles, totalResults } = news;
    return (
      <>
        <Title>Top Headlines</Title>
        {articles.map(article => (
          <News {...article} />
        ))}
        {articles.length < totalResults && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </>
    );
  }

  return <div>Empty</div>;
};

export default NewsFeed;
