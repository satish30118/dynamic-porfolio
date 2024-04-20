import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Education = () => {
    const [showPopUp, setPopUp] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [allEducation, setAllEducation] = useState([]);
    const [active, setActive] = useState({});
    const [formdata, setData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...formdata, [name]: value });
    };

    const addEducation = async (e) => {
        e.preventDefault();
        try {
            const { startDate, endDate, collegeName, cgpa, description, link } = formdata;
            if (!startDate || !endDate || !collegeName || !cgpa || !description) {
                toast.warn('Enter All Required data');
                return;
            }
            setAnimation(true);

            const { data } = await axios.post(`https://satish-portfolio.onrender.com/api/v1/timeline/add-education`, {
                startDate,
                endDate,
                collegeName,
                cgpa,
                description,
                link,
            });

            setAnimation(false);

            if (data?.success) {
                toast.success('Education added Successfully!');
                getAllEducation();
                setData({ startDate: '', endDate: '', collegeName: '', cgpa: '', description: '', link: '' });
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

    const deleteEducation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(`https://satish-portfolio.onrender.com/api/v1/timeline/delete-education/${active._id}`);

            if (data?.success) {
                toast.success(data?.message);
                setDeletePopUp(false);
                setSelectedId('');
                getAllEducation();
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            toast.error('Something went wrong, try again');
            setDeletePopUp(false);
            console.log(error);
        }
    };
    const updateEducation = async (e) => {
        e.preventDefault();
        try {
            const { startDate, endDate, collegeName, cgpa, description, link } = formdata;
            if (!startDate || !endDate || !collegeName || !cgpa || !description) {
                toast.warn('Enter All Required data');
                return;
            }
            setAnimation(true);

            const { data } = await axios.put(`https://satish-portfolio.onrender.com/api/v1/timeline/update-education/${active._id}`, {
                startDate,
                endDate,
                collegeName,
                cgpa,
                description,
                link,
            });

            setAnimation(false);

            if (data?.success) {
                toast.success('Education Updated Successfully!');
                setData({ startDate: '', endDate: '', collegeName: '', cgpa: '', description: '', link: '' });
                getAllEducation();
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

    const getAllEducation = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/timeline/get-all-education`);
            setAllEducation(data?.allEducation);
            setActive(data?.allEducation[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllEducation();
    }, []);

    return (
        <>
            <div className="education-page">
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
                        {allEducation.map((e) => (
                            <div
                                key={e._id}
                                onClick={() => {
                                    setActive(e);
                                }}
                                style={{ background: `${active._id == e._id ? 'rgb(9, 9, 31)' : ''}` }}
                            >
                                {e.startDate} - {e.endDate}
                            </div>
                        ))}
                    </div>

                    <div className="experience-section-right">
                        <div style={{ display: `${active ? 'block' : 'none'}` }}>
                            <div className="job-position">
                                <span style={{ color: '#CC5500' }}>{active.collegeName}</span>
                            </div>
                            <div className="job-company">
                                <span style={{ color: 'gold' }}>CGPA - {active.cgpa}</span>
                            </div>
                            <p className="job-description">{active.description}</p>
                            <a href={active.link} target="_blank" style={{ color: 'blue' }}>
                                {active.link ? 'See my college' : ''}
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
                    <h5 className="heading">{updateForm ? 'Update Data' : 'New Education'}</h5>
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
                            name="collegeName"
                            required
                            placeholder="Enter College Name"
                            value={formdata.collegeName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input type="text" required placeholder="Enter CGPA" name="cgpa" value={formdata.cgpa} onChange={handleChange} />
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
                        <button className="btn" onClick={updateForm ? updateEducation : addEducation}>
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
                    <button className="btn" onClick={deleteEducation}>
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

export default Education;
