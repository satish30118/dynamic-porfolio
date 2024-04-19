import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Skill = () => {
    const [showPopUp, setPopUp] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [allSkill, setAllSkill] = useState([]);
    const [title, setTitle] = useState('');
    const [level, setLevel] = useState('');
    const [image, setImage] = useState('');

    const addSkill = async (e) => {
        e.preventDefault();
        try {
            if (!title || !level || !image) {
                toast.warn('Enter Title, Level and Upload Image');
                return;
            }
            setAnimation(true);
            const skillData = new FormData();
            skillData.append('title', title);
            skillData.append('level', level);
            skillData.append('image', image);

            const { data } = await axios.post(`http://localhost:8000/api/v1/skill/add-skill`, skillData);

            setAnimation(false);

            if (data?.success) {
                toast.success('Skill added Successfully!');
                setImage('');
                setTitle('');
                setLevel('');
                getAllSkill();
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

    const deleteSkill = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(`http://localhost:8000/api/v1/skill/delete-skill/${selectedId}`);

            if (data?.success) {
                toast.success(data?.message);
                setDeletePopUp(false);
                setSelectedId('');
                getAllSkill();
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            toast.error('Something went wrong, try again');

            console.log(error);
        }
    };
    const updateSkill = async (e) => {
        e.preventDefault();
        try {
            if (!title || !level) {
                toast.warn("Title and Level can't be empty");
                return;
            }
            setAnimation(true);
            const updatedskillData = new FormData();
            updatedskillData.append('title', title);
            updatedskillData.append('level', level);
            updatedskillData.append('image', image);

            const { data } = await axios.put(`http://localhost:8000/api/v1/skill/update-skill/${selectedId}`, updatedskillData);

            setAnimation(false);

            if (data?.success) {
                toast.success('Skill Updated Successfully!');
                setImage('');
                setTitle('');
                setLevel('');
                getAllSkill();
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

    const getAllSkill = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/skill/get-all-skill`);
            setAllSkill(data?.allSkill);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllSkill();
    }, []);
    return (
        <>
            <div className="skill-page">
                <div className="add-new-skill center">
                    <button className="center" onClick={() =>{ setPopUp(true); setUpdateForm(false);}}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="skill-cards">
                    {allSkill.map((s) => (
                        <div className="skill-card" key={s._id} style={{ height: '330px', color: 'lightgray' }}>
                            <div className="card-img">
                                <img src={`http://localhost:8000/${s.image}`} alt="" />
                            </div>
                            <div className="card-details">
                                <p style={{ color: '#CC5500' }}>{s.title}</p>
                                <p>
                                    Level - <span style={{ color: 'rgb(192, 235, 5)' }}>{s.level}</span>
                                </p>
                            </div>
                            <div className="manage-btn">
                                <button
                                    className="btn update-btn"
                                    onClick={() => {
                                        setLevel(s.level);
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
            <div className="add-new-skill-popup popup-position center" style={{ display: `${showPopUp ? 'block' : 'none'}` }}>
                <form className="login-form" style={{ height: 'auto', margin: '40px auto' }}>
                    <h5 className="heading">{updateForm ? 'Update Skill Data' : 'Add New Skill'}</h5>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input type="text" required placeholder="Enter Skill Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        {/* <label htmlFor="level">Enter Your Level</label> */}
                        <input
                            type="text"
                            required
                            id="level"
                            placeholder="Enter Your Level"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="title" style={{ fontWeight: '600' }}>
                            Upload Skill Logo
                        </label>
                        <input type="file" style={{ color: 'white', border: '2px solid lightgray' }} onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button className="btn" onClick={updateForm ? updateSkill : addSkill}>
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
                    <button className="btn" onClick={deleteSkill}>
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

export default Skill;
