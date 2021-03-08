import React from 'react';

export default function SaludarFn(props) {

    /*const alertar = () => {
        alert("Hola bro");
    }*/

    const {user1, alertar} = props;

    return (
        <div>
            <button onClick={alertar}>Saludate</button>
        </div>
    );
    
}