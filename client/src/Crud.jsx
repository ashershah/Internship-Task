import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Crud = () => {
  const [studentName, setStudentName] = useState();
  const [rollNumber, setrollNumber] = useState();
  const [studentList, setStudentList] = useState([]);
  const [newstudentName, setnewStudentName] = useState();



  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setStudentList(response.data);
    })
  }, []);

  const addToList = () => {

    Axios.post("http://localhost:3001/insert", {
      studentName: studentName,
      rollNumber: rollNumber,
    });
    window.location.reload();
  };

  const update = (id) => {

    Axios.put("http://localhost:3001/update", {
      id: id,
      newstudentName: newstudentName,
    });
    window.location.reload();
  };


  const delet = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
    window.location.reload();
  };


  return (
    <>
      <div className="crud opertaion">
        <h1 className="text-center ">STUDEN LIST</h1>
        <div className="container">
          <div className='row'>
            <div className="col-md-4 col-10 mx-auto gy-4">
              <div class="mb-3">
                <label className="pr-1">Student Name</label>
                <input type="text"
                  onChange={(event) => {
                    setStudentName(event.target.value);
                  }
                  }
                  placeholder="Enter Student Name" />
              </div>
              <div class="mb-3">
                <label className="pr-3" >Roll Number</label>
                <input type="number"
                  onChange={(event) => {
                    setrollNumber(event.target.value);
                  }
                  } placeholder="Roll number" />
              </div>
              <div class="gx-4 col-12">
                <button class="btn btn-outline-success ml-5 pr-5" onClick={addToList}>Add To List</button>
              </div>
            </div>
          </div>
        </div>


        {studentList.map((val, key) => {

          return (<div key={key} className="student">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-12 mx-auto gy-3">
                  <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                      <h5 class="card-title">{val.studentName}</h5>
                      <p class="card-text ">{val.studentName}'s rollNumer is {val.rollNumber}</p>
                      <input className="pr-2" type="text" placeholder="update student name"
                        onChange={(event) => {
                          setnewStudentName(event.target.value);
                        }
                        } />
                      <button class="btn btn-primary mr-2 mt-2" onClick={() => update(val._id)}>Update</button>
                      <button class="btn btn-danger mt-2" onClick={() => delet(val._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
        })
        }
      </div>
    </>

  );
};
export default Crud;