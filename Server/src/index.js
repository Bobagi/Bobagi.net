import express from "express";
import cors from "cors";
import { StreamChat } from "stream-chat";
import {v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
const api_key = "yxeqr9fqgnhu";
const api_secret = "bkvq8j73x92k6ajedww2azqahbqeu44nkbedf9dad5dxwt43ewn2jt4yxge9r4p4";
const serverClient = StreamChat.getInstance(api_key, api_secret);

app.post("/signup", async (req, res) => {
    try {
      const { firstName, lastName, username, password } = req.body;
  
      // Check if any of the required fields are null or empty
      if (!firstName || !lastName || !username || !password) {
        return res.json({ message: "All fields are required" });
      }
  
      const { users } = await serverClient.queryUsers({ name: username });
  
      if (users.length > 0) {
        console.log(users);
        return res.json({ message: "Username already in use" });
      }
  
      const userId = uuidv4();
      const hashedPassword = await bcrypt.hash(password, 10);
      const token = serverClient.createToken(userId);
      
      return res.json({ token, userId, firstName, lastName, username, hashedPassword });
    } catch (error) {
      res.json({ message: "Internal server error" });
    }
  });
  

app.post("/login", async (req, res) => {   
    try {
      const { username, password } = req.body;
      const { users } = await serverClient.queryUsers({ name: username });

      if (users.length === 0) return res.json({ message: "User not found" });
  
      const passwordMatch = await bcrypt.compare(
        password,
        users[0].hashedPassword
      );
  
      if (passwordMatch) {
        const token = serverClient.createToken(users[0].id);
        res.json({
          token,
          firstName: users[0].firstName,
          lastName: users[0].lastName,
          username,
          userId: users[0].id,
        });
      }else{
        return res.json({ message: "Wrong Password" })
      }
    } catch (error) {
      res.json(error);
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
});