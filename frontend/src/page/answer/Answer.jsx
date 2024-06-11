
import style from "./Answer.module.css";
import Header from "../header/Header";
import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "../../axios/axiosConfig";
import { AppState } from "../../App";
import Footer from "../footer/Footer";

export default function Answer() {
  const { user } = useContext(AppState);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const answerDom = useRef();
  const { questionid } = useParams();
  const [question, setQuestion] = useState({}); // Initialize as an object

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch answers with associated user information
        const response = await axios.get(
          `http://localhost:5500/api/answers/getallanswer/${questionid}` // Include questionid
        );
        setAnswers(response.data);

        // Fetch the specific question details
        const questionResponse = await axios.get(
          "http://localhost:5500/api/questions/getallquestions"
        );
        setQuestion(questionResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Fetch data when questionid changes

  async function handleSubmit(e) {
    e.preventDefault();

    const answerValue = answerDom.current.value;

    if (!answerValue) {
      alert("Please provide all required information");
      return;
    }

    try {
      await axios.post(
        `http://localhost:5500/api/answers/postanswer/${questionid}`,
        {
          answer: answerValue,
          userid: user.userid,
        }
      );
      alert("Answer posted successfully!");

      // Refresh answers after posting

      // Clear the input field after posting answer
      setNewAnswer("");
    } catch (error) {
      console.error("Error posting answer:", error);
    }
  }

  return (
    <div>
      <Header />
      <div className={style.title}>
        <h1>Question</h1>
      </div>
      <div className={style.answer}>
        <div className={style.answer_public_question}>
          <h1>Answer the top question</h1>
          <br />
          <Link className={style.link} to="/">
            Go to question page
          </Link>
        </div>
        <br />

        <div className={style.answer_form}>
          <h2>Question:</h2>
         
          <p>
            <strong>Title:</strong> {question.title}
          </p>
          <p>
            <strong>Description:</strong> {question.description}
          </p>

          <h2>Answers From the Community:</h2>
          <ul>
            {answers.map((answer) => (
              <li key={answer.answerid}>
                <strong>{answer.username}:</strong> {answer.answer}
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit}>
            <textarea
              ref={answerDom}
              onChange={(e) => setNewAnswer(e.target.value)}
              value={newAnswer}
              rows="7"
              placeholder="Your answer"></textarea>
            <br />
            <button type="submit">Post your Answer</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
// git checkuot -b hi