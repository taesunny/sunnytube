import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "SunnyTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile"); // get only one file with the html element having name 'videoFile'
