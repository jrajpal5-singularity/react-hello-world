import React from "react";

// function Greet(){
//     return <h1> Hello jimmy</h1>
// }
// writing with es6
const Greet = props => {
console.log(props);
// props are immutable 
return (
    <div>
    <h1>hello {props.name}! aka {props.heroName}</h1>
    {props.children}
    </div>
)
}

// export const Greet = () => <h1>hello jimmy!</h1>

export default Greet