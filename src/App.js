import './App.css';
import { Component } from 'react';


import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

import './appStyles.css'
import styles from './appStyles.module.css'


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
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    <Inline/>


    </div>
  );
}
}

export default App;



