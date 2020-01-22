import React, { useState, useEffect } from 'react';
import News from 'components/News';
import INews from 'interfaces/INews';

import {
  INITIAL_NEWS_STATE,
  NEWS_API_ENDPOINT,
  NEWS_API_KEY
} from './constants';

const NewsFeed: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [news, setNews] = useState<INews>(INITIAL_NEWS_STATE);
  const [page, setPage] = useState<number>(1);

  const fetchNews = async (url: string) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      const json: INews = await response.json();

      setNews(current => ({
        ...current,
        status: json.status,
        articles: [...current.articles, ...json.articles],
        totalResults: json.totalResults
      }));

      if (json.status !== 'ok') {
        throw new Error('Something went wrong . . .');
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(
      `${NEWS_API_ENDPOINT}/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}&page=${page}`
    );
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
        {articles.map(article => (
          <div>
            <News {...article} />
          </div>
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
