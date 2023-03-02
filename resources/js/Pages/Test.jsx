import { Head } from '@inertiajs/react';

function Test(props) {
  return (
    <div className='Login-page'>

<div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Name</label>
</div>
<div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Password</label>
</div>
    </div>
  )
}

export default Test