import './App.css';
import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route,Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AddScreen from './screens/AddScreen'
import EditScreen from './screens/EditScreen'

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main className="py-3">
        <Container>
            <Routes>
              <Route path='/' element = {<HomeScreen/>} />
              <Route path='/add' element = {<AddScreen/>} />
              <Route path='/edit' element = {<EditScreen/>} />
            </Routes>
        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
