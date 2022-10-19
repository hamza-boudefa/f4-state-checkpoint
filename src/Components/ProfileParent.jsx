import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Profile from './Profile'


export default class ProfileParent extends Component {
constructor(props){
  super(props)
  this.state=({
    show:false
  })
}
toggle=()=>{
  this.setState({show:!this.state.show})
}


  render() {
    return (
      <div>
        <Button onClick={this.toggle} >show</Button>
{ this.state.show? <Profile img="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" name="web dev" bio="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quia!" />
: null}        
        </div>
    )
  }
}
