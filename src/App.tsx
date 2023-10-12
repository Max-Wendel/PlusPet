import './App.css'
import ServiceListPage from './components/Pages/ServiceList';
import NavigationBar from './components/common/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar>
          <ServiceListPage/>
      </NavigationBar>
    </div>
  )
}

export default App
