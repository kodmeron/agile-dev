import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <div>

            <div className='main-container'>
                <h2>Användarnamn:</h2>
                <br />
                <input
                    id='userName'
                    type="text"
                    placeholder='Användarnamn'
                />
                <br />
                <h2>Lösernord:</h2>
                <br />
                <input
                    id='userPass'
                    type="text"
                    placeholder="Lösenord"
                />
                <br />
                <button>Logga in</button>
                <br />
                <br />
                <Link to="/createUser">Skapa användare</Link>
            </div>

        </div>
    )
}

export default SignIn