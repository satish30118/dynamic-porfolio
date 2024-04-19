import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Blocks } from 'react-loader-spinner';
import { useAuth } from '../../contextAPI/authContext';

const PrivateRoute = () => {
    const [status, setStatus] = useState(true);
    const [animation, setAnimation] = useState(true);
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();

    const authCheck = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/v1/auth/admin-auth`);

        if (data?.success) {
            setStatus(true);
        } else {
            setStatus(false);
            setAnimation(false);
        }
    };

    useEffect(() => {
        // if (auth?.token) authCheck();
        authCheck();
    }, [auth?.token]);

    useEffect(() => {
        console.log(auth);
    }, []);
    return (
        <>
            {status ? (
                <Dashboard />
            ) : (
                <div className="login-page">
                    {animation ? (
                        <Blocks
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            visible={true}
                        />
                    ) : (
                        <div className="login-page" style={{ padding: '0 20px', textAlign: 'center' }}>
                            <div>
                                <h2 className="heading">Either you have not login or not an admin</h2>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                                    <button onClick={() => navigate('/')} className="btn" style={{ marginRight: '40px' }}>
                                        Home
                                    </button>

                                    <button onClick={() => navigate('/admin/login')} className="btn">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default PrivateRoute;
