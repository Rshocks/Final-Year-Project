import express from "express";

//routes in here, logic is in controllers
import { getPosts , createPost, updatePost, deletePost} from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;