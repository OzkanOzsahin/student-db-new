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
const allNames = data.map(students=> students.name)
// weergave naam van student?
const studentNames =[new Set(allNames)].map((name, index) => {

return {
    name: name,
    id: index + 1
}
})


const allData = Object.values(data.reduce(({assignment, difficulty, fun}) => {
    return studentNames.name
    //nieuwe status declaratie en weergave?
    <BrowserRouter>
    <div className="container">
        <Header />
        <Footer />
        <Routes>
            <Route path='Data' element={<Data />} />
            <Route path='Data/:studentName' element={<Student />} />
            <Route path='/' element={BarChart} data={averageData}/>

        </Routes>
        </div>
        </BrowserRouter>


}

export default App;
