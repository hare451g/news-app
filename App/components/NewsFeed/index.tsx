import React, { useEffect } from 'react';

import News from '../../components/News';
import INewsFeed from '../../interfaces/INewsFeed';
import useFetchNews from '../../hooks/useFetchNews';

import { Title } from './styled';

const NewsFeed: React.FC<INewsFeed> = props => {
  const { loading, error, news, page, fetchNews, setPage } = useFetchNews({
    category: props.category,
    pageSize: props.pageSize
  });

  useEffect(() => {
    fetchNews();
  }, [page]);

  const handleLoadMore = () => {
    setPage(currentPage => currentPage + 1);
  };

  if (loading) {
    return <div>Loading {props.category} . . . </div>;
  }

  if (error) {
    return <div> Something went wrong! </div>;
  }

  if (news.articles && news.articles.length >= 1) {
    const { articles, totalResults } = news;
    return (
      <>
        <Title>Top {props.category}</Title>
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
