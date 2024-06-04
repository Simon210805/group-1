const dbConnection = require("../db/dbConfig");
const { v4: uuidv4 } = require("uuid");

async function postanswer(req, res) {
  const { answer, userid } = req.body;

  try {
    // Generate a unique question ID
    const questionId = uuidv4();

    // Check if the provided userId exists in the users table
    const [user] = await dbConnection.query(
      "SELECT userid FROM users WHERE userid = ?",
      [userid]
    );

    // If the user with the provided userId doesn't exist, return a 404 error
    if (user.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Insert the answer into the answers table
    await dbConnection.query(
      "INSERT INTO answers (answer, userid, questionId) VALUES (?, ?, ?)",
      [answer, userid, questionId]
    );

    return res.status(200).json({ msg: "Answer posted" });
  } catch (error) {
    console.error("Error posting answer:", error);
    return res
      .status(500)
      .json({ msg: "Something went wrong, try again later!" });
  }
}



module.exports = { postanswer };
