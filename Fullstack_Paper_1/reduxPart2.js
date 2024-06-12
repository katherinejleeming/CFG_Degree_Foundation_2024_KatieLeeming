const classInfo = () => {
    let [studentsCount, setStudentsCount] = useState(0);

    return(
        <div>
            <p>Number of students in class room: {studentsCount}</p>
            <button onClick={setStudentsCount}>Add Student</button>
        </div>
    )
};



// 1. Can you provide a brief summary on what is happening on line 34, 39?

// Line 34 is setting the states of studentsCount and setStudentsCount to 0
// Line 39 is a button to add a student to the studentCount but it missing the function to add a student

// When a user clicks on the “Add student” button update the state (studentsCount) to
// include only the total number of students who are present.
// a. Write a pseudocode of how your function would look.

// INPUT {name: x , payload = true}
// IF payload = true THEN
// UPDATE state.studentsCount + 1
// RETURN alert('Student Added')
// ELSE Break

// b. How do you ensure that the function is triggered when the button is
// clicked?

// Simply, you could add a console.log/ alert to mark if the function has triggered

// c. How will you update the state with the result of your function?
//  using dispatch(action) on the button click