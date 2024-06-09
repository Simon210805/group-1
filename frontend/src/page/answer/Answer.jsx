
import { RxDotFilled } from "react-icons/rx";
import style from "./Answer.module.css";
import Header from "../header/Header";
import React, { useContext } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../axios/axiosConfig";
import { AppState } from "../../App";


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
