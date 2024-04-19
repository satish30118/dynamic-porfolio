import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Experiences = () => {
    const [showPopUp, setPopUp] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [allExperience, setAllExperience] = useState([]);
    const [active, setActive] = useState({});
    const [formdata, setData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...formdata, [name]: value });
    };

    const addExperience = async (e) => {
        e.preventDefault();
        try {
            const { startDate, endDate, jobPosition, companyName, description, link } = formdata;
            if (!startDate || !endDate || !jobPosition || !companyName || !description) {
                toast.warn('Enter All Required data');
                return;
            }
            setAnimation(true);

            const { data } = await axios.post(`http://localhost:8000/api/v1/timeline/add-experience`, {
                startDate,
                endDate,
                jobPosition,
                companyName,
                description,
                link,
            });

            setAnimation(false);

            if (data?.success) {
                toast.success('Experience added Successfully!');
                getAllExperience();
                setData({ startDate: '', endDate: '', jobPosition: '', companyName: '', description: '', link: '' });
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

    const deleteExperience = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(`https://satish-portfolio.onrender.com/api/v1/timeline/delete-experience/${selectedId}`);

            if (data?.success) {
                toast.success(data?.message);
                setDeletePopUp(false);
                setSelectedId('');
                getAllExperience();
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            toast.error('Something went wrong, try again');
            setDeletePopUp(false);
            console.log(error);
        }
    };
    const updateExperience = async (e) => {
        e.preventDefault();
        try {
            const { startDate, endDate, jobPosition, companyName, description, link } = data;
            if (!startDate || !endDate || !jobPosition || !companyName || !description) {
                toast.warn('Enter All Required data');
                return;
            }
            setAnimation(true);

            const { data } = await axios.put(`https://satish-portfolio.onrender.com/api/v1/timeline/update-experience/${selectedId}`, {
                startDate,
                endDate,
                jobPosition,
                companyName,
                description,
                link,
            });

            setAnimation(false);

            if (data?.success) {
                toast.success('Service Updated Successfully!');
                setData({ startDate: '', endDate: '', jobPosition: '', companyName: '', description: '', link: '' });
                getAllExperience();
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

    const getAllExperience = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/timeline/get-all-experience`);
            setAllExperience(data?.allExperience);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllExperience();
    }, []);

    return (
        <>
            <div className="experience-page">
                <div className="add-new-skill center">
                    <button
                        className="center"
                        onClick={() => {
                            setPopUp(true);
                            setUpdateForm(false);
                        }}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="experience">
                    <div className="experience-section-left">
                        {allExperience.map((e) => (
                            <div
                                key={e._id}
                                onClick={() => {
                                    setSelectedId(e._id);
                                    setActive(e);
                                    console.log(active);
                                }}
                                style={{ background: `${selectedId == e._id ? 'rgb(9, 9, 31)' : ''}` }}
                            >
                                {e.startDate} - {e.endDate}
                            </div>
                        ))}
                    </div>

                    <div className="experience-section-right">
                        <div style={{ display: `${selectedId ? 'block' : 'none'}` }}>
                            <div className="job-position">
                                <span style={{ color: '#CC5500' }}>{active.jobPosition}</span>
                            </div>
                            <div className="job-company">
                                <span style={{ color: 'gold' }}>{active.companyName}</span>
                            </div>
                            <p className="job-description">{active.description}</p>
                            <a href={active.link} target="_blank">
                                {active.link ? 'Seee Work' : ''}
                            </a>
                            <div className="manage-btn">
                                <button
                                    className="btn update-btn"
                                    onClick={() => {
                                        setPopUp(true);
                                        setUpdateForm(true);
                                        setData(active);
                                    }}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn delete-btn"
                                    onClick={() => {
                                        setDeletePopUp(true);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* POPUP SECTION */}
            <div className="overlay" style={{ display: `${showPopUp || deletePopUp ? 'block' : 'none'}` }}></div>
            <div className="add-new-skill-popup popup-position" style={{ display: `${showPopUp ? 'block' : 'none'}` }}>
                <form className="login-form" style={{ height: 'auto', margin: '40px auto', width: '450px' }}>
                    <h5 className="heading">{updateForm ? 'Update Data' : 'Add Experience'}</h5>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input
                            type="number"
                            name="startDate"
                            required
                            placeholder="Enter Starting Year"
                            value={formdata.startDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input type="text" required placeholder="Enter Ending Year" name="endDate" value={formdata.endDate} onChange={handleChange} />
                    </div>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input
                            type="text"
                            name="jobPosition"
                            required
                            placeholder="Enter Job Position"
                            value={formdata.jobPosition}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input
                            type="text"
                            required
                            placeholder="Enter Company Name"
                            name="companyName"
                            value={formdata.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <textarea
                            required
                            className="text"
                            name="description"
                            placeholder="Write details description ..."
                            value={formdata.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input type="text" name="link" required placeholder="Enter  Work Link if ?" value={formdata.link} onChange={handleChange} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button className="btn" onClick={updateForm ? updateExperience : addExperience}>
                            {updateForm ? 'Update' : 'Add New'}
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
                    <button className="btn" onClick={deleteExperience}>
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

export default Experiences;
