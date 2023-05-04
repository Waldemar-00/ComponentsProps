import './App.css';
function WhoAmI(props) {
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}
function WhoAreYou({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}
function WhoAreObj({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name.firstName}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}
function WhoAreFunct({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <WhoAmI name='Pavel' surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAmI name='Alex' surname='Freeman' link='facebook.com/alexfreeman' />
      <WhoAreYou name='Pavel' surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAreYou name='Alex' surname='Freeman' link='facebook.com/alexfreeman' />
      <WhoAreObj name={{firstName: 'Pavel'}} surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAreObj name={{ firstName: 'Alex' }} surname='Freeman' link='facebook.com/alexfreeman' />
      <WhoAreFunct name={() =>{ return 'Pavel' }} surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAreFunct name={() => { return 'Alex' }} surname='Freeman' link='facebook.com/alexfreeman' />
    </div>
  );
}

export default App;