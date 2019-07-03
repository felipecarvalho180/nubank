import React from 'react';
import styled from 'styled-components/native';

import Header from '~/components/Header/Header';

const Main = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #8B10AE;
`;

export default Main;
