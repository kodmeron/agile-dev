import React from 'react'

function signIn() {
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
            </div>

        </div>
    )
}

export default signIn