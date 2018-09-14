import React, { Component, Fragment } from 'react';
import * as wrld from 'wrld.js'
export default class Wrld extends Component {
  componentDidMount() {
      this.map = wrld.map("map", "836f9c7fbdf689633e4d3dfbdbcaf694", {
        center: [51.507351, -0.127758],
        zoom: -10
    })
  }
  render() {
    return (
      <Fragment>
        <div id="map" style={{height: window.innerHeight}}></div>
      </Fragment>
    )
  }
}
