import './App.css';
import { Component } from 'react';

import EventBind from './components/EventBind';

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
      <EventBind/>

    </div>
  );
}
}

export default App;
