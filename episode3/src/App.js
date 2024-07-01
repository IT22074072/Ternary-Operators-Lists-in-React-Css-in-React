import "./App.css";

function App() {
  const names = ["Dini", "Pipi", "JK", "Jimin", "Jin"];

  return (
    <div className="App">
      {names.map((name, key) => {
        return <h1 key = {key} >{name}</h1>;
      })}
    </div>
  );
}

/*
function App() {

  const age = 4;
  const isGreen = true;
    return (
    <div className="App">
      {age >= 18 ? <h1>OVER AGE</h1> : <h1> UNDER AGE</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS A COLOR</h1> 
    
      {isGreen && <button>THIS IS A BUTTON</button>}
    </div>)

}
*/

/*function App() {

  const age = 40
  if (age >= 18){
    return <h1 className='age'>Over age</h1>;
  } else{
    return <div className="App"><h1>Under age</h1> </div>;
  }
  
}*/

/*
function App() {
  return (
    <div className="App">
      <h1 className='name'>Dinithi</h1>
    </div>
  );
} */

export default App;
