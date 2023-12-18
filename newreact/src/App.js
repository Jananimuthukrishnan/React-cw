/*import React from 'react';
import './App.css';

import logo from'./images.jpeg';
export default function App() {
  return (
    <div>
      
      <center><h1>Bio form</h1>
      <table>
        <form>
          <br></br><br></br>
          <label for="username">Username:</label >&nbsp;
          <input type="text" id="username" name="username"></input>
          <br></br>
          <br></br>
          <label for="password">Password:</label>&nbsp;
          <input type="password" id="username" name="username"></input>
          <br></br>
          <br></br>
          <email>Email Id:</email>&nbsp;
          <input type="text" id="email" name="email"></input>
          <br></br>
          <br></br>
          <label for="text">Phone number:</label>&nbsp;
          <input type="password" id="username" name="username"></input>
          <br></br>
          <br></br>
          <label for="date">Date:</label>&nbsp;
          <input type="date" id="username" name="username"></input>
          <br></br>
          <br></br>
          <label for="radio">Gender:     </label>&nbsp;
          <label for="radio">Male</label>&nbsp;
          <input type="radio" id="username" name="username"></input>
          <label for="radio">Female</label>&nbsp;
          <input type="radio" id="username" name="username"></input>
          <br></br>
          <br></br>
          <label for="">Hobbies:     </label>&nbsp;
          <input type="checkbox" id="username" name="username"></input>
          <label for="">singing</label>&nbsp;
          <input type="checkbox" id="username" name="username"></input>
          <label for="">Playing</label>&nbsp;
          <input type="checkbox" id="username" name="username"></input>
          <label for="">Drawing</label>&nbsp;
          <input type="checkbox" id="username" name="username"></input>
          <label for="">others:</label>&nbsp;
          <input type="text" id="text" name="text"></input>
          <br></br>
          <br></br>
          <button>Submit</button>
          <br></br><br></br>
          
        </form></table>
        </center>
    </div>
  )
}*/








/*import List from "./Day6/List";
import Listprops from "./Day6/Listprops";
import Multilist from "./Day6/Multilist";*/

/*import BRouter from "./Day 5/BRouter";
import Router from "./Day 5/Router";
import {BrowserRouter,Routes,Route} from "react-router-dom";*/


/*import Funcom from "./Component/Funcom.js";
import Classcom from "./Component/Classcom.js";
import OneExport from "./Component/OneExport.js";
export default function App()
{
  return(
    <div>
    <Funcom/>
    <Classcom/>
    <OneExport/>
    </div>
    )
  }*/
  /*import ArrowProps from "./Day4/ArrowProps";
  import Countfunc from "./Day4/Countfunc";
  import DefaultProps from "./Day4/DefaultProps";
  import Dynamicrend from "./Day4/Dynamicrend";
  import Parent from "./Day4/ParentChild";
  import Props from "./Day4/Props";
  import Propscls from "./Day4/Propscls";
  import Propsnot from "./Day4/Propsnot";
  import StateHoldObj from "./Day4/StateHoldObj";
  import Stateclscom from "./Day4/Stateclscom";
  import Twowaybind from "./Day4/Twowaybind";
  
  export default function App()
  {
    return(
      <div>
      <Props name="jankrshn"></Props>
      <Propscls college="Skct"></Propscls>
      <Propsnot place="cbe" state="Tamil Nadu"></Propsnot>
      <ArrowProps country="India"></ArrowProps>
      <Stateclscom/>
      <Countfunc/>
      <StateHoldObj/>
      <Parent/>
      <Dynamicrend/>
      <Twowaybind/>
      <DefaultProps name="vivek"/>
      <List/>
      <Listprops/>
      <Multilist/>
      <TryCatch fruit="onion"></TryCatch>
      <ErrorBoundary>
      <Hero Heroname="Joker"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero Heroname="ABC"></Hero>
      </ErrorBoundary>
      </div>
      )
    }
    /*<BrowserRouter>
    <Routes>
    <Route path='/login' element={<BRouter/>} ></Route>
    <Route path='/signup' element={<Router/>} ></Route>
    <LifecycleFunctional></LifecycleFunctional>
    </Routes>
    </BrowserRouter>*/
    
/*import LoginForm from "./Day 9/LoginForm"
    export default function App()
    {
      return(
        <div>
          <LoginForm />
    </div>
  )
}*/
import React from 'react';
import WithLoading from './Day 9/WithLoading';
import MyComponent from './Day 9/MyComponent';

const WrappedComponentWithLoading = WithLoading(MyComponent);

const App = () => {
  return (
    <div>
      
      <WrappedComponentWithLoading />
    </div>
  );
};

export default App;

