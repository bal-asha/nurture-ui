import React from 'react'
import {Formik} from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'

const UserForm = () => {
    return (
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          country: '',
          state: '',
          zip: '' 
        }}
        onSubmit={() => {
         console.log('form submitted')
        }}
      >
        { ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
        <div className="container">

          <div className="col-md-12 mt-5">
            <form onSubmit={handleSubmit}>
              <h4 className="mb-3">Personal information</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstname">First name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="firstname" 
                    name="firstname" 
                    value={values.firstname}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastname">Last name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="lastname" 
                    name="lastname" 
                    value={values.lastname}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" 
                  placeholder="you@example.com" 
                  value={values.email}
                />
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select 
                    className="custom-select d-block w-100" 
                    id="country" 
                    name="country" 
                    value={values.country}
                  >
                    <option value="">Choose...</option>
                    <option value="NIG">Nigeria</option>
                    <option value="GH">Ghana</option>
                    <option value="SA">South Africa</option>
                  </select>        
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select 
                    className="custom-select d-block w-100" 
                    id="state" 
                    name="state" 
                    value={values.state}
                  >
                    <option value="">Choose...</option>
                    <option value="lagos">Lagos</option>
                    <option value="east legion">East Legion</option>
                    <option value="cape town">Cape Town</option>
                  </select>             
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="zip" 
                    name="zip" 
                    value={values.zip}
                  />
                </div>
              </div>

              <hr className="mb-4"/>
              <button className="btn btn-primary btn-lg btn-block" type="submit">
            Submit
              </button>
           </form>
         </div>

       </div>
        ) }
      </Formik>
    )
}

export UserForm;