import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction';
import ApplicationForm from './ApplicationForm';
import SubmittedSuccess from './SubmittedSuccess';



class MainDisplay extends Component {
  simpleAction = (event) => {
   this.props.simpleAction();
  }
  render(){
    if (this.props.submittedSuccess){
      return <SubmittedSuccess />
    }
    return (
      <div>
        <ApplicationForm />
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={this.simpleAction}>Submit Application</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
