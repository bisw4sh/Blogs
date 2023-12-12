import express from 'express';
import singleMarkdown from '../controllers/singleMarkdown.js';
const router = express.Router();

router.get('/', async(req,res) => {
    const id = parseInt(req.params.id)
    console.log(`This id is ${id}`)

      if (isNaN(id)) {
        // Handle invalid parameter error
        return res.status(400).json({ error: "Invalid parameter provided." });
      }

    const response = await singleMarkdown(id);
    console.log(response)
    res.json({ msg: response });
})

export default router