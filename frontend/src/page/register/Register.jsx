import React, { useState, useRef } from 'react'
import axios from "../../axios/axiosConfig"
import { useNavigate, Link } from "react-router-dom"
import style from "../../page/style.module.css"
import Header from '../header/Header'

function Register() {

  const navigate = useNavigate()

  const userNameDom = useRef(null)
  const firstNameDom = useRef(null)
  const lastNameDom = useRef(null)
  const emailDom = useRef(null)
  const passwordDom = useRef(null)
   

async function handleSubmit(e) {
  e.preventDefault()
  const usernamevalue = userNameDom.current.value
  const firstnamevalue = firstNameDom.current.value
  const lastnamevalue = lastNameDom.current.value
  const emailvalue = emailDom.current.value
  const passwordvalue = passwordDom.current.value
  if (!usernamevalue || !firstnamevalue || !lastnamevalue || !emailvalue || !passwordvalue) {
    alert("please provide all required INFO")
    return;
  }
  try {
    await axios.post("/users/register", {
      userName: usernamevalue,
      firstName: firstnamevalue,
      lastName: lastnamevalue,
      email: emailvalue,
      password: passwordvalue
    })
    alert("register successfull. please login")
    navigate("/login")
    
  } catch (error) {
    alert('something went wrong. please try again')
    console.log(error.response)
  }

}
  return (
    <section>
      <div>
        <Header />
      </div>
      <section className={style.all_container}>
        <div className={style.container}>
          <form className={style.register} onSubmit={handleSubmit} action="">
            <div className={style.user_register1}>
              <h2>join the network</h2>
              <br />
              <p>
                already have an account ?{" "}
                <Link className={style.link} to="/login">
                  signin
                </Link>
              </p>
              <br />
            </div>
            <div className={style.user_register}>
              {/* <span>email :---</span> */}
              <input ref={emailDom} type="text" placeholder="email" />
              <br />
              <br />
              <div className={style.firstLastName}>
                {/* <span>firstName :---</span> */}
                <input ref={firstNameDom} type="text" placeholder="firstName" />
                <br />
                <br />
                {/* <span>lastName :---</span> */}
                <input
                  className={style.lastName}
                  ref={lastNameDom}
                  type="text"
                  placeholder="lastName"
                />
              </div>
              <br />
              <div className={style.user}>
                {/* <span>username :---</span> */}
                <input ref={userNameDom} type="text" placeholder="username" />
              </div>
              <br />
              {/* <span>password :---</span> */}
              <input ref={passwordDom} type="password" placeholder="password" />
              <br />
              <br />
              <button type="submit">Agree and Join</button>
            </div>
            <br />
            <div className={style.user_register1}>
              <p>
                i agree to the{" "}
                <Link className={style.link}>privacy policy</Link> and{" "}
                <Link className={style.link}>terms of service</Link>
              </p>
              <br />
              <Link className={style.link} to="/login">
                Already have an account ?
              </Link>
            </div>
          </form>
          <div className={style.howitworks}>
            <Link className={style.link} to="/about">
              About
            </Link>
            <h1 style={{ fontSize: "45px", color: "#611B00" }}>
              Evangadi Networks
            </h1>
            <p>
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps.
            </p>
            <br />
            <p>
              Wheather you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>
            <br />
            <button className={style.button}>how it works</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Register