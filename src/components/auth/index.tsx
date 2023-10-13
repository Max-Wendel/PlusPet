import './auth.css'
import Box from '@mui/material/Box';
import { Paper, styled } from '@mui/material';
import logo from '../../assets/landscape_logo.svg';
import DashedButton from '../common/DashedButton';
import { Form } from 'usetheform';
import LoginInput from '../common/LoginInput';
import axios from 'axios';

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


  const onSubmit = (state: any) => {
    console.log(state);
    let config = {
      headers:{
        contentType: 'application/json',
        accept: '*/*'
      }
    }
    axios.post(
      'http://localhost:8080/auth/login',
      {
        login: state.login, 
        password: state.password
      },
      config
      ).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }
  const required = (value: string) => { value && value.trim() !== "" ? undefined : "Required" };

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
    </Box>
  );
}