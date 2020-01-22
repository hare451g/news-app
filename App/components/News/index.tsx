import React from 'react';
import IArticles from '../../interfaces/IArticles';
import { Container, Title, Image, PublishedAt, Content } from './styled';

const News: React.FC<IArticles> = props => {
  return (
    <Container>
      <Image src={props.urlToImage} />
      <Content>
        <Title>{props.title}</Title>
        <PublishedAt>{props.publishedAt}</PublishedAt>
      </Content>
    </Container>
  );
};

export default News;
