// import { RxDotFilled } from "react-icons/rx";
// import style from "./Answer.module.css";
// import Header from "../header/Header";
// import React, { useContext } from "react";
// import { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import axios from "../../axios/axiosConfig";
// import { AppState } from "../../App";

// export default function answer() {
//   const navigate = useNavigate();
//   const answerDom = useRef();
//   const { user, setUser } = useContext(AppState);
//   console.log(user);
//   async function handleSubmit(e) {
//     e.preventDefault();

//     const answereValue = answerDom.current.value;
//     //const descriptionValue = descriptionDom.current.value;

//     if (!answereValue) {
//       alert("Please provide all required information");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5500/api/answers/postanswer", {
//         answer: answereValue,
//         // description: descriptionValue,
//         userid: user.userid,
//         // userid: userId, // Include userId when posting the question
//         // questionid: questionid, // Include questionId when posting the question
//       });
//       alert("question posted successfully");
//       // navigate("/");
//     } catch (error) {
//       alert("something went wrong");
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className={style.title}>
//         <h1>Question</h1>
//       </div>
//       <div className={style.answer}>
//         <div className={style.answer_public_question}>
//           <h1>Answer the top question</h1>
//           <br />
//           <Link className={style.link} to="/">
//             go to question page
//           </Link>
//         </div>
//         <br />

//         <div className={style.answer_form}>
//           <form onSubmit={handleSubmit}>
//             <textarea
//               ref={answerDom}
//               id="w3review"
//               name="w3review"
//               rows="7"
//               // cols="122"
//               placeholder="your answer......"></textarea>
//             <br />
//             <button className={style.btn}>Post your Answer</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import style from "./Answer.module.css";
// import Header from "../header/Header";
// import React, { useState, useContext, useEffect } from "react";
// import { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import axios from "../../axios/axiosConfig";
// import { AppState } from "../../App";

// export default function answer() {
//   const { user } = useContext(AppState);
//   const [userdata, setuserdata] = useState([]);
//   const [answer, setAnswer] = useState([]);
//   //const navigate = useNavigate();
//   const answerDom = useRef();
//   // const { user, setUser } = useContext(AppState);

//   console.log(user);
//   async function handleSubmit(e) {
//     e.preventDefault();

//     const answereValue = answerDom.current.value;
//     //const descriptionValue = descriptionDom.current.value;

//     if (!answereValue) {
//       alert("Please provide all required information");
//       return;
//     }

//     // try {
//     //   await axios.post("http://localhost:5500/api/answers/postanswer", {
//     //     answer: answereValue,
//     //     // description: descriptionValue,
//     //     userid: user.userid,
//     //     // userid: userId, // Include userId when posting the question
//     //     // questionid: questionid, // Include questionId when posting the question
//     //   });
//     //   alert("question posted successfully");
//     //   // navigate("/");
//     // } catch (error) {
//     //   alert("something went wrong");
//     //   console.log(error);
//     // }
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           // Fetch user data
//           const userResponse = await axios.get(
//             "http://localhost:5500/api/users/getuser"
//           );
//           const userData = userResponse.data;

//           // Fetch question data
//           const answerResponse = await axios.get(
//             "http://localhost:5500/api/answers/getallanswer"
//           );
//           const answerData = answerResponse.data;

//           // Update state with users and questions
//           setAnswer(userData);
//           setuserdata(answerData);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       };

//       fetchData();
//     }, []);
//   }

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className={style.title}>
//         <h1>Question</h1>
//       </div>
//       <div className={style.quesion}>
//         {userdata.map((answer) => (
//           <div key={answer.answerid}>
//             <p>
//               Asked by:{" "}
//               {answer.find((user) => user.userid === answer.answerid)
//                 ?.username || "Unknown"}
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className={style.answer}>
//         <div className={style.answer_public_question}>
//           <h1>Answer the top question</h1>
//           <br />
//           <Link className={style.link} to="/">
//             go to question page
//           </Link>
//         </div>
//         <br />

