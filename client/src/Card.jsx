import React from 'react';


const Card = () => {
  return (
    <>
    <div className="col-md-4 col-10 mx-auto ">
    <div className="card" style={{width: '18rem'}}>
  <img src={prop.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 
  </div>
</div>
</div>
        </>
  );

};

export default Card;




































<div className="App">
<div>





</div>



<lable>Student Name</lable>
<input type="text"
onChange={(event) => {
setStudentName(event.target.value);
}

}
/>
<lable>Roll Number</lable>
<input type="number"
onChange={(event) => {
setrollNumber(event.target.value);
}

}
/>
<button onClick={addToList}
>Add To List</button>

<h1>Student List</h1>
{studentList.map((val, key) => {
return (<div key={key} className="student">



<div className="col-md-4 col-10 mx-auto ">
<div className="card" style={{width: '18rem'}}>

<div className="card-body">
<h5 className="card-title">{val.studentName}</h5>
<p className="card-text">{val.rollNumber}</p>
<h1></h1>{" "}
<input type="text" placeholder="new student name"
onChange={(event) => {
  setnewStudentName(event.target.value);
}

}
/> 
<button onClick={() => update(val._id)}>Update</button>
<br></br>
<button onClick={() => delet(val._id)}>Delete</button>
</div>
</div>
</div>





</div>)
})
}
</div>