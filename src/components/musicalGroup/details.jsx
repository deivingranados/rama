import React, { Component } from 'react';
import "./musical.css"

class Detail extends Component {

  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      detalles: this.props.Detalles
    }
  }

  goBack = () => {
    this.props.Regresar()
  }

  render() {
    return (
      <div className="details">
        <div className="img2">
          <img src={this.state.detalles.image} className="img2__1" />
        </div>
        <h3>
          <b>{this.state.detalles.nameGropu}</b> <br/><br/>
          <b>Descripción:</b> <br/>{this.state.detalles.description}
        </h3> <br/>
        <h5>
          <b>Ciudad:</b> {this.state.detalles.city}<br/>
          <b>Género Musical:</b> {this.state.detalles.gender}
        </h5>
        <button onClick={this.goBack} className="button"> Regresar </button>
      </div>
    );
  }
}

export default Detail



