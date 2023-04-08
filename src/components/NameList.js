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
  const personList = persons.map(person => <Person key={person.id} person={person} />)
  return (
  <div>
      {personList}
  </div>
)
}



export default NameList