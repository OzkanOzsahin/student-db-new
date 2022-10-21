import React from "react";
import Students from "./Students"


//Filteren uit Data--enkele data waarde
// 1-aanmaken functie 2-schrijven variable met .map
function StudentFilter ( {studentNames} ) {
    const studentList = studentNames.map((Student) =>
    <students
    name={Students.name}
    key={Students.id}
    />
    )

    return(
        <div className="student-filter">
            <h2>Students</h2>
            <h4>Select to filter</h4>
            <div className="student-list">
                {studentList}
            </div>
        </div>
    )
}

export default StudentFilter