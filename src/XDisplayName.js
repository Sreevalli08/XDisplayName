import React, {useState} from "react";

function XDisplayName(){

    const [firstName, setFirstName] = useState(""); // stores first name input
    const [lastName, setlastName] = useState(""); // stores last name input
    const [fullName, setFullName] = useState(""); // stores full name 
    const [error, setError] = useState(false); // shows error
  

    // Handle form submission
const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload.
    console.log("form submission prevented")

    // checks if both fields are filled.
    if(!firstName || !lastName){
        setError(true); // show error 
        return;
    }

    setError(false); // clear error on valid submission


    // set and display full name
    setFullName(`${firstName} ${lastName}`);

    setFirstName(""); // clear first name input
    setlastName(""); // clear last name input
};

    return (

 <div className="fullName">
    <h1>Full Name Display</h1>

    {/* Form element with submit handler */}
    <form onSubmit={handleSubmit}>

        <div>
        <label>First Name:</label>

        {/* input need to be connected to state using value & onChange */}

        <input type = "text"
        value = {firstName}
        onChange = {(e) => setFirstName(e.target.value)} //update state
        name="firstName"
        />

         {/* Show error if first name is empty */}
          {error && !firstName && (
            <p>Please fill out this field.</p>
          )}
        
        </div>

        <div> 
            <label>Last Name:</label>

            {/* Input need to be connected to state using value & onChange */}
            <input type = "text" 
             value = {lastName}
             onChange = {(e) => setlastName(e.target.value)} // update state
            name="lastName"

            />

            {/* Show error if last name is empty */}
            {error && !lastName && (<p> Please fill out this field.</p>)}

        </div>
    
        <button type="submit">Submit</button>
    </form>

    {/* Show full name only if submitted */}
    {fullName && (<p> Full Name: {fullName}</p> )}

 </div>

    );
}

export default XDisplayName;