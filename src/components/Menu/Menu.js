
import React from 'react';
import styled from 'styled-components/native';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Animated } from 'react-native';

const Menu = ({
  translateY
}) => {
  return (
    <Wrapper
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <MQRCode />
      </Code>

      <Nav>
        <NavItems>
          <HelpIcon />
          <NavText>Me ajuda</NavText>
        </NavItems>
        <NavItems>
          <PerfilIcon />
          <NavText>Meu perfil</NavText>
        </NavItems>
        <NavItems>
          <CardIcon />
          <NavText>Configurar cartão</NavText>
        </NavItems>
        <NavItems>
          <PhoneIcon />
          <NavText>Configurações do app</NavText>
        </NavItems>
      </Nav>

      <SignOutButton>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Wrapper>
  );
};

const Wrapper = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

const Code = styled.View`
  overflow: hidden;
  background: #fff;
  padding: 10px;
  align-self: center;
`;

const MQRCode = styled(QRCode).attrs({
  value: 'https://www.linkedin.com/in/felipe-carvalho-680b07162/',
  fgColor: '#fff',
  bgColor: '#8B10AE',
  size: 80,
})``;

const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${ StyleSheet.hairlineWidth }px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

const NavItems = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${ StyleSheet.hairlineWidth }px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

const HelpIcon = styled(Icon).attrs({
  name: 'help-outline',
})`
  font-size: 20px;
  color: #fff;
`;

const PerfilIcon = styled(HelpIcon).attrs({
  name: 'person-outline',
})``;

const CardIcon = styled(HelpIcon).attrs({
  name: 'credit-card',
})``;

const PhoneIcon = styled(HelpIcon).attrs({
  name: 'smartphone',
})``;

const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

const SignOutButton = styled.TouchableOpacity`
  border-width: ${ StyleSheet.hairlineWidth }px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

const SignOutButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;

export default Menu;
