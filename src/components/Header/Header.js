import React from 'react';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

const Header = () => {
  return (
    <Wrapper>
      <Top>
        <Logo source={ logo } />
        <Title>Felipe</Title>
      </Top>
      <Icon />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  align-items: center;
  padding: 40px 0 30px;
`;

const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Logo = styled.Image``;

const Title = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
  margin-left: 8px;
`;

const Icon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-down',
})`
  font-size: 20px;
  color: #FFF;
`;

export default Header;
