import { Head } from '@inertiajs/react';
import '../../css/registerpage.css';

import ai from '../images/cogAI.jpg'
function Register(props) {
  return (
    <>
    <div className='Login-page'>
      <div className='Login-form'>
    <div className='form-001'>
        <div className='ai-image '>
          <img src={ai} className=''/>
        </div>
      <div className='myform'>
      <form>
        <div>
          <input className='iform' placeholder='Jhon Doe ' type='text'/>
        </div>   <div>
          <input className='iform' placeholder='example@gmail.com' type='text'/>
        </div>  
        <div>
          <input className='iform' placeholder='Password' type='password'/>
        </div>  
        <div>
          <input placeholder='Confirm Password' className='iform' type='password'/>
        </div>
          <button className='button-4 bg-blue-500'  type='submit'>Submit</button>
      </form> 
<div>
    <div className='form-extras'>
        <a href='/login'>Log in</a>
    </div>
</div> 
        </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Register