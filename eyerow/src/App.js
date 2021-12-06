import React, { useState } from 'react';
import './App.css';
import SonarImage from './components/SonarImage';
import AddCoords from './components/AddCoords';
function App() {

  const [sonarData, setSonarData] = useState([]);

  return (
    <div className="App">

      <SonarImage setSonarData={setSonarData} sonarData={sonarData} />
      <AddCoords setSonarData={setSonarData} />
    </div>
  );
}

export default App;
