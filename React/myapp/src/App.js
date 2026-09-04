import logo from './logo.svg';
import linkedin from './assets/images.jpg';
import Greet from './Components/Greet';
import StateHook from './Components/StateHook';
import { useState } from 'react';
import StateObj from './Components/StateObj';
import Effect from './Components/Effect';

function App() {
  const [visibility, setVisibility] = useState(true);
  return (
    <>
      {/* {visibility && <StateHook />}
      <button onClick={() => setVisibility(!visibility)}>Click Here</button> */}
      {/* <StateHook/> */}
      {/* <StateObj/> */}
      <button onClick={()=>setVisibility(!visibility)}>Mount/Unmount Component</button>
      {/* <button onClick={()=>setVisibility(true)}>Mount Component</button> */}
      

      {visibility && <Effect/>}

    </>
  );
}

export default App;
