import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Data from './src/Data'
import BarChart from './Components/Barchart'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';


function App() {
  return (
    <div className="container-app">
      
        <BrowserRouter>
        <Route>
       <VictoryChart
       theme={VictoryTheme.material}
       >
        <VictoryLine
        style={{data: {stroke:"black"},
        parent: { border:"1px solid #ccc"}
  }}
  data={[Data]}
    
      />
      </VictoryChart>
      </Route>
      </BrowserRouter>
    </div>
  


export default App;
