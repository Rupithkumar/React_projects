import React, { useEffect, useState } from 'react'; // Corrected imports

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos") 
            .then(response => response.json())
            .then(json => setData(json));
    }, []); 
    return (
        <div>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.title}</li> 
                ))}
            </ul>
        </div>
    );
};

export default App;
