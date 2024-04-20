import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Testimonial = () => {
    const [showPopUp, setPopUp] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [allTestimonial, setAllTestimonial] = useState([]);
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');

    const addTesti = async (e) => {
        e.preventDefault();
        try {
            if (!name || !message || !image) {
                toast.warn('Enter Name, Message and Upload Image');
                return;
            }
            setAnimation(true);
            const TestiData = new FormData();
            TestiData.append('name', name);
            TestiData.append('position', position);
            TestiData.append('message', message);
            TestiData.append('image', image);

            const { data } = await axios.post(`https://satish-portfolio.onrender.com/api/v1/testimonial/add-testimonial`, TestiData);

            setAnimation(false);

            if (data?.success) {
                toast.success('Testimonial added Successfully!');
                setImage('');
                setName('');
                setPosition('');
                setMessage('');
                getAllTesti();
                setPopUp(false);
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            console.log(error);
            setAnimation(false);
            toast.error('Something went wrong!');
        }
    };

    const deleteTesti = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(`https://satish-portfolio.onrender.com/api/v1/testimonial/delete-testimonial/${selectedId}`);

            if (data?.success) {
                toast.success(data?.message);
                setDeletePopUp(false);
                setSelectedId('');
                getAllTesti();
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            toast.error('Something went wrong, try again');

            console.log(error);
        }
    };
    const updateTesti = async (e) => {
        e.preventDefault();
        try {
            if (!name || !message) {
                toast.warn("Name and Message can't be empty");
                return;
            }
            setAnimation(true);
            const updatedData = new FormData();
            updatedData.append('name', name);
            updatedData.append('position', position);
            updatedData.append('message', message);
            updatedData.append('image', image);

            const { data } = await axios.put(`http://localhost:8000/api/v1/testimonial/update-testimonial/${selectedId}`, updatedData);

            setAnimation(false);

            if (data?.success) {
                toast.success('Skill Updated Successfully!');
                setImage('');
                setName('');
                setPosition('');
                setMessage('');
                getAllTesti();
                setPopUp(false);
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            console.log(error);
            setAnimation(false);
            toast.error('Something went wrong!');
        }
    };

    const getAllTesti = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/testimonial/get-all-testimonial`);
            setAllTestimonial(data?.allTestimonial);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllTesti();
    }, []);
    return (
        <>
            <div className="skill-page">
                <div className="add-new-skill center">
                    <button className="center" onClick={() => setPopUp(true)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="skill-cards">
                    {allTestimonial.map((s) => (
                        <div className="skill-card" key={s._id} style={{ height: 'auto', color: 'lightgray', }}>
                            <div className="card-img">
                                <img src={`http://localhost:8000/${s.image}`} alt="" />
                            </div>
                            <div className="card-details">
                                <p style={{ color: '#CC5500' }}>Name - {s.name}</p>
                                <p>
                                    <span style={{ color: 'rgb(192, 235, 5)' }}>Position - {s.position}</span>
                                </p>
                                <p style={{ color: 'lightgray' }}>{s.message}</p>
                            </div>
                            <div className="manage-btn">
                                <button
                                    className="btn update-btn"
                                    onClick={() => {
                                        setPosition(s.position);
                                        setName(s.name);
                                        setMessage(s.message);
                                        setSelectedId(s._id);
                                        setPopUp(true);
                                        setUpdateForm(true);
                                    }}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn delete-btn"
                                    onClick={() => {
                                        setDeletePopUp(true);
                                        setSelectedId(s._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* POPUP SECTION */}
            <div className="overlay" style={{ display: `${showPopUp || deletePopUp ? 'block' : 'none'}` }}></div>
            <div className="add-new-skill-popup popup-position center" style={{ display: `${showPopUp ? 'block' : 'none'}` }}>
                <form className="login-form" style={{ height: 'auto', width: '400px', margin: '40px auto' }}>
                    <h5 className="heading">{updateForm ? 'Update Testimonial' : 'New Testimonial'}</h5>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input type="text" required placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        {/* <label htmlFor="level">Enter Your Level</label> */}
                        <input
                            type="text"
                            required
                            id="level"
                            placeholder="Enter Position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                            className="text"
                            placeholder="Write message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="title" style={{ fontWeight: '600' }}>
                            Upload Member Image
                        </label>
                        <input type="file" style={{ color: 'white', border: '2px solid lightgray' }} onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button className="btn" onClick={updateForm ? updateTesti : addTesti}>
                            {updateForm ? 'Update' : 'Add Skill'}
                        </button>
                        <button
                            className="btn cancel-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                setPopUp(false);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            {/* DELETE POPUP */}
            <div className="popup-position">
                <div className="delete-popup" style={{ display: `${deletePopUp ? 'block' : 'none'}` }}>
                    <h3>You are sure to delete ?</h3>
                    <button className="btn" onClick={deleteTesti}>
                        Delete
                    </button>
                    <button className="btn cancel-btn" onClick={() => setDeletePopUp(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
