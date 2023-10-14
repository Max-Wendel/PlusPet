import './auth.css'
import Box from '@mui/material/Box';
import { Alert, Paper, Snackbar, Typography, styled } from '@mui/material';
import logo from '../../../assets/landscape_logo.svg';

import { Form } from 'usetheform';
import React from 'react';
import instance from '../../../axiosConfig';
import LoginInput from '../../common/LoginInput';
import DashedButton from '../../common/DashedButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ServerModal() {
  const LoginForm = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    margin: 'auto',
    position: 'relative',
    top: '15%',
    color: theme.palette.text.secondary,
    borderRadius: '30px',
    backgroundColor: '#01FFB2'
  }));

  const [openToast, setOpenToast] = React.useState(false)
  const [forgotAccess, setForgotAccess] = React.useState(false);


  async function doLogin(state: any) {
    instance.post(`/auth/login`,
      {
        login: state.login,
        password: state.password
      }
    ).then((response) => {
      console.log(response);
      console.log(response.data.token);
      instance.defaults.headers.common['Authorization'] = response.data.token;
    }, (error) => {
      console.log(error);
      setOpenToast(true)
    });
  }

  const handleCloseToat = () => {
    setOpenToast(false)
  }
  const handleForgotAccessClick = () => {
    setForgotAccess(true);
  }
  const handleBackToLogin = () => {
    setForgotAccess(false);
  }

  const onSubmit = async (state: any) => {
    console.log(state);
    await doLogin(state);

  }
  const required = (value: string) => { value && value.trim() !== "" ? undefined : "Required" };

  return (
    <Box className={'page'}>

      <Box>
        <Snackbar open={openToast} autoHideDuration={3000} onClose={handleCloseToat} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={handleCloseToat} severity="error" sx={{ width: '100%', backgroundColor: '#FC3600', color: 'white' }}>
            Usuário e/ou Senha errado(s).
          </Alert>
        </Snackbar>
      </Box>

      <LoginForm className='form' elevation={10}>
        <Form onSubmit={onSubmit}>
          <div className='logo-div'>
            <img className='logo' src={logo} alt='Logo'></img>
          </div>
          {
            forgotAccess ?
              (
                <Box>
                  <Typography variant='h3' color={'white'}>Por favor, entre em contato com o administrador para prosseguir com a recuperação da senha.</Typography>
                  <div className='confirm-button-back'>
                    <DashedButton disabled={false} onClick={handleBackToLogin}><ArrowBackIcon />Voltar</DashedButton>
                  </div>
                </Box>
              ) :
              (
                <>
                  <h3>Login</h3>
                  <div>
                    <div className='input'>
                      <LoginInput
                        id='login-username'
                        name='login'
                        placeholder='Usuário'
                        validators={[required]}
                      />
                    </div>
                    <div className='input'>
                      <LoginInput
                        id='login-password'
                        name='password'
                        placeholder='Senha'
                        password
                        validators={[required]}
                      />
                      <a target='_self' onClick={handleForgotAccessClick}><h4>Esqueci minha senha</h4></a>
                    </div>
                  </div>
                  <div className='confirm-button'>
                    <DashedButton disabled={false} type='submit'>
                      <h2>
                        ENTRAR
                      </h2>
                    </DashedButton>
                  </div>
                </>
              )
          }
        </Form>
      </LoginForm>
    </Box>
  );
}