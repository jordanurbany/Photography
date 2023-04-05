import logo from './logo.svg';
import './App.scss';
import  HeroSection  from "../src/components/HeroSection";
import { Container } from 'react-bootstrap';
import { Header} from "../src/components/Header";
import { MenuOverlay } from "../src/components/MenuOverlay";
import { useState } from 'react';


function App() {
  const[navbarOpen, setNavBarOpen] = useState(false);

  return (
    <div className="App">
      <Container>
        <Header navBarOpen={navbarOpen} setNavbarOpen={setNavBarOpen} />
        < MenuOverlay navBarOpen={navbarOpen} setNavbarOpen={setNavBarOpen} />
        <HeroSection />
      </Container>
    </div>
  );
}

export default App;
