import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [animation, setAnimation] = useState(false);

    const submitData = async (e) => {
        e.preventDefault();
        try {
            if (!name || !message || !email) {
                toast.warn('Enter Name, Message and Email Id');
                return;
            }
            setAnimation(true);

            const { data } = await axios.post(`https://satish-portfolio.onrender.com/api/v1/contact/add-contact-form`, { name, email, message });

            setAnimation(false);

            if (data?.success) {
                toast.success('Form Submitted Successfully!');
                setEmail('');
                setName('');
                setMessage('');
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            console.log(error);
            setAnimation(false);
            toast.error('Something went wrong!');
        }
    };
    return (
        <>
            <div className="contact-section" id="contact">
                <div className="contact-section-left">
                    <div>
                        <p>
                            <a href="">
                                <i className="fa-solid fa-phone-volume"></i>
                                <span>satishmaurya2257@gmail.com</span>
                            </a>
                        </p>
                        <p>
                            <a href="">
                                <i className="fa-solid fa-envelope"></i>
                                <span>+91 7985017186</span>
                            </a>
                        </p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <p style={{ marginRight: '20px' }}>Connect with Me</p>
                        <p>
                            <a href="">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </p>
                        <p>
                            <a href="">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </p>
                        <p>
                            <a href="">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </p>
                        <p>
                            <a href="">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </p>
                        <p>
                            <a href="">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="contact-section-right">
                    <div className="heading">CONTACT ME</div>
                    <form>
                        <div>
                            <input type="text" placeholder="Name" required autoSave="false" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Write Message ..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <button className="btn" style={{ marginTop: '25px' }} onClick={submitData}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <br />
                <div style={{ position: 'absolute', bottom: '10px', right: '-10px' }}>
                    <Link to="/admin/login">
                        <button className='btn' style={{padding:"4px 8px"}}>Admin Login</button>
                    </Link>
                </div>
            </div>
            <ToastContainer position="bottom-center" autoClose={500} theme="colored" />
            {/* Same as */}
            <ToastContainer />
        </>
    );
}

export default Contact;
