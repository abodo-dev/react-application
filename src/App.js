
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
  return (
    <div className="App" style={{}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to ACME Property Management</h1>
      </header>
      <h1>Online Rental Application</h1>
      <div className="container" style={{marginBottom: "100px", marginTop: "100px"}}>
        <MainDisplay submittedSuccess={this.props.simpleReducer.submittedSuccess}/>
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
