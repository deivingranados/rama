import React, { Component } from 'react';
import Detail from './details';
import { data } from "./info.json";
import "./musical.css"

class Musical extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: data,
      go: null,
      contentDad: true,
      contentSon: false,
      dataSrc: "",
      resultS: "",
    }
  }

  goToDetail = (item) => {
    this.setState({
      go: item,
      contentDad: false,
      contentSon: true,
    })
  }
  goBackToMain = (item) => {
    this.setState({
      contentDad: true,
      contentSon: false,
    })
  }

  hundleChange = (e) => {
    let f = e.target.value
    this.setState({
      dataSrc: f
    })
  }

  filterGender = () => {
    let text = this.state.dataSrc
    let search
    if (this.state.date) {
      this.state.date.filter(function (item) {
        const dataGender = item.gender.toUpperCase()
        const dataCity = item.city.toUpperCase()
        const filterUnion = dataGender + " " + dataCity
        const dataFilter = text.toUpperCase()
        search = filterUnion.indexOf(dataFilter) > -1
      })
      this.setState({
        resultS: search
      })
      console.log(this.state.resultS)
    }
  }

  render() {
    return (
      <div className="contentMain">
        <div className="contentMain__title">
          <h1>FESTIVAL VALLENATO</h1>
        </div>
        <div className="row row-cols-1 row-cols-sm-3" >
          {this.state.contentDad ?
            this.state.date ?
              this.state.date.map(item => {
                return <div >
                  <img src={item.image} className="img1" onClick={() => this.goToDetail(item)} />
                  <h2 className="nameGroup">{item.nameGropu}</h2>
                </div>
              }) : null
            : null
          }
        </div>
        {
          this.state.contentSon ?
            <Detail
              Detalles={this.state.go}
              Regresar={this.goBackToMain}
            />
            : null
        }
      </div>
    );
  }
}

export default Musical



