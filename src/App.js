import React from 'react';
import {useState} from 'react';
let App=()=>{

  const [allDetails,setAllDetails]=useState({
    fname:'',
    lname:'',
    email_id:'',
    phnN:''
  });

  let showDetails=(e)=>{
    e.preventDefault();
    alert("Form Submitted");
  }

  let inputEvent=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setAllDetails((preValue)=>{
      if(name==='fName'){
        return{
          fname:value,
          lname:preValue.lname,
          email_id:preValue.email_id,
          phnN:preValue.phnN
        }
      }
      else if(name==='lName'){
        return{
          fname:preValue.fname,
          lname:value,
          email_id:preValue.email_id,
          phnN:preValue.phnN
        }
      }
      else if(name==='email'){
        return{
          fname:preValue.fname,
          lname:preValue.lname,
          email_id:value,
          phnN:preValue.phnN
        }
      }
      else if(name==='phnNum'){
        return{
          fname:preValue.fname,
          lname:preValue.lname,
          email_id:preValue.email_id,
          phnN:value
        }
      }
    })
  }
  return(
    <>
      <div className='container'>
        <div className='details'>
          <h1>Hello {allDetails.fname+" "+allDetails.lname}</h1>
          <h2>{allDetails.email_id}</h2>
          <h2>{allDetails.phnN}</h2>
        </div>
        <form onSubmit={showDetails}>
          <div className='container_1'>
            <div className='fname'>
              <input type='text' name='fName' placeholder='Enter Your First Name' onChange={inputEvent} />
            </div>
            <div className='lname'>
              <input type='text' name='lName' placeholder='Enter Your Last Name' onChange={inputEvent} />
            </div>
            <div className='email'>
              <input type='text' name='email' placeholder='Enter Your Email' onChange={inputEvent} />
            </div>
            <div className='phnNum'>
              <input type='text' name='phnNum' placeholder='Enter Your Phone Number' onChange={inputEvent} />
            </div>
            <div className='btn'>
              <button type='submit'>Submit!!!</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App;
