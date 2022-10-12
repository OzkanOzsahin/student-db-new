import React from "react"

//import ReactDOM from "react-dom"
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';



function BarChart({Data}) {
    
       const assignmentData = {
       type: 'horizontalbar',
       labels: {
       assignment:values.assignment,
       difficulty: values.difficulty,
       fun: values.fun,
       },
       data: {stroke: "FB8833"},
       parent: {border: "1px solid"},
       data: [{Data}],
        render() {
          return (
            <div className="bar-chart">
            <VictoryChart>
                theme={VictoryTheme.material}
                domainpadding: {20}
                width: {720}
                height: {200}
                <VictoryAxis
                tickValues={[Data]}
                tickFormat={[assignment.fun]}
                tickFormat={[assignment.difficulty]}
                />
                <VictoryAxis
                dependentAxis
                tickFormat={(y) => ([0,5])}
                y="grade"
                    />
            <VictoryBar
              data={Data}
              // data accessor for x values
              x="assignment"
              // data accessor for y values
              y="grade"
            />
            
            </VictoryChart>
            </div>
          )
          
      
  
    
        
    export default BarChart

   

   
    



