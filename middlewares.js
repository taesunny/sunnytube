import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = 'SunnyTube';
    res.locals.routes = routes;
    next();
};