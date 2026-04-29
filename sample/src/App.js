import logo from './logo.svg';
import './App.css';
import Welcome from './components/functional_component';
import ClassComponent from './components/ClassComponent';
import Greet from './components/Greet';
import Message from './components/Message';
import MyForm from './components/MyForm';
import MyForm1 from './components/MyForm1';
import MyForm2 from './components/MyForm2';
function App() {
  return (
    <div>
      <h1> DSATM SESSION </h1>
      <p> TNS offline session for weekly students </p>
      {/* <ClassComponent name="Alice" /> */}
      {/* <Welcome />
      <ClassComponent name="Alice" />
      <Greet name="Rohan" value="!" />
      <Greet name="Sohan" value="running " />
      <Greet id="1" name="Rohan" value="!" /> */}
      <Message />
      {/* <MyForm/> */}
      <MyForm1/>
      <MyForm2/>
    </div>
  );
}

export default App;
