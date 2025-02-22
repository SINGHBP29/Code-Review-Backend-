// const express = require('express');
// const aiController = require('../controllers/ai.controller'); // Import controller
// const router = express.Router();

// // Route to handle AI response
// router.post('/get-review', aiController.getReview);

// module.exports = router;

const express = require('express');
const aiController = require('../controllers/ai.controller'); // Import controller
const router = express.Router();

router.post('/get-review', aiController.getReview);  // Ensure correct route

module.exports = router;
