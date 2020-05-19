import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler ,State} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';


import Header from '../../components/Header';
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'

import  {Container,Content,Card,CardHeader,CardContent,CardFooter,Title,Description,Annotation}  from './styles';

export default function Main() {

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event([
    {
      nativeEvent:{
        translateY:translateY,
      }
    }
  ],{useNativeDriver:true})

  function onHandlerStateChange(event){

  }


  return (
      <Container>
        <Header/>
        <Content>
          <Menu/>
          <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChange}>
            <Card style={{
              transform:[{
                translateY,
              }]
            }}> 
              <CardHeader>
              <Icon name="attach-money" size={28} color="#666"/>
              <Icon name="visibility-off" size={28} color="#666"/>
              </CardHeader>
              <CardContent>
                <Title>Saldo disponivel</Title>
                <Description>2323</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferencia de cash para macbok pro de angelo
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
         
        </Content>
        <Tabs/>
      </Container>
  );
}


