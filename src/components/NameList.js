import React from 'react'
import Person from './Person'

//       // method 1
// function NameList() {
//     const names = ['Bruce','Clark','Diana']
//     return (

//     <div>
//         <h2>{names[0]}</h2>
//         <h2>{names[1]}</h2>
//         <h2>{names[2]}</h2>
//     </div>
//   )
// }


// // method 2
// function NameList() {
//   const names = ['Bruce','Clark','Diana']
//   const nameList = names.map(name => <h2>{name}</h2>)
//   return (
//   <div>
//       {nameList}
//   </div>
// )
// }


// method 3
function NameList() {
  // key help react to identify different element of list
  // keys give elements stable identity
  const names = ['Bruce','Clark','Diana','Bruce']
  const persons = [
    {
      id:1,
      name:'Bruce',age:30, skill:'React'
    },
    {
      id:2,
      name:'Clark',age:25, skill:'Angular'
    },
    {
      id:3,
      name:'Diana',age:28, skill:'Vue'
    }
  ]
  // https://codepen.io/gopinav/pen/gQpepq
  const personList = persons.map(person => <Person key={person.id} person={person} />)
  const nameList = names.map((name,index) => <h2 key={index}>{index} : {name}</h2>)
  return (
  <div>
      {/* {personList} */}
      {nameList}
  </div>
)
}



export default NameList