import React, { useRef } from "react";
//import axios from "../../axios/axiosConfig"
import { useNavigate, Link } from "react-router-dom";
import style from "../../page/style.module.css";
import Header from "../header/Header";
import axios from "../../axios/axiosConfig";

// export default Loginimport React from "react";
// import { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../../../axiosConfig";

// function Login() {

//   const navigate = useNavigate()

//   const emailDom = useRef(null)
//   const passwordDom = useRef(null);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const emailvalue = emailDom.current.value
//     const passwordvalue = passwordDom.current.value
//     if (!emailvalue || !passwordvalue) {
//       alert("please provide all required INFO")
//       return;
//     }
//     try {
//        const { data } = await axios.post("/users/login", {
//         email: emailvalue,
//         password: passwordvalue
//       })
//       alert("login successfull. welcome")
//       localStorage.setItem("token", data.token)
//       // navigate("/")
//       console.log(data)

//     } catch (error) {
//       alert('something went wrong. please try again')
//       console.log(error.response)
//     }
//   }

function Login() {
  const navigate = useNavigate();

  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;
    if (!emailValue || !passwordValue) {
      alert("Please provide all required information");
      return;
    }

    try {
      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });
      alert("Login successfully.");
      localStorage.setItem("token", data.token);
      //navigate("/");
      console.log(data);
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={style.user_register1}>
              <h2>login to your account</h2>
              <br />
              <p>
                don't have an account ?{" "}
                <Link className={style.link} to="/register">
                  create a new account
                </Link>
              </p>
              <br />
            </div>
            <div className={style.user_register}>
              
              {/* <span>email :---</span> */}
              <input ref={emailDom} type="text" placeholder="email" />
              <br />
              <br />
              {/* <span>password :---</span> */}
              <input ref={passwordDom} type="password" placeholder="password" />
              <br />
              <br />
              <div className={style.user_register1}>
                <button className={style.button} type="submit">
                  submit
                </button>
              </div>
            </div>
            <br />
            <div className={style.user_register1}>
              <Link className={style.link} to="/register">
                create an account ?
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
            <p>
              Wheather you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              vitae facilis excepturi. Blanditiis, odio minus fugiat commodi
              voluptatum consectetur aut tenetur?
            </p>
            <br />
            <button className={style.button}>how it works</button>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Login;

// export default Loginimport React from "react";
// import { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../../../axiosConfig";

// function Login() {
//   const navigate = useNavigate();

//   const emailDom = useRef();
//   const passwordDom = useRef();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     const emailValue = emailDom.current.value;
//     const passwordValue = passwordDom.current.value;
//     if (!emailValue || !passwordValue) {
//       alert("Please provide all required information");
//       return;
//     }

//     try {
//       const { data } = await axios.post("/users/login", {
//         email: emailValue,
//         password: passwordValue,
//       });
//       alert("Login successfully.");
//       localStorage.setItem("token", data.token);
//       //navigate("/");
//       console.log(data);
//     } catch (error) {
//       alert(error?.response?.data?.msg);
//       console.log(error.response.data);
//     }
//   }

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <span>Email : </span>
//           <input ref={emailDom} type="email" placeholder="email" />
//         </div>
//         <br />
//         <div>
//           <span>Password : </span>
//           <input ref={passwordDom} type="password" placeholder="password" />
//           {/* <input  ref={passwordDom} type="password" placeholder="password" autocomplete="current-password"/> */}
//         </div>
//         <button type="submit">Login</button>
//         <br />
//       </form>

//       <Link to={"/register"}>register</Link>
//     </section>
//   );
// }

// export default Login;
