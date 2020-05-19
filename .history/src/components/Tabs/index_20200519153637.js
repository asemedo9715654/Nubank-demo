import React from 'react';
import  {Container,TabsContainer,TabItem,TabText}  from './style';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs({translateY}){
    return(
        <Container style={{
            opacity:translateY.interpolate({
                inputRange:[0,150],
                outputRange:[0,1]
            })
        
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color="#fff"/>
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#fff"/>
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#fff"/>
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#fff"/>
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color="#fff"/>
                    <TabText>Bloquear cartao</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}