import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {Container} from "reactstrap";
import Footer from "./Components/Footer/Footer";

const styles = {
    background: {
        backgroundColor: "#0c1f28"
    }
}

function App() {

  return (
      <>
        <Header/>
        <Container style={styles.background} fluid>
            <Home/>
        </Container>
        <Footer/>
      </>
  )
}

export default App;
