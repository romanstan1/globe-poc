import React, { Component } from 'react';
import {init, drawMarkers} from './d3-module.js'
import Scene from './Scene'
import InputLocation from './InputLocation'

const AddLocation = ({handleAdd}) =>
  <div className='add-location' onClick={handleAdd}>
    Add
  </div>

class Home extends Component {
  state = {
    notes: [
      // {latitude: 22, longitude: 88},
      // {latitude: 12.61315, longitude: 38.37723},
      // {latitude: -30, longitude: -58},
      // {latitude: -14.270972, longitude: -170.132217},
      // {latitude: 28.033886, longitude: 1.659626},
      // {latitude: 40.463667, longitude: -3.74922},
      {latitude: 35.907757, longitude: 127.766922},
      // {latitude: 23.634501, longitude: -102.552784}
    ],
    lat: '',
    lng: ''
  }
  componentDidMount() {
    init()
  }
  handleInput = (e) => {
    this.setState({[e.target.dataset.type]: e.target.value})
  }
  handleAdd = () => {
    console.log('handleAdd')
    // this.setState({})
    drawMarkers(this.state.notes)
  }
  render() {
    const {lat, lng} = this.state
    return (
      <div className="Home">
        <InputLocation lat={lat} lng={lng} handleInput={this.handleInput}/>
        <AddLocation handleAdd={this.handleAdd}/>
        <Scene/>
      </div>
    );
  }
}

export default Home;
