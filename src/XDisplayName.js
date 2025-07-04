import React, {useState} from "react";

function XDisplayName(){

    const [firstName, setFirstName] = useState(""); // stores first name input
    const [lastName, setlastName] = useState(""); // stores last name input
    const [fullName, setFullName] = useState(""); // stores full name 
  

    // Handle form submission
const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload.
    

    // checks if both fields are filled.
    if(!firstName || !lastName){
       
        return;
    }

    // set and display full name
    setFullName(`${firstName} ${lastName}`);

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
        name="firstName"
        value = {firstName}
        onChange = {(e) => setFirstName(e.target.value)} //update state
        required //Enables native browser validation popup
        />

        </div>

        <div> 
            <label>Last Name:</label>

            {/* Input need to be connected to state using value & onChange */}
            <input type = "text" 
             name="lastName"
             value = {lastName}
             onChange = {(e) => setlastName(e.target.value)} // update state
             required

            />
        </div>
    
        <button type="submit">Submit</button>
    </form>

    {/* Show full name only if submitted */}
    {fullName && (<p> Full Name: {fullName}</p> )}

 </div>

    );
}

export default XDisplayName;