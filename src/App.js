import { Component } from 'react'
import styled from 'styled-components'
import './App.css'

const EmployeeItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  a {
    display: block;
    margin: 10px 0;
    color: ${props => props.active ? 'orange' : '#F701F7'};
    text-decoration: none;
  }
  input {
    display: block;
    margin: 10px auto 10px auto; 
  }
  label {
    color: red;
  }
`
const H2 = styled.h2`
  font-size: 22px;
`
export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: none;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .15)
`
class WhoAmI extends Component {
  constructor (props) {
    super(props)
    this.state = {
      age: 22, 
      text: '+++',
      position: ''
    }
    this.yearPlus = this.yearPlus.bind(this)
  }
  yearPlusAsync () {
    this.setState({
      age: this.state.age + 1 //! async - for optimization
    })
  }
  yearPlus () {
    this.setState(state => ({
      age: state.age + 1 //! sync - NOT optimization, return replaced by ()
    }))
  }
  inputChanges = (e, message) => {
    console.log(message)
    this.setState({
      position: e.target.value
    })
  }
  render() {
    const { name, surname, link } = this.props
    const {age, position} = this.state
    return (
      <EmployeeItem active>
        <H2>My name is {name}, surname - {surname}, age - {age}, position - {position}</H2>
        <a href={link}>My profile</a>
        <Button onClick={() => this.yearPlusAsync() }>{this.state.text}</Button>
        <form >
          <label htmlFor="input">Write a position</label>
          <input type="text" id='input' onChange={(e) => this.inputChanges(e, 'Change - Yes')} /> {/*onChange or onInput*/}
        </form>
      </EmployeeItem>
    )
  }
}
class WhoAreYou extends Component {
  render() {
    const { name, surname, link } = this.props
    return (
      <EmployeeItem>
        <H2>My name is {name}, surname - {surname}</H2>
        <a href={link}>My profile</a>
      </EmployeeItem>
    )
  }
}
function WhoAreObj({name, surname, link}) {
  return (
    <EmployeeItem>
      <H2>My name is {name.firstName}, surname - {surname}</H2>
      <a href={link}>My profile</a>
    </EmployeeItem>
  )
}
function WhoAreFunct({name, surname, link}) {
  return (
    <EmployeeItem>
      <H2>My name is {name()}, surname - {surname}</H2>
      <a href={link}>My profile</a>
    </EmployeeItem>
  )
}
const Wrapper = styled.main`
  width: 1000px;
  margin: 80px auto 0 auto;
  text-align: center;
`
const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-30 border border-' + props.color}>
      {props.children}
    </div>
  )
}
function App() {
  return (
    <Wrapper>
      <DynamicGreating color={'primary'}>
        <h2>Hello JS</h2>
        <h2>Hello React</h2>
      </DynamicGreating>
      <DynamicGreating color={'primary'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae repellendus error adipisci nostrum iste tenetur non? Enim alias ad explicabo. Praesentium voluptatum unde alias sit at, fuga doloremque libero.
        Cupiditate, est temporibus distinctio iusto voluptatibus dignissimos consequuntur mollitia molestias eveniet dolorum nesciunt neque voluptatem animi, obcaecati error in. Totam, eos? Praesentium vel tenetur corporis autem, cumque laboriosam consequuntur qui?
        Cupiditate dolores ut corporis. Nulla, placeat rem mollitia, recusandae assumenda molestiae quas soluta adipisci natus consequuntur quibusdam exercitationem nostrum tempora voluptatibus neque accusamus magni quidem illo. Assumenda deleniti aut explicabo!</p>
      </DynamicGreating>
      <WhoAmI name='Pavel' surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAmI name='Alex' surname='Freeman' link='facebook.com/alexfreeman' />
      <WhoAreYou name='Pavel' surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAreYou name='Alex' surname='Freeman' link='facebook.com/alexfreeman' />
      <WhoAreObj name={{firstName: 'Pavel'}} surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAreObj name={{ firstName: 'Alex' }} surname='Freeman' link='facebook.com/alexfreeman' />
      <WhoAreFunct name={() =>{ return 'Pavel' }} surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAreFunct name={() => { return 'Alex' }} surname='Freeman' link='facebook.com/alexfreeman' />
    </Wrapper>
  );
}

export default App