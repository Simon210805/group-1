
import { RxDotFilled } from "react-icons/rx";
import style from "./Answer.module.css";
import Header from "../header/Header";
import React, { useContext } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../axios/axiosConfig";
import { AppState } from "../../App";
import Footer from "../footer/Footer";


export default function answer() {
  const navigate = useNavigate();
  const answerDom = useRef();
  const { user, setUser } = useContext(AppState);
  console.log(user);
  async function handleSubmit(e) {
    e.preventDefault();

    const answereValue = answerDom.current.value;
    //const descriptionValue = descriptionDom.current.value;

    if (!answereValue) {
      alert("Please provide all required information");
      return;
    }

    try {
      await axios.post("/answers/postanswer", {
        answer: answereValue,
        // description: descriptionValue,
        userid: user.userid,
        // userid: userId, // Include userId when posting the question
         questionid: questionId, // Include questionId when posting the question
      });
      alert("question posted successfully");
      // navigate("/");
    } catch (error) {
      alert("something went wrong");
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={style.title}>
        <h1>Question</h1>
      </div>
      <div className={style.answer}>
        <div className={style.answer_public_question}>
          <h1>Answer the top question</h1>
          <br />
          <Link className={style.link} to="/">
            go to question page
          </Link>
        </div>
        <br />

        <div className={style.answer_form}>
          <form onSubmit={handleSubmit}>
            <textarea
              ref={answerDom}
              id="w3review"
              name="w3review"
              rows="7"
              // cols="122"
              placeholder="your answer......"></textarea>
            <br />
            <button className={style.btn}>Post your Answer</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}



