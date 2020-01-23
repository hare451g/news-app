import React, { useReducer } from 'react';

import NewsFeed from '../../components/NewsFeed';
import ArticleView from '../../components/ArticleView';

import {
  NEWS_CATEGORY_BUSINESS,
  NEWS_CATEGORY_ENTERTAINMENT,
  NEWS_CATEGORY_GENERAL,
  NEWS_CATEGORY_HEALTH,
  NEWS_CATEGORY_SCIENCE,
  NEWS_CATEGORY_SPORTS,
  NEWS_CATEGORY_TECHNOLOGY
} from '../../constants/categories';

import reducer from '../../store/Article/reducer';
import { initialState } from '../../store/Article/constants';
import ArticleContext from '../../store/Article';

const Application: React.FC<{}> = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.title) {
    return (
      <ArticleContext.Provider value={[state, dispatch]}>
        <ArticleView />
      </ArticleContext.Provider>
    );
  }

  return (
    <ArticleContext.Provider value={[state, dispatch]}>
      <NewsFeed category={NEWS_CATEGORY_BUSINESS} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_ENTERTAINMENT} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_GENERAL} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_HEALTH} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_SCIENCE} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_SPORTS} pageSize={5} />
      <NewsFeed category={NEWS_CATEGORY_TECHNOLOGY} pageSize={5} />
      <span>
        {' '}
        ⚡ Powered by <a href='newsapi.org'>NewsApi</a>
      </span>
    </ArticleContext.Provider>
  );
};

export default Application;
