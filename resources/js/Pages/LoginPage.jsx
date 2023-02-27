import { Head } from '@inertiajs/react';

function Home(props) {
  return (
    <div>
      <div>
          <form>
            <input className='input-form'  type='text'/>
            <input type='password'/>
            <button type='submit'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Home