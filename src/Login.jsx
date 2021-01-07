import React from 'react'
import './Login.css'
import { loginUrl } from './spotify';

function Login() {
    return (
      <div className="login">
        <img src="Spotify_Logo_CMYK_White.png" alt="" />
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      </div>
    );
}

export default Login


// public\