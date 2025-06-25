import React from 'react';

const Greet = (props) => {
    // Можно использовать деструктуризацию
    const {name, heroName} = props;
    console.log(props)
    return (
        <div>
            {/* Если без деструктуризации то нужно писать props.name */}
        <h1>Hello {name} and {heroName}</h1>
        <h2>{props.children}</h2>
        </div>

    )
}


export default Greet;