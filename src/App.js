import React, { useState } from 'react';
import './App.css';

function App() {

  //Why is updating state with functional update syntax is better?
// The main reason to do so is React does not update the state immediately as it has its own method or schedule to update the states.
  
  //In case there are many updates of the state happening at the same time, it may refer to an incorrect copy of a state.

  // prevState provided by the React itself, below shoes the functional update syntax:

  /*
By having prevState we make sure that we have the very latest copy of the state, and that

 setPersInfo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    });

    So now there is no chance of having a wrong state copy which we update, so better to use functional update.
  */
  
  const [persInfo,setPersInfo] =useState({
    firstName: '',
    lastName: '',
    snumber:''
  })

  const [data, setData] = useState('');

  const inputChangeHandler = (e) => {
    
   //Whenever there is a checkbox or radio button we will be using the checked property instead of value property.
    
    //For dropdown button => value property

    //For text box => value property

    // Checkbox or radio button => checked property

    setPersInfo((prevState) => {
      
      return { ...prevState, [e.target.name]: e.target.value }
    });
  }

  const inputCheckHandler = (e) => {
    setPersInfo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.checked }
    });
  }
 
  const getData = (e) => {
   e.preventDefault();
   // console.log(firstName,lastName,mobile);
  //  setData(persInfo.firstName + ' ' + persInfo.lastName + ' ' + persInfo.mobile);
    setData(`FirstName: ${persInfo.firstName} LastName: ${persInfo.lastName} Select: ${persInfo.snumber}`);
  }
  return (
    <div className="App">
      <div>
        <form onSubmit={getData}>
          <input type="text" placeholder="First Name" name="firstName" onChange={inputChangeHandler}></input><br></br>
          <input type="text" placeholder="Last Name" name="lastName" onChange={inputChangeHandler}></input>
          <br></br>
         <input type="checkbox" placeholder="Select Number" name="snumber" onChange={inputCheckHandler}></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>

        {JSON.stringify(persInfo)}
        <hr></hr>
        {data}
     </div>
    </div>
  );
}

export default App;
