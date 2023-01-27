import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import GridCard from './component/GridCard/GridCard';
import NavbarHead from './component/Navbar/Navbar';
import Toast from './component/Toast/Toast';

function App() {
  return (
    <div className="App">
      <NavbarHead></NavbarHead>
      <button>Plain Button</button>
      <Button variant='danger'>My Button</Button>
      <Spinner animation="grow" variant="primary" />
      <GridCard></GridCard>
      <Toast></Toast>
    </div>
  );
}

export default App;
