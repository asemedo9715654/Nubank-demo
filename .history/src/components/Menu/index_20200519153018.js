import React from 'react';
import  {Container,Code,Nav,NavItem,NavText,SignOutButton,SignOutButtonText}  from './style';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Menu({translateY}){
    return(
        <Container style={{
            opacity:translateY.interpolate({
                inputRange:[0,150],
                outputRange:[0,1]
            })
        
        }}>
           <Code>
                <QRCode
                    value="Just some string value"
                    Color="#fff"
                    backgroundColor="#8B10AE"
                    logoBackgroundColor='transparent'
                />
            </Code> 
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff"/>
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff"/>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff"/>
                    <NavText>Configurar Cartao</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff"/>
                    <NavText>Configuracao do app</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={()=>{}}>
                <SignOutButtonText>Sair</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}