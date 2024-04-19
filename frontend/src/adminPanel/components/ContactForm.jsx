import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [allForm, setAllForm] = useState([]);

    const deleteFormData = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(`https://satish-portfolio.onrender.com/api/v1/contact/delete-contact-form${selectedId}`);

            if (data?.success) {
                toast.success(data?.message);
                setDeletePopUp(false);
                setSelectedId('');
                getAllFormData();
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            toast.error('Something went wrong, try again');

            console.log(error);
        }
    };
    const getAllFormData = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/contact/get-all-contact-form`);
            setAllForm(data?.allForm);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllFormData();
    }, []);

    return (
        <>
            <div className="contact-form">
                <h2 className="heading">See All Contact Form Filled</h2>
                <div className="skill-cards">
                    {allForm.map((s) => (
                        <div className="skill-card" key={s._id} style={{ height: 'auto', color: 'lightgray', width: '340px' }}>
                            <div className="card-details">
                                <p style={{ color: '#CC5500' }}>Name - {s.name}</p>
                                <p style={{ color: 'gold' }}>Email- {s.email}</p>
                                <p style={{ color: 'green' }}>Querry - {s.message}</p>
                            </div>
                            <div className="manage-btn" style={{marginTop:"20px"}}>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setDeletePopUp(true);
                                        setSelectedId(s._id);
                                    }}
                                    style={{background:"brown", width:"150px"}}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DELETE POPUP */}
            <div className="popup-position delete-popup" style={{ display: `${deletePopUp ? 'block' : 'none'}` }}>
                <h3>You are sure to delete ?</h3>
                <button className="btn" onClick={deleteFormData}>
                    Delete
                </button>
                <button className="btn cancel-btn" onClick={() => setDeletePopUp(false)}>
                    Cancel
                </button>
            </div>
        </>
    );
};

export default ContactForm;
