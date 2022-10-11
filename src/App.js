import React from 'react';
import './App.css';
//import BarChart from './BarChart';
//import { BrowserRouter,  Route } from 'react-router-dom'

import Data from './Data'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';


function App() {
  
  return (
    <div className="container-app">
      
        
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
      
      
    </div>
  )
}


export default App;
