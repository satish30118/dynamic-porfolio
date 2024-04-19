import React, { useState } from 'react';
import { useAuth } from '../../contextAPI/authContext';

const Aboutme = () => {
    const [auth, setAuth] = useAuth();
    const [user, setUser] = useState();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const updateData = async (e) => {
        e.preventDefault();
        try {
            setAnimation(true);
            const userData = new FormData();
            userData.append('name', title);
            userData.append('occupation', level);
            userData.append('', image);

            const { data } = await axios.post(`http://localhost:8000/api/v1/auth/update-user/${auth?.user?._id}`, skillData);

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
    return (
        <div className="about-page center">
            <form className="profile-form login-form">
                <h2 className="heading" style={{ textAlign: 'center' }}>
                    Update Your Profile
                </h2>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="occupation">Your Occupation</label>
                    <input type="text" name="occupation" id="occupation" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="des">Write Some Words for Hero Section</label>
                    <input type="text" name="description" id="des" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Resume Link</label>
                    <input type="text" name="resumeLink" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Your Bio</label>
                    <textarea type="text" name="bio" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Profile Image</label>
                    <input type="file" onChange={handleChange} style={{ border: '3px solid lightgray', color: 'white' }} />
                </div>
                <div style={{ textAlign: 'right' }}>
                    <button className="btn profile-btn">Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default Aboutme;
