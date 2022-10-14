import express from "express";

//routes in here, logic is in controllers
import { getPosts , createPost} from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);


export default router;