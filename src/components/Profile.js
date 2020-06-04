import React from 'react';
import axios from 'axios'

export default function Profile(props) {

    const logout = () => {
        axios.delete('/auth/logout').then( () => {
            props.history.push('/')
        })
    }
        return(
            <div>
                <p>Profile Component</p>
                <button onCLick={() => logout()}>Logout</button>
            </div>
        )
    }