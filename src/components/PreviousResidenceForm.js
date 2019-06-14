import React from 'react'
import { Field } from 'redux-form'

let PreviousResidenceForm = props => {
  return (
  <div>
    <div className="row">
      <div className="col-md-3">
        <label htmlFor="currentAddress">Address:</label><br/>
        <Field name="currentAddress" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentUnit">Unit:</label><br/>
        <Field name="currentUnit" component="input" type="text" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <label htmlFor="currentCity">City:</label><br/>
        <Field name="currentCity" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentState">State:</label><br/>
        <Field name="currentState" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentZip">Zip:</label><br/>
        <Field name="currentZip" component="input" type="text" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <label htmlFor="currentLandlord">Landlord:</label><br/>
        <Field name="currentLandlord" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentLandlordPhone">Landlord Phone:</label><br/>
        <Field name="currentLandlordPhone" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentLandlordFax">Landlord Fax:</label><br/>
        <Field name="currentLandlordFax" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentLandlordAddress">Landlord Address:</label><br/>
        <Field name="currentLandlordAddress" component="input" type="text" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <label htmlFor="currentLandlordCity">Landlord City:</label><br/>
        <Field name="currentLandlordCity" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentLandlordState">Landlord State:</label><br/>
        <Field name="currentLandlordState" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentLandlordZip">Landlord Zip:</label><br/>
        <Field name="currentLandlordZip" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentRent">Rent Paid Per Month:</label><br/>
        <Field name="currentRent" component="input" type="text" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <label htmlFor="currentFrom">From:</label><br/>
        <Field name="currentFrom" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentTo">Landlord State:</label><br/>
        <Field name="currentTo" component="input" type="text" />
      </div>
      <div className="col-md-3">
        <label htmlFor="currentUtils">Utilites You Pay:</label><br/>
        <Field name="currentUtils" component="input" type="text" />
      </div>
    </div>
  </div>
);
}

export default PreviousResidenceForm
