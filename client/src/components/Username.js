import React, { useEffect } from 'react'
import { Link ,useNavigate } from 'react-router-dom';
import profile from '../assests/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate';
import { useAuthStore } from '../store/store.js';

function Username() {
   const navigate =useNavigate();
   const setUsername= useAuthStore(state=>state.setUsername);

    const formik = useFormik({
        initialValues: {
            username:'',

        },
        validate:usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
           // console.log(values);
           setUsername(values.username);
           navigate('/password');
        }


    })
    return (
        <div className="container mx-auto">
        <Toaster position='top-center' reverseOrder={false}></Toaster>
            {/* <div className="flex justify-center items-center h-screen"> */}
            <div className="pt-20  pb-20 flex justify-center items-center ">
                <div className={styles.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className='text-5xl font-bold'>Hello again</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">Explore more by connecting with us.</span>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="py-1">
                        <div className="profile flex justify-center py-4">
                            <img src={profile} alt="avatar" className={styles.profile_img} />
                        </div>
                        <div className="textbox flex flex-col items-center gap-6">
                        <input {...formik.getFieldProps('username')} className = {styles.textbox} type="text" placeholder='Username' />

                            <button type='submit' className="w-3/4  py-4 bg-gray-800 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-indigo-500" >Let's go</button>
                        </div>
                        <div className="text-center py-4">
                            <span className="text-gray-500">Not a member <Link className="text-red-500" to="/register">Register now</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Username