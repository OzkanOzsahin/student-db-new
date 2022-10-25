import React from "react"


import { 
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryGroup,
    VictoryLegend,
    VictoryLabel,
    VictoryContainer,
    VictoryTooltip
  } from 'victory'

  //Alle opdrachten en waarderingen in een staafdiagram

  function BarChart( {data} ) {
    const assignmentData = data.map(values => ({
      assignment: values.assignment,
      difficulty: values.difficulty,
      fun: values.fun,
      label: 
        `Assignment ${values.assignment}, 
         difficulty: ${values.difficulty.toFixed(1)},
         fun: ${values.fun.toFixed(1)}`
   
    }))
    return (
      <div className="bar-chart">
       <h1>Gemiddelde resultaten alle studenten</h1>
        <VictoryChart>
          theme={VictoryTheme.material}
          width={750}
          height={250}
          domain={{x: [0, 60]}}


          containerComponent={
          <VictoryContainer width={700} height={250} />
          }
        
          <VictoryLegend
            x={550}
            y={24}
            itemsPerRow={2}
            orientation="horizontal"
            data={[
                { name: "Fun", symbol: { fill: "red", type: "square" } },
                { name: "Difficulty", symbol: { fill: "yellow", type: "square" } },
            ]}
          />
          <VictoryLabel
            x={50}
            y={185}
            text="Assignment"
            style={[{ fill: "black", fontSize: 10}]}
          />
          {/* X-ass*/}
          <VictoryAxis
            style={{
            ticks: { stroke: "grey", size: 2 },
            tickLabels: {
                fontSize: 6,
                padding: 2,
                angle: -60,
                textAnchor: "end",
            },
            }}
          />
          <VictoryLabel
            x={24}
            y={80}
            angle={-90}
            text="Rating"
            style={[{ fill: "black", fontSize: 10 }]}
          />
        
            <VictoryAxis
            style={{
            
            y:[0, 5]
            }}
            dependentAxis
          />
            
          <VictoryGroup   
            offset={4}
            colorScale={["red", "yellow" ]}
          >
            <VictoryBar
              labelComponent=
              {<VictoryTooltip
                style={[{ fontSize: 5}]}
              />}
              data={assignmentData} 
              x="assignment" 
              y="fun"
              barWidth={3}
            />
            <VictoryBar
              labelComponent=
              {<VictoryTooltip
                style={[{ fontSize: 5}]}
              />}
              data={assignmentData} 
              x="assignment" 
              y="difficulty"
              barWidth={3}
            />
          </VictoryGroup>
      </VictoryChart>
    </div>
    )
  }

    
   export default BarChart