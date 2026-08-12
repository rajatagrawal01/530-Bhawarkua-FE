import logo from './logo.svg';
import linkedin from './assets/images.jpg';
import Greet from './Components/Greet';
import StateHook from './Components/StateHook';
import { useState } from 'react';

function App() {
  const [visibility, setVisibility] = useState(true);
  return (
    <>
      {visibility && <StateHook />}
      <button onClick={() => setVisibility(!visibility)}>Click Here</button>
    </>
  );
}

export default App;
