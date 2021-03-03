import React from 'react';

export default function SaludarFN(props) {

    const alertar = () => {
        alert("Hola bro");
    }

    return (
        <div>
            <button onClick={alertar}>Saludate Mundo</button>
        </div>
    );
}