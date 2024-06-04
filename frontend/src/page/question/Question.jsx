import React from "react";
import { RxDotFilled } from "react-icons/rx";
import style from "./Question.module.css";
import { Link } from "react-router-dom";
import Header from "../header/Header";

function Question() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={style.Question}>
        <h1>Steps to write a good question</h1>
        <p>
          <RxDotFilled />
          Summerize your problem in a one-line title.
        </p>
        <p>
          <RxDotFilled /> Describe your problem in more detail.
        </p>
        <p>
          <RxDotFilled /> Describe what you tried and what you expected to
          happen.
        </p>
        <p>
          <RxDotFilled /> Review your question and post it to the site
        </p>
      </div>
      <br />
      <br />
      <div className={style.ask}>
        <div className={style.ask_public_question}>
          <h1>Ask a public question</h1>
          <Link className={style.link} to="/">
            go to question page
          </Link>
        </div>
        <br />
        <div className={style.ask_form}>
          <input type="text" placeholder="Title" />
          <br />
          <br />
          <textarea
            id="w3review"
            name="w3review"
            rows="7"
            // cols="122"
            placeholder=" Question Describe"
          ></textarea>
          <br />
          <button className={style.btn}>Post your Question</button>
        </div>
      </div>
    </div>
  );
}

export default Question;
