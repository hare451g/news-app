import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 1rem 0;
  :hover {
    border: 1px solid #3d3d3d;
    border-radius: 1rem;
  }
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
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`;

const PublishedAt = styled.span`
  font-family: 'Work Sans', sans-serif;
`;

export { Container, Content, Title, Image, PublishedAt };
