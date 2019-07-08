import React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tabs = ({ translateY }) => {
  return (
    <Wrapper
      style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [ 0, 380],
            outputRange: [ 0, 30],
            extrapolate: 'clamp',
          })
        }],
        opacity: translateY.interpolate({
          inputRange: [ 0, 380],
          outputRange: [ 1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
    >
      <TabsContainer>
        <TabItem>
          <InviteFriendsIcon />
          <TabText>Indicar Amigos</TabText>
        </TabItem>
        <TabItem>
          <ChargeIcon />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <DepositIcon />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <TransferIcon />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <BlockIcon />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Animated.View)`
  height: 100px;
  margin-bottom: 20px;
`;

const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  showsHorizontalScrollIndicator: false,
})``;

const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

const InviteFriendsIcon = styled(MaterialIcons).attrs({
  name: 'person-add',
})`
  font-size: 24px;
  color: #fff;
`;

const ChargeIcon = styled(InviteFriendsIcon).attrs({
  name: 'chat-bubble-outline',
})``;

const DepositIcon = styled(InviteFriendsIcon).attrs({
  name: 'arrow-downward',
})``;

const TransferIcon = styled(InviteFriendsIcon).attrs({
  name: 'arrow-upward',
})``;

const BlockIcon = styled(InviteFriendsIcon).attrs({
  name: 'lock',
})``;

const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;

export default Tabs;
