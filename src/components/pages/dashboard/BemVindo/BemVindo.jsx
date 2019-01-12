import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({

  getInitialState: function(){
    return {
      loginID: localStorage.getItem('loginID')
    };
  },

  render: function() {

    localStorage.setItem('lastVisited',window.location.href);
    
    return (
      <div className="overview-page" key="overview"> 
        <Link to="/dashboard/sobre" className="pull-right btn btn-primary btn-outline btn-rounded">Sobre</Link> 
        <h2>Apresentação <small>Conheça nossos serviços</small></h2> 
        <Jumbotron> 
          <h1>Bem vindo, {this.state.loginID}!</h1>
          <br />
          <iframe className="ytplayer" width="640" height="390" rel="Vídeo de aṕresentação da Contact2Sale" src="https://www.youtube.com/embed/YEG-Y5E9v84?autoplay=1&showinfo=0&controls=0&disablekb=1"></iframe>
          <br /> 
          <br /> 
          <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded" href="https://www.contact2sale.com/" target="_blank">Saiba mais</a> </p> 
        </Jumbotron> 
      </div>
    );
  }

});

export default Blank;
