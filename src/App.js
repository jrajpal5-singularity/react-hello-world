import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import { Component } from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

// import {Greet} from './components/Greet';
// function App() {
//   return (
//     <div className="App">
//       <Greet name="bruce" heroName="Batman">
//        <p> This is children props</p>
//       </Greet>
//       <Greet name="clark" heroName="superman">
//         <button>
//           Action
//         </button>
//         </Greet>
//       <Greet name="berry" heroName="Flash"/>
//       <Welcome name="bruce" heroName="Batman"/>



//       {/* <Greet />
//       <Welcome/> */}

//       {/* <Hello/> */}
//     </div>
//   );
// }

class App extends Component {
  render(){
  return (
    <div className="App">
      <FunctionClick/>
      <ClassClick/>

    </div>
  );
}
}

export default App;
