import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Project = () => {
    const [showPopUp, setPopUp] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    const [allProject, setAllProject] = useState([]);
    const [active, setActive] = useState({});
    const [formdata, setData] = useState({});
    const [image, setImage] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...formdata, [name]: value });
    };

    const addProject = async (e) => {
        e.preventDefault();
        try {
            const { heading, title, techStack, description, link } = formdata;
            if (!heading || !title || !techStack || !description) {
                toast.warn('Enter All Required data');
                return;
            }
            const projectData = new FormData();
            projectData.append('heading', heading);
            projectData.append('title', title);
            projectData.append('techStack', techStack);
            projectData.append('description', description);
            projectData.append('link', link);
            projectData.append('image', image);

            setAnimation(true);

            const { data } = await axios.post(`https://satish-portfolio.onrender.com/api/v1/project/add-project`, projectData);

            setAnimation(false);

            if (data?.success) {
                toast.success('Project added Successfully!');
                getAllProject();
                setData({ heading: '', title: '', techStack: '', description: '', link: '' });
                setImage('');
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

    const deleteProject = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(`https://satish-portfolio.onrender.com/api/v1/project/delete-project/${active._id}`);

            if (data?.success) {
                toast.success(data?.message);
                setDeletePopUp(false);
                setSelectedId('');
                getAllProject();
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            toast.error('Something went wrong, try again');
            setDeletePopUp(false);
            console.log(error);
        }
    };
    const updateProject = async (e) => {
        e.preventDefault();
        try {
            const { heading, title, techStack, description, link } = formdata;
            if (!heading || !title || !techStack || !description) {
                toast.warn('Enter All Required data');
                return;
            }
            const projectData = new FormData();
            projectData.append('heading', heading);
            projectData.append('title', title);
            projectData.append('techStack', techStack);
            projectData.append('description', description);
            projectData.append('link', link);
            projectData.append('image', image);

            setAnimation(true);

            const { data } = await axios.put(`https://satish-portfolio.onrender.com/api/v1/project/update-project/${active._id}`, projectData);

            setAnimation(false);

            if (data?.success) {
                toast.success('Project Updated Successfully!');
                setData({ heading: '', title: '', techStack: '', description: '', link: '' });
                setImage('');
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

    const getAllProject = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/project/get-all-project`);
            setAllProject(data?.allProject);
            setActive(data?.allProject[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProject();
    }, []);

    return (
        <>
            <div className="project-page">
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
                        {allProject.map((e) => (
                            <div
                                key={e._id}
                                onClick={() => {
                                    setActive(e);
                                }}
                                style={{ background: `${active._id == e._id ? 'rgb(9, 9, 31)' : ''}` }}
                            >
                                {e.heading}
                            </div>
                        ))}
                    </div>

                    <div className="experience-section-right">
                        <div style={{ display: `${active ? 'block' : 'none'}` }}>
                            <div className="job-position">
                                <span style={{ color: '#CC5500' }}>{active.title}</span>
                            </div>
                            <div className="job-company">
                                <span style={{ color: 'gold' }}>{active.techStack}</span>
                            </div>
                            <p className="job-description">{active.description}</p>
                            <a href={active.link} target="_blank" style={{ color: 'blue' }}>
                                {active.link ? 'Project Live Link' : '.'}
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
                        <div>
                            <img className="projectImage" src={`https://satish-portfolio.onrender.com/${active.image}`} alt="Project Image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* POPUP SECTION */}
            <div className="overlay" style={{ display: `${showPopUp || deletePopUp ? 'block' : 'none'}` }}></div>
            <div className="add-new-skill-popup popup-position" style={{ display: `${showPopUp ? 'block' : 'none'}` }}>
                <form className="login-form" style={{ height: 'auto', margin: '10px auto', width: '500px' }}>
                    <h5 className="heading">{updateForm ? 'Update Data' : 'Add Experience'}</h5>
                    <div>
                        <input
                            type="text"
                            name="heading"
                            required
                            placeholder="Enter Project Name"
                            value={formdata.heading}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input type="text" required placeholder="Enter Project Title" name="title" value={formdata.title} onChange={handleChange} />
                    </div>
                    <div>
                        {/* <label htmlFor="title">Enter Skill Name</label> */}
                        <input
                            type="text"
                            required
                            placeholder="Enter Tech Stack Used"
                            name="techStack"
                            value={formdata.techStack}
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
                    <div>
                        <label htmlFor="title" style={{ fontWeight: '600' }}>
                            Upload Image
                        </label>
                        <input type="file" style={{ color: 'white', border: '2px solid lightgray' }} onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button className="btn" onClick={updateForm ? updateProject : addProject}>
                            {updateForm ? 'Update Project' : 'Add New'}
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
                    <button className="btn" onClick={deleteProject}>
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

export default Project;
