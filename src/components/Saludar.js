import React from 'react';

export default function Saludar(props) {
    return (
        <div>
            <h3>Hola {props.name}, tiene {props.age}</h3>
        </div>
    );
}