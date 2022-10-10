import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryTooltip } from 'victory';


function BarChart({Data}) {
    
    const assignmentAverageRating = Data.map(assignment => ({
        assignment: assignment.assignment,
        difficultyRating: assignment.diffRateAvg,
        enjoymentRating: assignment.enjoyRateAvg,
        label: `Opdracht ${
          assignment.assignment
        }, difficultyRating: ${assignment.diffRateAvg.toFixed(
          1
        )}, enjoymentRating: ${assignment.enjoyRateAvg.toFixed(1)}`
      }))

     return (
    <div className='chart-container'>
    <VictoryChart domainPadding={15}>
    <VictoryGroup
    labelComponent={VictoryTooltip }
    data={assignmentAverageRating}
    x="assignment"
    y="difficultyRating"
    tickValues={[1, 2, 3, 4, 5]}
    tickFormat={assignmentAverageRating.map(
        assignment => assignment.assignment

    )}
     />
     <VictoryBar
     labelComponent={<VictoryTooltip />}
     data={assignmentAverageRating}
     x="assignment"
     y="funRating"
     tickValues={[1, 2, 3, 4, 5]}
     tickFormat={assignmentAverageRating.map(
        assignment => assignment.assignment
     )}
     />
     
     <VictoryAxis
     tickValues={[1, 2, 3, 4, 5]}
     tickFormat={assignmentAverageRating.map(
        average => average.assignment
     )}
     />
     <VictoryAxis dependentAxis />
     </VictoryChart>
     </div>
)
     }




export default BarChart