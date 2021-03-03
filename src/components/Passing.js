import React from 'react';

export default function Passing(props) {
    console.log(props.userInfo.name1);
    console.log(props.userInfo.age1);
    console.log(props.userInfo.nationality);
    return (
        <div>
            <p>Hola {props.userInfo.name1}, tiene {props.userInfo.age1} y es {props.userInfo.nationality}</p>
        </div>
    );
}