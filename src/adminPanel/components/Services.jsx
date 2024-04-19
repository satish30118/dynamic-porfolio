import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Services = () => {
    const [showPopUp, setPopUp] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [allService, setAllService] = useState([]);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    const addService = async (e) => {
        e.preventDefault();
        try {
            if (!title || !image) {
                toast.warn('Enter Title and Upload Image');
                return;
            }
            setAnimation(true);
            const serviceData = new FormData();
            serviceData.append('title', title);
            serviceData.append('image', image);

            const { data } = await axios.post(`http://localhost:8000/api/v1/service/add-service`, serviceData);

            setAnimation(false);

            if (data?.success) {
                toast.success('Service added Successfully!');
                setImage('');
                setTitle('');
                getAllService();
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

    const deleteService = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(`http://localhost:8000/api/v1/skill/delete-skill/${selectedId}`);

            if (data?.success) {
                toast.success(data?.message);
                setDeletePopUp(false);
                setSelectedId('');
                getAllService();
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            toast.error('Something went wrong, try again');

            console.log(error);
        }
    };
    const updateService = async (e) => {
        e.preventDefault();
        try {
            if (!title || !image) {
                toast.warn("Title and image can't be empty");
                return;
            }
            setAnimation(true);
            const updatedServiceData = new FormData();
            updatedServiceData.append('title', title);
            updatedServiceData.append('image', image);

            const { data } = await axios.put(`http://localhost:8000/api/v1/service/update-service/${selectedId}`, updatedServiceData);

            setAnimation(false);

            if (data?.success) {
                toast.success('Service Updated Successfully!');
                setImage('');
                setTitle('');
                getAllService();
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

    const getAllService = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/service/get-all-service`);
            setAllService(data?.allService);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllService();
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
                    {allService.map((s) => (
                        <div className="skill-card" key={s._id} style={{ height: '330px', color: 'lightgray' }}>
                            <div className="card-img">
                                <img src={`http://localhost:8000/${s.image}`} alt="" />
                            </div>
                            <div className="card-details">
                                <p style={{ color: '#CC5500' }}>{s.title}</p>
                            </div>
                            <div className="manage-btn">
                                <button
                                    className="btn update-btn"
                                    onClick={() => {
                                        setTitle(s.title);
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
            <div className="add-new-skill-popup popup-position" style={{ display: `${showPopUp ? 'block' : 'none'}` }}>
                <form className="login-form" style={{ height: 'auto' }}>
                    <h5 className="heading">{updateForm ? 'Update Service Data' : 'Add Service'}</h5>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input type="text" required placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="title" style={{ fontWeight: '600' }}>
                            Upload Image
                        </label>
                        <input type="file" style={{ color: 'white', border: '2px solid lightgray' }} onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button className="btn" onClick={updateForm ? updateService : addService}>
                            {updateForm ? 'Update' : 'Add Service'}
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
            <div className="popup-position delete-popup" style={{ display: `${deletePopUp ? 'block' : 'none'}` }}>
                <h3>You are sure to delete ?</h3>
                <button className="btn" onClick={deleteService}>
                    Delete
                </button>
                <button className="btn cancel-btn" onClick={() => setDeletePopUp(false)}>
                    Cancel
                </button>
            </div>
        </>
    );
};

export default Services;
