import React, { useState, useContext } from 'react'
import { AppState } from '../../App'
import style from "./Home.module.css"
import Header from '../header/Header'
import { Link } from 'react-router-dom'
function Home() {
  const {user} = useContext(AppState)
  return (
    <div>
      <div>
        <Header />
      </div>
      <hr />
      <br />
      <div className={style.welcome}>
        <Link className={style.link1} to="/question/">Ask Question</Link>
        <div>
          <h2> welcome : {user.username}</h2>
        </div>
      </div>
    </div>
  );
}

export default Home