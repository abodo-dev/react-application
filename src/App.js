
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './acme_logo.png';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import MainDisplay from './components/MainDisplay';


class App extends Component {
 simpleAction = (event) => {
  this.props.simpleAction();
 }
 render() {
   var showCoApplicants = false;
   if (this.props.form.contact && this.props.form.contact.values && this.props.form.contact.values.coapplicant == "yes"){
     showCoApplicants = true;
   }
  return (
    <div className="App" style={{}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to ACME Property Management</h1>
      </header>

      <div className="container" style={{marginBottom: "100px", marginTop: "100px"}}>
        <h1 style={{textAlign:"center", marginBottom: "60px"}}>Online Rental Application</h1>
        <MainDisplay
          submittedSuccess={this.props.simpleReducer.submittedSuccess}
          showCoApplicants={showCoApplicants}
          />
      </div>
      <pre style={{display: "none"}}>
       {
        JSON.stringify(this.props.form.contact)
       }
      </pre>
      <div className="footer">

      </div>
   </div>
  );
 }
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
