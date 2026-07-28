import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
  try {
    let token;

    // Check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded;

      next();
    } else {
      res.status(401).json({
        message: "Not Authorized. No Token.",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Invalid Token",
    });
  }
};

export default protect;