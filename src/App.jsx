// ES6 JS Square brackets Object key

import React, { useState } from 'react';

const App = () => {

    const [fullName, setfullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        qua:"",
    });

    const inputEvent = (event) => {
        // const value = event.target.value
        // const name = event.target.name
        const {name, value} = event.target;
        setfullName(  (preValue) => {
            return{
                ...preValue,
                [name] : value,
            }

        //     if (name === "fName") {
        //         return {
        //             fname: value,
        //             lname: preValue.lname,
        //             email: preValue.email,
        //             phone: preValue.phone,
        //         };
        //     } else if (name === "lName") {
        //         return {
        //             fname: preValue.fname,
        //             lname: value,
        //             email: preValue.email,
        //             phone: preValue.phone,
        //         };
        //     }
        //  else if (name === "email") {
        //     return {
        //         fname: preValue.fname,
        //         lname: preValue.fname,
        //         email: value,
        //         phone: preValue.phone,
        //     };
        // }
        // else if (name === "phone") {
        //     return {
        //         fname: preValue.fname,
        //         lname: preValue.lname,
        //         email: preValue.email,
        //         phone: value,
        //     };
        // }
    });
    }

const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted")
}

return (
    <>
        <div className="main_div">
            <form onSubmit={onSubmits}>
                <div>
                    <h1>
                        Hello {fullName.fname} {fullName.lname} 
                        {" "} 
                    </h1>
                    <p> {fullName.email} </p>
                    <p> {fullName.phone} </p>                    
                    <p> {fullName.qua} </p>                    
                    <input
                        type='text'
                        placeholder="Enter your first name"
                        name="fname"
                        onChange={inputEvent}
                        value={fullName.fname}
                    />
                    <br />
                    <input
                        type='text'
                        placeholder="Enter your last name"
                        name="lname"
                        onChange={inputEvent}
                        value={fullName.lname}
                    />
                    <br />
                    <input
                        type='email'
                        placeholder="Enter your email"
                        name="email"
                        onChange={inputEvent}
                        value={fullName.email}
                        autoComplete="off"
                    />
                    <br />
                    <input
                        type='number'
                        placeholder="Enter your phone"
                        name="phone"
                        onChange={inputEvent}
                        value={fullName.phone}
                    />
                    <br />
                    <input
                        type='text'
                        placeholder="Enter your Qualification"
                        name="qua"
                        onChange={inputEvent}
                        value={fullName.qua}
                    />
                    <button type='submit'>Submit here 👍</button>
                </div>
            </form>
        </div>
    </>
);
}

export default App;