//         <div className={style.answer_form}>
//           <form onSubmit={handleSubmit}>
//             <textarea
//               ref={answerDom}
//               id="w3review"
//               name="w3review"
//               rows="7"
//               // cols="122"
//               placeholder="your answer......"></textarea>
//             <br />
//             <button className={style.btn}>Post your Answer</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import style from "./Answer.module.css";
// import Header from "../header/Header";
// import React, { useState, useEffect, useContext } from "react";
// import { useRef } from "react";
// import { Link, useParams } from "react-router-dom";

// import axios from "../../axios/axiosConfig";
// import { AppState } from "../../App";

// export default function Answer() {
//   const { user } = useContext(AppState);
//   const [answers, setAnswers] = useState([]);
//   const [newAnswer, setNewAnswer] = useState("");
//   const answerDom = useRef();
//  const { questionid } = useParams();
//  const [question, setQuestion] = useState({});
//  console.log(questionid)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch answers with associated user information
//         const response = await axios.get(
//           `http://localhost:5500/api/answers/getallanswer/${questionid}` // Include questionid
//         );
//         setAnswers(response.data);
//         console.log(response.data);
//          const questionResponse = await axios.get(
//           "http://localhost:5500/api/questions/getallquestions"
//          );
//          const questionData = questionResponse.data;

//          // Update state with users and questions
//          setQuestion(questionData.data);
//          console.log(questionResponse.data);

//       } catch (error) {
//         console.error("Error fetching answers:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     const answerValue = answerDom.current.value;

//     if (!answerValue) {
//       alert("Please provide all required information");
//       return;
//     }

//     try {
//       await axios.post(`http://localhost:5500/api/answers/postanswer/${questionid}`, {
//         answer: answerValue,
//         userid: user.userid,
//       });
//       alert("Answer posted successfully!");
//       const updatedResponse = await axios.get(
//         "http://localhost:5500/api/answers/getallanswer"
//       );
//       setAnswers(updatedResponse.data);
//       // Clear the input field after posting answer
//       // setNewAnswer("");

//       // Refresh answers after posting
//       // const response = await axios.get(
//       //   "http://localhost:5500/api/answers/getallanswer"
//       // );
//       //setAnswers(response.data);
//       console.log(updatedResponse.data);
//       // Clear the input field after posting answer
//       setNewAnswer("");
//     } catch (error) {
//       console.error("Error posting answer:", error);
//     }
//   }

//   return (
//     <div>
//       <Header />
//       <div className={style.title}>
//         <h1>Question</h1>
//       </div>
//       <div className={style.answer}>
//         <div className={style.answer_public_question}>
//           <h1>Answer the top question</h1>
//           <br />
//           <Link className={style.link} to="/">
//             Go to question page
//           </Link>
//         </div>
//         <br />

//         <div className={style.answer_form}>
//           <h2>Answer From the Community:</h2>
//           {/*
//           <ul>
//             {questions.map((question) => (
//               <li key={question.questionid}>
//                 <strong>{question.title}:</strong> {question.description}
//               </li>
//               //  <p>
//               //   Asked by:{" "}
//               //   {getuser.find((user) => user.userid === question.userid)
//               //     ?.username || "Unknown"}
//               // </p>
//             ))}
//           </ul> */}
//           <h2>Question:</h2>{" "}
//           <p>
//             <strong>Title:</strong> {question.title[0]}
//           </p>
//           <p>
//             <strong>Description:</strong> {question.description}
//           </p>
//           <ul>
//             {answers.map((answers) => (
//               <li key={answers.answerid}>
//                 <strong>{user.username}:</strong> {answers.answer}
//               </li>
//               //  <p>
//               //   Asked by:{" "}
//               //   {getuser.find((user) => user.userid === question.userid)
//               //     ?.username || "Unknown"}
//               // </p>
//             ))}
//           </ul>
//           <form onSubmit={handleSubmit}>
//             <textarea
//               ref={answerDom}
//               onChange={(e) => setNewAnswer(e.target.value)}
//               value={newAnswer}
//               rows="7"
//               placeholder="Your answer"></textarea>
//             <br />
//             <button type="submit">Post your Answer</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import style from "./Answer.module.css";
import Header from "../header/Header";
import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "../../axios/axiosConfig";
import { AppState } from "../../App";

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
      const updatedResponse = await axios.get(
        `http://localhost:5500/api/answers/getallanswer/${questionid}`
      );
      setAnswers(updatedResponse.data);

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
    </div>
  );
}

// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "../../axios/axiosConfig";
// import { AppState } from "../../App";
// import Header from "../header/Header";
// import style from "./Answer.module.css";
//  import { useRef } from "react";

// export default function Answer() {
//    const answerDom = useRef();

//   const { user, setUser } = useContext(AppState);
//   const [answers, setAnswers] = useState([]);
//   const [newAnswer, setNewAnswer] = useState("");
// useEffect(() => {
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   if (storedUser) {
//     setUser(storedUser); // Set user directly
//   }
// }, [setUser]);

// useEffect(() => {
//   localStorage.setItem("user", JSON.stringify(user));
// }, [user]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           "http://localhost:5500/api/answers/getallanswer"
//         );
//         setAnswers(response.data);
//       } catch (error) {
//         console.error("Error fetching answers:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(user));
//   }, [user]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5500/api/answers/postanswer", {
//         answer: newAnswer,
//         userid: user.userid,
//       });
//       setNewAnswer(""); // Clear the input field after posting answer
//       // fetchData(); // Refresh answers after posting
//       setAnswers([...answers, { username: user.username, answer: newAnswer }]);
//       alert("Answer posted successfully!");
//     } catch (error) {
//       console.error("Error posting answer:", error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className={style.title}>
//         <h1>Question</h1>
//       </div>
//       <div className={style.answer}>
//         <div className={style.answer_public_question}>
//           <h1>Answer the top question</h1>
//           <br />
//           <Link className={style.link} to="/">
//             Go to question page
//           </Link>
//         </div>
//         <br />

//         <div className={style.answer_form}>
//           <h2>Usernames and Answers:</h2>
//           <ul>
//             {answers.map((answer) => (
//               <li key={answer.id}>
//                 <strong>{answer.username}:</strong> {answer.answer}
//               </li>
//             ))}
//           </ul>

//           <form onSubmit={handleSubmit}>
//             <textarea
//               ref={answerDom}
//               onChange={(e) => setNewAnswer(e.target.value)}
//               rows="7"
//               placeholder="Your answer"></textarea>
//             <br />
//             <button type="submit">Post your Answer</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "../../axios/axiosConfig";
// import { AppState } from "../../App";
// import Header from "../header/Header";
// import style from "./Answer.module.css";

// export default function Answer() {
//   const { user } = useContext(AppState);
//   const [answers, setAnswers] = useState([]);
//   const [newAnswer, setNewAnswer] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           "http://localhost:5500/api/answers/getallanswer"
//         ); // Assuming you have an endpoint to fetch answers
//         setAnswers(response.data);
//       } catch (error) {
//         console.error("Error fetching answers:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5500/api/answers/postanswer", {
//         answer: newAnswer,
//         userId: user.userId, // Assuming you have userId in your user object
//       });
//       // Clear the input field and fetch answers again to update the list
//       setNewAnswer("");
//       fetchData();
//     } catch (error) {
//       console.error("Error posting answer:", error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className={style.title}>
//         <h1>Question</h1>
//       </div>
//       <div className={style.answer}>
//         <div className={style.answer_public_question}>
//           <h1>Answer the top question</h1>
//           <br />
//           <Link className={style.link} to="/">
//             Go to question page
//           </Link>
//         </div>
//         <br />

//         <div className={style.answer_form}>
//           <h2>Usernames and Answers:</h2>
//           <ul>
//             {answers.map((answer) => (
//               <li key={answer.id}>
//                 <strong>{answer.username}:</strong> {answer.answer}
//               </li>
//             ))}
//           </ul>

//           <form onSubmit={handleSubmit}>
//             <textarea
//               value={newAnswer}
//               onChange={(e) => setNewAnswer(e.target.value)}
//               rows="7"
//               placeholder="Your answer..."></textarea>
//             <br />
//             <button type="submit">Post your Answer</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
