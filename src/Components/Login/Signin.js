import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../Loader';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import signIn from '../../assets/images/Signin.jpg'
import SocialLogin from './SocialLogin';

const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useSignInWithEmailAndPassword(auth);


    // for jwt
    const [token] = useToken(user || createUser)
    // for jwt

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password)
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    useEffect(() => {
        if (token) {
            toast.success('Signin successd...')
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])

    if (createLoading || loading) {
        return <Loader></Loader>

    };
    if (createError || error) {
        toast.error(error?.message)
    }

    return (
        <div className="w-full bg-white pb-16 px-4">
            <div className="w-11/12 grid grid-cols lg:grid-cols-2 gap-0 lg:gap-12 mx-auto justify-center items-center">
                <div>
                    <img className='w-1/4 lg:w-4/5 mx-auto' src={signIn} alt="Signin" data-aos="fade-right" />
                </div>
                <div className="shadow-2xl rounded-xl w-4/5 p-10 mt-16" data-aos="fade-left">

                    <p className="text-3xl mb-6 text-center font-extrabold leading-6 text-gray-800">
                        Sign In
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <lable className="text-sm font-medium leading-none text-gray-800 relative">Email <span className='text-red-500 absolute top-0 '>&#10035;</span></lable>
                            <input {...register("email", { required: true })} aria-label="enter email adress" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            {errors.email && <small className='text-red-500'>Email is required!!</small>}
                        </div>
                        <div className="mt-6  w-full">
                            <lable className="text-sm font-medium leading-none text-gray-800 relative">Password <span className='text-red-500 absolute top-0 '>&#10035;</span></lable>
                            <div className="relative flex items-center justify-center">
                                <input {...register("password", { required: true })} aria-label="enter Password" type={show ? 'text' : 'password'} className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                <div onClick={() => setShow(!show)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    {
                                        show === false ?
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                    fill="#71717A"
                                                />
                                            </svg>
                                            :
                                            <AiOutlineEyeInvisible />
                                    }
                                </div>
                            </div>
                            {errors.password && <small className='text-red-500'>Password is required!!</small>}
                        </div>
                        <div className="mt-8">
                            <input type={'submit'} aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 btn bg-primary border-none hover:bg-accent  text-md font-semibold leading-none text-white focus:outline-none rounded  py-4 w-full cursor-pointer" value={'Signin'} />
                        </div>
                    </form>
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                    <p className="text-sm font-medium leading-none text-gray-500 text-center">
                        Don't have account?{" "}
                        <Link to={'/signup'} className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            Sign Up here
                        </Link>
                    </p>

                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        {/* <Link to={'/eventType'} className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            check here
                        </Link> */}
                    </p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Signin;
