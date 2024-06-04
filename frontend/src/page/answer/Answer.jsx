import React from 'react'
import { RxDotFilled } from "react-icons/rx";
import style from "./Answer.module.css";
import { Link } from "react-router-dom"
import Header from '../header/Header'

function Answer() {
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
          <textarea
            id="w3review"
            name="w3review"
            rows="7"
            // cols="122"
            placeholder="your answer......"
          ></textarea>
          <br />
          <button className={style.btn}>Post your Answer</button>
        </div>
      </div>
    </div>
  );
}

export default Answer