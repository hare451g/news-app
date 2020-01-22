import React from 'react';

import NewsFeed from '../../components/NewsFeed';
import {
  NEWS_CATEGORY_BUSINESS,
  NEWS_CATEGORY_ENTERTAINMENT,
  NEWS_CATEGORY_GENERAL,
  NEWS_CATEGORY_HEALTH,
  NEWS_CATEGORY_SCIENCE,
  NEWS_CATEGORY_SPORTS,
  NEWS_CATEGORY_TECHNOLOGY
} from '../../constants/categories';

const Application: React.FC<{}> = props => {
  return (
    <>
      <NewsFeed category={NEWS_CATEGORY_BUSINESS} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_ENTERTAINMENT} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_GENERAL} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_HEALTH} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_SCIENCE} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_SPORTS} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_TECHNOLOGY} pageSize={5} />
    </>
  );
};

export default Application;
