import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
import BootStrapTest from './bootStarpTest'

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
    <div className={`${props.mb} ${props.mt} p-30 border border-` + props.color}>
      {props.children}
    </div>
  )
}
const DynamicChildren = (props) => {
  return (
    <div className={`${props.mb} ${props.mt} p-30 border border-` + props.color}>
      {
        React.Children.map(props.children, (child) => {
          return React.cloneElement(child, {className: `shadow p-3 m-3 border ${props.rounded}`})
        })
      }
    </div>
  )
}
const HelloGreating = () => {
  return (
    <div style={{ width: '600px', margin: '0 auto'}}>
    <DynamicGreating color={'primary'} mb={'mb-3'} mt={'mt-5'}>
      <h2>Hello React!</h2>
      </DynamicGreating>
    </div>
  )
}
const Message = (props) => {
  return (
    <h2>Hello Hero, number {props.counter} !</h2>
  )
}
class Counter extends Component {
  state = {
    counter: 0
  }
  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }
  render() {
    return (
      <>
        {this.props.render(this.state.counter)}
        <button
          className={'btn btn-primary'}
          onClick={this.changeCounter}>
          Click me!
        </button>
      </>
    )
  }
}
function App() {
  return (
    <Wrapper>
      <Counter render={counter => (
        <Message counter={counter}/>
        )}/>
      <HelloGreating />
      <DynamicGreating color={'primary'} mb={'mb-3'}>
        <h2>Hello JS</h2>
        <h2>Hello React</h2>
      </DynamicGreating>
      <DynamicChildren
        color={'primary'}
        rounded={'rounded'}
        mb={'mb-3'}
      >
        <p>Children lets you manipulate and transform the JSX you received as the children prop.</p>
        <p>Children.map(children, fn, thisArg?)</p>
        <p>Children.forEach(children, fn, thisArg?)</p>
      </DynamicChildren>
      <DynamicChildren
        color={'primary'}
        rounded={''}
        mb={'mb-3'}
      >
        <p>React.Children.map(props.children, (child))</p>
        <p>React.cloneElement(child, "className: 'shadow p-3 m-3 border rounded'")</p>
        <p>Children.forEach(children, fn, thisArg?)</p>
      </DynamicChildren>
      <WhoAmI name='Pavel' surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAmI name='Alex' surname='Freeman' link='facebook.com/alexfreeman' />
      <WhoAreYou name='Pavel' surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAreYou name='Alex' surname='Freeman' link='facebook.com/alexfreeman' />
      <WhoAreObj name={{firstName: 'Pavel'}} surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAreObj name={{ firstName: 'Alex' }} surname='Freeman' link='facebook.com/alexfreeman' />
      <WhoAreFunct name={() =>{ return 'Pavel' }} surname='Kulesh' link='facebook.com/pavelkulesh' />
      <WhoAreFunct name={() => { return 'Alex' }} surname='Freeman' link='facebook.com/alexfreeman' />
      <BootStrapTest
        left={
          <DynamicGreating color={'primary'} mb={'mb-3'} mt={'mt-5'}>
            <h2>Hello JS</h2>
            <h2>Hello React</h2>
          </DynamicGreating>
        }
        right={
          <DynamicChildren
            color={'primary'}
            rounded={'rounded'}
            mb={'mb-3'}
            mt={'mt-5'}
          >
            <p>Children lets you manipulate and transform the JSX you received as the children prop.</p>
            <p>Children.map(children, fn, thisArg?)</p>
            <p>Children.forEach(children, fn, thisArg?)</p>
          </DynamicChildren>
        }
      />
    </Wrapper>
  );
}

export default App