import React, { useState } from 'react';
import '../admincss.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contextAPI/authContext';

const Login = () => {
    const [auth, setAuth] = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [animation, setAnimation] = useState(false);
    const navigate = useNavigate();

    const submitData = async (e) => {
        e.preventDefault();
        try {
            if (!email || !password) {
                toast.warn('Enter Email and Password');
                return;
            }
            setAnimation(true);

            const { data } = await axios.post(`http://localhost:8000/api/v1/auth/login`, { email, password });

            setAnimation(false);

            if (data?.success) {
                toast.success('Login Successfully!');
                setAuth({
                    ...auth,
                    user: data?.userDetails,
                    token: data?.token,
                });
                // console.log(auth)
                localStorage.setItem('userInfo', JSON.stringify(data));
                navigate('/admin/dashboard');
                return;
            }
            toast.error('Invalid Credencials');
        } catch (error) {
            console.log(error);
            setAnimation(false);
            toast.error('Something went wrong!');
        }
    };
    return (
        <div className="login-page">
            <form className="login-form">
                <h2 className="login-heading">Login</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button className="login-btn" onClick={submitData}>
                        {animation ? 'Wait...' : 'Login'}
                    </button>
                </div>
            </form>
            <ToastContainer position="bottom" autoClose={2000} theme="colored" />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default Login;
