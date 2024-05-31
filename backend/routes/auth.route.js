import express from "express";
const router = express.Router();

router.post("/register", ( req, res )=>{
    res.json({ message : "auth register route"})
})
router.post("/login", ( req, res )=>{
    res.json({ message : "auth login route"})
})
router.post("/logout", ( req, res )=>{
    res.json({ message : "auth logout route"})
})

export default router;