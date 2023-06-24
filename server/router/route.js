import { Router } from "express";
const router=Router();

/**import all controllers */
import * as controller from '../controllers/appController.js';
import { registerMail } from "../controllers/mailer.js";
import Auth ,{localVariables} from "../middleware/auth.js";
/**POST Methods  */
router.route('/register').post(controller.register); // register user
router.route('/registerMail').post(registerMail);  // send the mail
router.route('/authenticate').post(controller.verifyUser,(req,res)=>res.end()); // authenticate user.
router.route('/login').post(controller.verifyUser,controller.login); // if user valid then move to password authentication.


/**GET Methods */

router.route('/user/:username').get(controller.getUser); // user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables,controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyUser,controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);

/**PUT Methods */
router.route('/updateuser').put(Auth,controller.updateUser);
router.route('/resetpassword').put(controller.verifyUser,controller.resetPassword);


export default router;
