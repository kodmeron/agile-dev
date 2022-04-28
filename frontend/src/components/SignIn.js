import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <div>

            <div className='main-container'>
                <h2>Användarnamn:</h2>
                <input
                    id='userName'
                    type="text"
                    placeholder='Användarnamn'
                />
                <h2>Lösenord:</h2>
                <input
                    id='userPass'
                    type="text"
                    placeholder="Lösenord"
                />
                <Link className='user-link' to="/Profile">Logga in</Link>
            </div>

        </div>
    )
}

export default SignIn