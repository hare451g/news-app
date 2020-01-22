import * as React from 'react';

interface propTypes {
  name: string;
}

const Hello: React.SFC<propTypes> = ({ name }) => {
  return <h1>{name}</h1>;
};

export default Hello;
