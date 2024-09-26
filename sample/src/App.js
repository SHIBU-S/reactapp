import logo from './logo.svg';
import './App.css';
import Car from './Sample';
import Displayprops from './Displayprops';
import Header from './Sample2';
import Mobile from './Mobile';
import Hooksconcept from './Hooksconcept';
import Task from './Task';
import Effect from './Useeffect';
import Memo from './Usememo';
import Component2 from './Component2';

function App() {
  return (
    <div className="App">
      <Car/>
      <Displayprops color="Black"/>
      <Header/>
      <Mobile/>
      <Hooksconcept/>
      <Task/>
      <Effect/>
      <Memo/>
      <Component2/>
    </div>
  );
}

export default App;
