import './auth.css'
import Box from '@mui/material/Box';
import { Alert, Grid, Paper, Snackbar, styled } from '@mui/material';
import logo from '../../assets/landscape_logo.svg';
import DashedButton from '../common/DashedButton';
import { Form } from 'usetheform';
import LoginInput from '../common/LoginInput';
import instance from '../../axiosConfig';
import React from 'react';

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

  const [openToast, setOpenToast] = React.useState(false)


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

  const onSubmit = async (state: any) => {
    console.log(state);
    await doLogin(state);

  }
  const required = (value: string) => { value && value.trim() !== "" ? undefined : "Required" };

  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Box>
        <Snackbar open={openToast} autoHideDuration={3000} onClose={handleCloseToat} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={handleCloseToat} severity="error" sx={{ width: '100%', backgroundColor: '#FC3600', color: 'white' }}>
            Usuário e/ou Senha errado(s).
          </Alert>
        </Snackbar>
      </Box>
      <Grid container>
      <LoginForm className='form' elevation={10}>
        <Form onSubmit={onSubmit}>
          <div className='logo-div'>
            <img src={logo} alt='Logo'></img>
          </div>
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
              <a href='/' target='_self'><h4>Esqueci minha senha</h4></a>
            </div>
          </div>
          <div className='confirm-button'>
            <DashedButton disabled={false} type='submit'>
              <h2>
                ENTRAR
              </h2>
            </DashedButton>
          </div>
        </Form>
      </LoginForm>
      </Grid>
    </Box>
  );
}