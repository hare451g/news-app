import React, { useContext } from 'react';

import ArticleContext from '../../store/Article';
import { unSetArticleAction } from '../../store/Article/actions';

const ArticleView: React.FC<{}> = props => {
  const [state, dispatch] = useContext(ArticleContext);
  const { title, content, url, urlToImage, author, publishedAt } = state;
  return (
    <div>
      <img src={urlToImage} />
      <h1>{title}</h1>
      <p>
        Author: {author} | Published At: {publishedAt}
      </p>
      <article>{content}</article>
      <button onClick={() => dispatch(unSetArticleAction())}>back</button>
    </div>
  );
};

export default ArticleView;
