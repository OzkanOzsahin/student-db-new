import React from "react";
import { Link } from "react-router-dom";

function IndividualStudents ({ name }) {
    return (
        <Link to={`/student/${name}`}>
            <h1 className="students">{name}</h1>
        </Link>
    )

}

export default IndividualStudents