import { Component} from 'react'
import './App.css'
class WhoAmI extends Component {
  constructor (props) {
    super(props)
    this.state = {
      age: 22, 
      text: '+++'
    }
  }
  yearPlusAsync = () => {
    this.setState({
      age: this.state.age + 1 //! async - for optimization
    })
  }
  yearPlus = () => {
    this.setState(state => ({
      age: state.age + 1 //! sync - NOT optimization, return replaced by ()
    }))
  }
  render() {
    const { name, surname, link } = this.props
    return (
      <div>
        <h1>My name is {name}, surname - {surname}, age - {this.state.age}</h1>
        <a href={link}>My profile</a>
        <button onClick={this.yearPlus}>{this.state.text}</button>
      </div>
    )
  }
}
class WhoAreYou extends Component {
  render() {
    const { name, surname, link } = this.props
    return (
      <div>
        <h1>My name is {name}, surname - {surname}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
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

export default App