import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy()); // create a configured passport-local LocalStrategy

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
