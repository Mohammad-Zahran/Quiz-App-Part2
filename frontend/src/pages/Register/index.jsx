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

            <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>


        </form>
    </div>
  )
}

export default Register