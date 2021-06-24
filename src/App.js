import React from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { ThemeProvider} from "atomize";

const theme = {
  colors: {
    amarillo: "var(--amarillo)",
    amarilloCremoso: "var(--amarilloCremoso)",
    prado: "var(--prado)",
    hierba: "var(--hierba)",
    pantano: "var(--pantano)",
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <>
        <Header/>        
      </>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;