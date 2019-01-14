import React, { Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, ButtonToolbar, Button} from 'react-bootstrap';
import {History} from 'history';
import PropTypes from 'prop-types';
import ReactJoyride, { STATUS } from 'react-joyride';
import LanguagesList from './LanguagesList';

var Buttons = React.createClass({
  
  getInitialState: function(){
    return {
      run: localStorage.getItem('playedGuidedTour') === null? true : false,
      steps: [
        {
          target: '.tabsel',
          content: 'Selecione uma seção para focar no conteúdo desejado.',
        },
        {
          target: '.whoisbtn',
          content: 'Esta seção contém uma descrição do desenvolvedor.',
        },
        {
          target: '.skillsbtn',
          content: 'Esta seção contém habilidades do desenvolvedor.',
        }
      ],
      locale: { back: 'Anterior', close: 'Fechar', last: 'Último', next: 'Próximo', skip: 'Ignorar' },
      languages: [
        { language:'JavaScript', capacity: 95 },
        { language:'HTML5', capacity: 95 },
        { language:'Java', capacity: 90 },
        { language:'Python', capacity: 90 },
        { language:'SQL', capacity: 90 },
        { language:'CSS3', capacity: 90 },
        { language:'TypeScript', capacity: 80 },
        { language:'PHP', capacity: 80 },
        { language:'C', capacity: 80 },
        { language:'Haskell', capacity: 70 },
        { language:'Bash', capacity: 70 },
        { language:'C#', capacity: 65 }
      ]
    }
  },

  propTypes: {
    breakpoint: function() { return null; },
  },

  getScreenSize: () => {
    const { innerWidth } = window;
    let breakpoint = 'xs';

    if (innerWidth >= 1024) {
      breakpoint = 'lg'
    }
    else if (innerWidth >= 768) {
      breakpoint = 'md'
    }
    else if (innerWidth >= 400) {
      breakpoint = 'sm'
    }

    return breakpoint;
  },

  handleResize: () => {
    clearTimeout(this.debounceTimeout);

    this.debounceTimeout = setTimeout(() => {
      this.setState({ breakpoint: this.getScreenSize() });
    }, 250);
  },

  handleJoyrideCallback: data => {
    try{
      const { status, type } = data;

      if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
        localStorage.setItem('playedGuidedTour', '1');
        this.setTourState(false);
      }

      console.groupCollapsed(type);
      console.log(data); //eslint-disable-line no-console
      console.groupEnd();
    }catch(e){

    }
  },

  whoisFocus: function(){
    document.getElementsByClassName('whois')[0].focus();
  },

  skillsFocus: function(){
    document.getElementsByClassName('skills')[0].focus();
  },

  ngScopeFocus: function(){
    document.getElementsByClassName('sobreh2')[0].focus();
  },

  setTourState: function(run){
    this.state.run = run;
  },

  mixins: [History],

  render: function() {  
    
    localStorage.setItem('lastVisited',window.location.href);

    const { run, steps, locale, languages } = this.state;

    return (
      <div key="sobre" className="reports-page">
        <ReactJoyride
          callback={this.handleJoyrideCallback}
          continuous
          run={run}
          scrollToFirstStep
          showProgress
          showSkipButton
          steps={steps}
          styles={{
            options: {
              zIndex: 10000,
            }
          }}
          locale={locale}
        />
        <div className="ng-scope"> 
          <Link to="/dashboard/bemvindo" className="pull-right btn btn-primary btn-outline btn-rounded">Bem Vindo</Link> 
          <h2 className="sobreh2" tabIndex="2">Sobre <small>Informações do desenvolvedor</small></h2> 
          <Jumbotron> 
            <ButtonToolbar className="tabsel">
              <Button bsStyle="primary" bsSize="large" className="whoisbtn" onClick={this.whoisFocus}> 
                Quem sou eu
              </Button>
              <Button bsStyle="primary" bsSize="large" className="skillsbtn"  onClick={this.skillsFocus}>
                Habilidades
              </Button>
            </ButtonToolbar>
            <div>
              <hr/>
              <div className="whois" tabIndex="0">
                <h3>Quem sou eu</h3>
                <p>
                  Gosto de computadores, programação, linguagens naturais e artificiais, ciência, filosofia e open-source. 
                  Trabalho como programador full-stack, com experiência em arquitetura de sistemas, modelagem de bancos de dados, 
                  construção de APIs, micro-serviços, interfaces de usuário ricas, apresentação de dados, DevOps, e Ágil. 
                </p>
                <p>
                  Minhas habilidades gerais de programação datam de 10 anos, o que me permitiu acompanhar a evolução de várias ferramentas que utilizo. 
                  Sou usuário Linux avançado e também desenvolvedor, com 4 anos de experiência desenvolvendo software para o ambiente Unix.
                </p>
                <p>
                  Estou realizando uma pesquisa inédita na academia, em análise de linguagem natural, usando Redes Neurais Artificiais. 
                  A linguagem utilizada na pesquisa é Python, com a qual possuo bastante experiência.
                </p>
              </div>
              <p> <a className="btn btn-primary btn-sm btn-outline btn-rounded" onClick={this.ngScopeFocus}>Ir para o topo</a> </p> 
              <hr/>
              <div className="skills" tabIndex="1">
                <h3>Habilidades</h3>
                <LanguagesList languages={languages}/>
              </div>
              <p> <a className="btn btn-primary btn-sm btn-outline btn-rounded" onClick={this.ngScopeFocus}>Ir para o topo</a> </p>
              <hr/>
            </div>
            <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded" href="http://heniotierra.github.io/" target="_blank" >Saiba mais</a> </p> 
          </Jumbotron> 
        </div>
      </div>  
    );
  }

});

export default Buttons;