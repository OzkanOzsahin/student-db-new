import React from "react";

import {VictoryBar, VictoryChart, 
VictoryAxis, VictoryTheme, VictoryGroup, VictoryLegend, VictoryLabel, VictoryContainer, VictoryTooltip }
from "victory";
import { useParams } from "react-router-dom";


function ChartIndividualStudent ({Data}) {

    //Naam als parameter?
    const { name } = useParams();
    //Individuele data weergave
    const individualStudentsData = Data.filter(student => {
    // Return hier om data te weergeven
    return student.name === name })

    // Hier de variabele uit de mockdata
    const data = individualStudentsData.map(student => ({
        assignment: student.assignment,
        difficulty: student.difficulty,
        fun: student.fun,
        label: 
        `Assignment ${student.assignment},
        difficulty: ${student.difficulty.toFixed(1)},
        fun: ${student.fun.toFixed(1)}`
    }))
     
    return (
        <div className = "bar-chart-individual-student">
        <VictoryChart
        theme={VictoryTheme.material}
        width={750}
        height={220}
        domain={{x:[0, 50]}}
        containerComponent={
        <VictoryContainer width={700} height={250} />
        }
        >
        <VictoryLegend
        x={550}
        y={25}
        itemsPerRow={2}
        orientation="horizontal"
        data={[{name:"fun", symbol: {color: "blue", type:"bar"}},
             { name: "difficulty", symbol: {color: "orange", type:"bar"}},
        ]}
        />

       

        <VictoryLabel
        x={50}
        y={175}
        text="Assignment"
        style={[{fill: "black", fontSize: 5}]}
        />

        <VictoryAxis
        style={{ 
            ticks:{stroke: "grey", size:2},
            tickLabels: {
                fontSize: 5,
                padding: 2,
                angle: -50,
            },
        }}
        />
        <VictoryLabel
        x={25}
        y={75}
        angle={-90}
        text="Rating"
        style={[{ fill: "black", fontsize: 10}]}
        />

      <VictoryGroup
      offset={4}
      colorScale={["blue", "orange"]}
      >

      <VictoryBar
      labelComponent=
      {
        <VictoryTooltip
        style={[{fontSize: 5}]}
        />
         }
        data={data}
        x="assignment"
        y="difficulty"
        barwidth={3}
        />
        <VictoryBar
        labelComponent={
            <VictoryTooltip
            style={[{fontSize: 5}]}
            />}
            data={data}
            x="assignment"
            y="difficulty"
            barwidth={3}
            />
            </VictoryGroup>
        
        </VictoryChart>
        </div>
        )
      }
            



     export default ChartIndividualStudent
