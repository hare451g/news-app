import IArticles from '../../interfaces/IArticles';
import IAction from '../../interfaces/IAction';

import { ACTION_SET_ARTICLE, ACTION_UNSET_ARTICLE } from './constants';

function setArticleAction(article: IArticles): IAction {
  return {
    type: ACTION_SET_ARTICLE,
    payload: article
  };
}

function unSetArticleAction(): IAction {
  return {
    type: ACTION_UNSET_ARTICLE,
    payload: undefined
  };
}

export { setArticleAction, unSetArticleAction };
