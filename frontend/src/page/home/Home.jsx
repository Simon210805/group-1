import React, { useState, useContext, useEffect } from "react";
import { AppState } from "../../App";
import style from "./Home.module.css";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import axios from "../../axios/axiosConfig";

function Home() {
  const { user } = useContext(AppState);
  const [userdata, setuserdata] = useState([]);
  const [getuser, setgetuser] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get(
          "http://localhost:5500/api/users/getuser"
        );
        const userData = userResponse.data;

        // Fetch question data
        const questionResponse = await axios.get(
          "http://localhost:5500/api/questions/getallquestions"
        );
        const questionData = questionResponse.data;

        // Update state with users and questions
        setgetuser(userData);
        setuserdata(questionData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter questions based on search input
  const filteredQuestions = userdata.filter((question) =>
    question.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        <Header />
      </div>
      <hr />
      <br />
      <div className={style.container}>
        <Link className={style.link1} to="/question/">
          Ask Question
        </Link>
        <div className={style.welcome}>
          <h2> welcome : {user.username}</h2>
          {/* <h2> welcome </h2> */}
        </div>
        <div className={style.search}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search question"
            className=""
          />
        </div>
        <div className={style.quesion}>
          {filteredQuestions.map((question) => (
            <div key={question.questionId}>
              {/* <Link to={`/answer/${question.questionId}`}></Link> */}
              <Link to="/answer/">
                <h2>{question.title}</h2>
              </Link>
              
              {/* <Link to="/answer/"></Link> */}
              {/* <h2>{question.title}</h2> */}
              {/* Find the corresponding user for the question */}
              <p>
                Asked by:{" "}
                {getuser.find((user) => user.userid === question.userid)
                  ?.username || "Unknown"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
