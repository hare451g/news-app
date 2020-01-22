import React from 'react';
import moment from 'moment';

import IArticles from 'interfaces/IArticles';
import { Container, Title, Image, PublishedAt, Content } from './styled';

const News: React.FC<IArticles> = props => {
  return (
    <Container>
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
