// const aiService = require('../services/ai.service');


// module.exports.getReview = async (req,res) => {
//     const code = req.body.prompt;
//     if(!code){
//         return res.status(400).send("Prompt is required");
//     }
//     const result = await aiService(code);
//     res.send(result);
// }

// const aiService = require('../services/ai.service');

// module.exports.getReview = async (req, res) => {
//     const code = req.body.code;  // Fix this line (req.body.code instead of req.body.prompt)
    
//     if (!code) {
//         return res.status(400).json({ error: "Code is required" });
//     }

//     try {
//         const result = await aiService.getReview(code);  // Ensure `aiService.getReview()` is correctly defined
//         res.json({ review: result });  // Send response in correct JSON format
//     } catch (error) {
//         console.error("Error in getReview:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: "Code is required" });
    }

    try {
        const result = await aiService.generateContent(code);
        res.json({ review: result });
    } catch (error) {
        console.error("Error in getReview:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
