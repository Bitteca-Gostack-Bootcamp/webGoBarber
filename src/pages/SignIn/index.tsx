import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="Go Barber" />

      <form>
        <h1>Faça seu Logon</h1>
        <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci Minha Senha</a>
      </form>
      <a href="criar">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
