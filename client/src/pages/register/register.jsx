import { Link } from 'react-router-dom'
import './register.scss'

const register = () => {
  return (
    <div className = "register">
      <div className='card'>
        <div className='left'>
          <h1>Zen Social.</h1>
          <p> Welcome to Eyesbook ! Connect to the
            your loved ones and share photos, play
            games
          </p>
          <span>Do you have an account</span>
          <Link to = '/login'>
                <button>Login</button>
            </Link>
        </div>
        <div className='right'>
          <h1>Register</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='text' placeholder='Name' />
            <button>Register</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default register
