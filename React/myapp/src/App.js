import logo from './logo.svg';
import linkedin from './assets/images.jpg';
import Greet from './Components/Greet';
import StateHook from './Components/StateHook';

function App() {

  return (
    // <>
    //   <Greet course="React" campus="Bhawarkua" photo={logo}/>
    //   <Greet course="SQL" campus="VijayNagar" photo={linkedin}/>
    //   <Greet course="Python" campus="Ujjain"/>
    //   <Greet course="React" campus="Vadodara"/>
    // </>

    <>
      <StateHook/>
    </>
  );
}

export default App;
