//  
import "./App.css";
import { useState} from 'react';
import BarChart from "./Components/BarChart";
import Data from "./Data";
import StudentFilter from "./Components/StudentFilter";
import LineChart from "./Components/LineChart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChartIndividualStudent from "./Components/ChartIndividualStudent";



//data.products.map()??
function App() {
   const [data]  = useState(Data)
   const allstudentNames = data.map(students => students.name)
   const studentNames = [...new Set(allstudentNames)].map((name, index)=> {

      return {
         name: name,
         id: index + 1
      }
})

//.map/reduce & weergave van enkele gegeven vanuit bundel van data?
   const assignmentsData = Object.values(Data.reduce((acc, { assignment, difficulty, fun }) => { 
   acc[assignment] = acc[assignment] || { assignment, difficulty: 0, fun: 0, students: 0 };
   acc[assignment].difficulty += difficulty;
   acc[assignment].fun += fun;
   acc[assignment].students++;
   return acc;
}, []))

// Gemiddelde per student
const averageData = assignmentsData.map(( {assignment, students, difficulty, fun}) => {
return {
   assignment, students, 
   difficulty: difficulty / students,
   fun: fun / students
}
});

console.log(
   averageData.filter(({ difficulty, fun }) => {
     const check = (n) => Number.isNaN() || n === 0;
     return check(difficulty) || check(fun);
   })
 );


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
            <ChartIndividualStudent data ={Data}/>
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
