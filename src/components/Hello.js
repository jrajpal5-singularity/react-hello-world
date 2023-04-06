import React from "react";

// with jsx coding becomes easy like html
// const Hello = () => {
//     return (
//         <div>
//             <h1>hello hello jimmy</h1>
//         </div>
//     )
// }

// without jsx
const Hello = () => {
    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,'hello hello jimmy')
    )
}



export default Hello