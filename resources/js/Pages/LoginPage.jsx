import { Head } from '@inertiajs/react';
import '../../css/mainstyle.css';

import ai from '../images/cogAI.jpg'
function Login(props) {
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
          <input className='iform' placeholder='Username...' type='text'/>
        </div>  
        <div>
          <input placeholder='Password...' className='iform' type='password'/>
        </div>
          <button className='button-4 bg-blue-500'  type='submit'>Log In</button>
      </form> 
<div>
    <div className='form-extras'>
        <a href='/register'> Register</a>
        <a href='/'>Forgot Password</a>
    </div>
</div> 
        </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Login