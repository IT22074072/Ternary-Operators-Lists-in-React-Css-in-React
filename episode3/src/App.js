import './App.css';

function App() {

  const age = 40
  if (age >= 18){
    return <h1 className='age'>Over age</h1>;
  } else{
    return <div className="App"><h1>Under age</h1> </div>;
  }
  
}

/*
function App() {
  return (
    <div className="App">
      <h1 className='name'>Dinithi</h1>
    </div>
  );
} */

export default App;
