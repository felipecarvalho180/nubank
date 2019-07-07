import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header/Header';
import Tabs from '~/components/Tabs/Tabs';
import Menu from '~/components/Menu/Menu';

const Main = () => {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  const handleStateChange = (event) => {

  };

  return (
    <Wrapper>

      <Header />

      <ContentWrapper>
        <Menu translateY={ translateY } />

        <PanGestureHandler
          onGestureEvent={ animatedEvent }
          onHandlerStateChange={ handleStateChange }
        >
          <Card
            style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp',
                }),
              }],
            }}
          >
            <CardHeader>
              <CashIcon />
              <VisibleIcon />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponivel</Title>
              <Description>R$ 526.915,32</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$20,00 recebida de Felipe Carvalho.
              </Annotation>
            </CardFooter>
          </Card>

        </PanGestureHandler>

      </ContentWrapper>

      <Tabs />

    </Wrapper>
  );
}

const Wrapper = styled.View`
  background-color: #8B10AE;
  justify-content: center;
  flex: 1;
`;

const ContentWrapper = styled.View`
  flex: 1;
  max-height: 500px;
  z-index: 5;
  margin-bottom: 20px;
`;

const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const CashIcon = styled(Icon).attrs({
  name: 'attach-money',
})`
  font-size: 28;
  color: #666;
`;

const VisibleIcon = styled(Icon).attrs({
  name: 'visibility-off',
})`
  font-size: 28;
  color: #666;
`;

const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;

export default Main;
