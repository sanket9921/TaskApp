const { verifyToken } = require("../utils/jwtUtils");
const logger = require("../utils/logger");

module.exports = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        logger.warn("Unauthorized access attempt detected");
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try{

        const decode = verifyToken(token);
        if (!decode) {
            logger.warn("Invalid token detected");
            return res.status(401).json({ message: 'Unauthorized' });
        }
        logger.info("Token verified successfully");
        req.userId = decode.id;
        next();
    }
    catch{
        res.status(401).json({message:"invalid token"})
    }
}