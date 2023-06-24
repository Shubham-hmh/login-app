import toast from "react-hot-toast";
import { authenticate } from "./helper";
// validate login page username.
export async function usernameValidate (values){
    const errors =usernameVerify({},values);
    if(values.username){
        //check user exist or not.
        const {status}=await authenticate(values.username);

        if(status!==200){
            errors.exist = toast.error('User does not exist....! ')
        }

    }
    return errors;
}

//validate password of password page.
export async function passwordValidate (values){
    const errors =passwordVerify({},values);
    return errors;
}

/**Validate Reset password . */
export async function resetPasswordValidation(values){
    const error =passwordVerify({},values);
    if(values.password!==values.confirm_pwd){
        error.exist=toast.error("Password not match ...!")
    }
    return error;

}

/**validate register form  */
export async function registerValidation(values){
    const error=usernameVerify({},values);
    passwordVerify(error,values);
    emailVerify(error,values);
    return error;

}

/**validate profile page. */
export async function profileValidation(values){
    const error=emailVerify({},values);
    
    return error;

}

//****************************************************************************************** */
//validate password

function passwordVerify(error={},values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        error.password=toast.error("Password required");
    }
    else if(values.password.includes(" ")){
        error.password=toast.error("Invalid password");
    }
    else if(values.password.length<4){
        error.password=toast.error("Password must be more than 4 character");
    }
    else if(!specialChars.test(values.password)){
        error.password=toast.error("Password must contain special character");
    }
    return error;
}

// validate username .
function usernameVerify(error={},values){
    if(!values.username){
        error.username=toast.error('Username Required...!');
    }
    else if(values.username.includes(" ")){
        error.username=toast.error('Invalid Username...!');
    }

    return error;
}

//validate email
function emailVerify(error={},values){
    if(!values.email){
        error.email=toast.error('Email Required...!');
    }
    else if(values.email.includes(" ")){
        error.username=toast.error('Invalid Email...!');
    }

    return error;
}

