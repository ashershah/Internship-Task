import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { useHistory } from 'react-router-dom';

const Register = () => {

  const history = useHistory();
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    err: false,
    errMessage: ''
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    });
  }
  const submit = async (e) => {
    e.preventDefault();
    try {
      let res = await Axios.post("http://localhost:3001/register", {

        fullName: data.fullName,
        email: data.email,
        password: data.password
      }); console.log("value", res);
      if (res.data.status) {
        return history.push('/Login');
      } else {
        setData((preValue) => {
          return {
            ...preValue,
            err: true, errMessage: res.data.msg
          }
        });
      }
    }
    catch (err) {
      setData((preValue) => {
        return {
          ...preValue,
          err: true, errMessage: err.message
        }
      });

    }
  };

  const toLogin = () => history.push('/Login');

  return (
    <>

      <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid nav-bg">
          <div className='row'>
            <div className="col-12 col-lg-10 mx-auto">
              <div className='row'>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 0rder-lg-0  d-flex justify-content-center flex-column" >
                  <h1>
                    MERN CRUD  <br />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <div className="my-5">
        <h1 className='text-center'>CREATE ACCOUNT</h1>
      </div>
      <div className="container">
        <div className='row'>
          <div className="col-md-6 col-10 mx-auto">

            {
              <form onSubmit={submit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" onChange={InputEvent} name="fullName" value={data.fullName} placeholder="Enter Your Name" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" onChange={InputEvent} name="email" value={data.email} placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleFormControlInput1" onChange={InputEvent} name="password" value={data.password} placeholder="password" />
                </div>
                <div class="col-12">
                  <button class="btn btn-outline-primary mr-3" type="submit">Submit form</button>
                  <button class="btn btn-outline-success" onClick={toLogin}>Login</button>
                </div>

              </form>}
            <h2>{data.errMessage}</h2>
          </div>

        </div>

      </div>

    </>
  );

};

export default Register;
