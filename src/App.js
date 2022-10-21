//  

import "./App.css";
import { useState } from "react";
import BarChart from "./Components/Barchart";
import Data from "./Data";
import StudentFilter from "./Components/StudentFilter";
import LineChart from "./Components/LineChart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChartIndividualStudent from "./Components/ChartIndividualStudent";



function App() {
   const [data] = useState(Data)
   const allstudentNames = data.map(students => students.name)
   const studentNames = [...new Set(allstudentNames)].map((name, index) => {
      return {
         name: name,
         id: index + 1
      }
})

//.map/reduce & weergave van enkele gegeven
const Data = Object.values(data.reduce((acc, { assignment, difficulty, fun }) => { 
   acc[assignment] = acc[assignment] || { assignment, difficulty: 0, fun: 0, students: 0 };
   acc[assignment].difficulty += difficulty;
   acc[assignment].fun += fun;
   acc[assignment].participants++;
   return acc;
}, []))

// Gemiddelde per student
const averageData = Data.map(( {assignment, students, difficulty, fun}) => {
return {
   assignment, students, 
   difficulty: difficulty / students,
   fun: fun / students
}
});

return (
   <div>
      <Header />
      <BrowserRouter>
      <Routes>
         <Route path='/' element={
            <div className="main-path">
               <BarChart data={averageData} />
               <StudentFilter studentNames={studentNames}/>
               <LineChart data={averageData}/>
               </div>
         }
         />
         <Route
         path='/student/:name' element={
            <div>
            <ChartIndividualStudent data ={data}/>
            </div>
         }
         />
             </Routes>
               </BrowserRouter>
               <Footer/>
               </div>
)       
         }
      
                

export default App
