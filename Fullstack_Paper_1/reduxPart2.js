import React, { useState } from 'react';

const classInfo = () => {
    let [studentsCount, setStudentsCount] = useState(0);
    
    const students = [
        {name: "Nrupul", present: false},
        {name: "Prateek", present: true},
    ];

    
    const addStudent = () => {
        
    
    }

    return(
        <div>
            <p>Number of students in class room: {studentsCount}</p>
            <button onClick={addStudent}>Add Student</button>
        </div>
    )
};



// 1. Can you provide a brief summary on what is happening on line 34, 39?
// Line 34 is setting the states of studentsCount and setStudentsCount to 0
// Line 39 is a button to add a student to the studentCount but it missing the function to add a student

//2.