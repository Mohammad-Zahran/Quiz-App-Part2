import React from 'react'

const Register = () => {
  return (
    <div className='register-container'>
        <h2>Create Your Account</h2>
        <form className='register-form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="username">Username</label>
                <input
                type="text"
                id='username'
                name='username'
                value={FormData.username}
                onChange={handleChange}
                placeholder='Enter your username'
                required
                />
            </div>
        </form>
    </div>
  )
}

export default Register