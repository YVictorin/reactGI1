import React from 'react'
import './App.css'
import BasicInfo from './components/BasicInfo/BasicInfo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: [
        { name: 'Jack', number: 1, dob: '3/12/89' },
        { name: 'Lisa', number: 2, dob: '5/25/92' },
        { name: 'Billie', number: 3, dob: '8/15/88' },
        { name: 'Rachel', number: 4, dob: '3/1/98' },
      ]
    };
    
  }

 
  render() {
    return (
     <>
      {this.state.person.map((person, index) => (
        <BasicInfo 
          key={index}
          name={person.name} 
          number={person.number}
          dob={person.dob}
         />
      ))}
     </>
    )
  }
}
export default App
