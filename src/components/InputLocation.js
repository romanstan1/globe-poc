import React, { Component } from 'react';

export default class InputLocation extends Component {
  // state = {
  //   lat: '',
  //   lng: ''
  // }
  render() {
    const {lat, lng, handleInput} = this.props
    return (
      <div className="input-location">
        <div>
          <label>Lat</label>
          <input type="text" value={lat} data-type='lat' onChange={handleInput}/>
        </div>

        <div>
          <label>Long</label>
          <input type="text" value={lng} data-type='lng' onChange={handleInput}/>
        </div>
      </div>
    );
  }
}
