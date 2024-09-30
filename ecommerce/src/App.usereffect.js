import React, { useEffect, useState } from 'react';

export const App = () => {
    const [username, setUsername] = useState("");

    const changeHandler = (e) => {
        setUsername(e.target.value);
    };

    useEffect(() => {
        console.log("I am clicked");
    }, [username]); 

    return (
        <div>
            <input type="text" name="Username" value={username} onChange={changeHandler} />
            <h1>{username}</h1>
        </div>
    );
};

export default App;
