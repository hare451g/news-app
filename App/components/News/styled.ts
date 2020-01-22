import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const Content = styled.div`
  padding-left: 1rem;
`;

const Title = styled.h3`
  font-family: 'Vidaloka', serif;
  font-weight: normal;
`;

const Image = styled.img`
  object-fit: cover;
  width: 120px;
  height: 120px;
  border-radius: 1rem;
  width: 25%;
`;

const PublishedAt = styled.span`
  font-family: 'Work Sans', sans-serif;
`;

export { Container, Content, Title, Image, PublishedAt };
