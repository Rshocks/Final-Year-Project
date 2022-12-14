import express from "express";

//routes in here, logic is in controllers
import { getPostsBySearch, getPosts , createPost, updatePost, deletePost, likePost} from "../controllers/posts.js";
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.post('/', auth, createPost);
router.patch('/:id', auth , updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;