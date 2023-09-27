import './auth.css'
import Box from '@mui/material/Box';
import { Paper, styled } from '@mui/material';
import logo from '../../assets/landscape_logo.svg';
import BaseInput from '../common/BaseInput';
import DashedButton from '../common/DashedButton';
import { Form } from 'usetheform';
// import React from 'react';

export default function ServerModal() {
  const LoginForm = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    margin: 'auto',
    position: 'relative',
    top: '10%',
    color: theme.palette.text.secondary,
    borderRadius: '30px',
    backgroundColor: '#01FFB2'
  }));


  const onSubmit = (state: any) => console.log(state);
  const required = (value: string) => {value && value.trim() !== "" ? undefined : "Required"};

  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <LoginForm className='form' elevation={10}>
        <Form onSubmit={onSubmit}>
          <div className='logo-div'>
            <img className='logo' src={logo} alt='Logo'></img>
          </div>
          <h3>Login</h3>
          <div>
            <div className='input'>
              <BaseInput
                name={'username'}
                id='login-username'
                disabled={false}
                size={'medium'}
                style={'login'}
                variant={'outlined'}
                placeholder={'Usuário'}
                touched
                validators={[required]}
              />
            </div>
            <div className='input'>
              <BaseInput
                id='login-password'
                name={'password'}
                disabled={false}
                size={'medium'}
                style={'password'}
                variant={'outlined'}
                placeholder={'Senha'}
                validators={[required]}
              />
              <a href='https://www.google.com/' target='_self'><h4>Esqueci minha senha</h4></a>
            </div>
          </div>
          <div className='confirm-button'>
            <DashedButton
              disabled={false}
              type='submit'
              // onClick={function (): void { console.log('clicked'); }}
            >
              <h2>
                ENTRAR
              </h2>
            </DashedButton>
          </div>
        </Form>
      </LoginForm>
    </Box>
  );
}