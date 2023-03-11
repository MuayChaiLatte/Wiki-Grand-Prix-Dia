import './App.css';

function Button({name}) {
  return (
    <button>{name}</button>
  )
}

function UserInput({name, placeholderText}) {
  return (
    <div>
    <p>{name}</p>
    <input placeholder={placeholderText}></input>
    <button>Submit</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <UserInput name='Start Page'/>
      <UserInput name='End Page'/>
      <Button name='Start'/>
    </div>
  );
}

export default App;


/*
INITIAL PSEUDOCODE

User inputs start page
User inputs target page
User clicks start
Start page is displayed
User clicks a link on start page
Click is recorded
If new page is target page
  display winner and number of clicks!
*/