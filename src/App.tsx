import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { useAppDispatch } from './app/hooks';
import Routes from './routes';

function App() {
  const dispatch = useAppDispatch();

  
  return (
      <Routes />
  )
}

export default App
