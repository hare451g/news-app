import React, { useContext } from 'react';
import moment from 'moment';

import ArticleContext from '../../store/Article';
import { setArticleAction } from '../../store/Article/actions';

import IArticles from '../../interfaces/IArticles';

import { Container, Title, Image, PublishedAt, Content } from './styled';

const News: React.FC<IArticles> = props => {
  const [state, dispatch] = useContext(ArticleContext);

  return (
    <Container onClick={() => dispatch(setArticleAction({ ...props }))}>
      <Image src={props.urlToImage} />
      <Content>
        <Title>{props.title}</Title>
        <PublishedAt>
          {moment(props.publishedAt).format('d MMMM Y')}
        </PublishedAt>
      </Content>
    </Container>
  );
};

export default News;
