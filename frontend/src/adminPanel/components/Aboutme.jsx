import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contextAPI/authContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Aboutme = () => {
    const [auth, setAuth] = useAuth();
    const [animation, setAnimation] = useState(false);
    const [user, setUser] = useState({});
    const [image, setImage] = useState('');
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const updateProfile = async (e) => {
        e.preventDefault();
        try {
            setAnimation(true);
            const userData = new FormData();
            userData.append('name', user.name);
            userData.append('occupation', user.occupation);
            userData.append('description', user.description);
            userData.append('resumeLink', user.resumeLink);
            userData.append('bio', user.bio);
            userData.append('image', image);

            const { data } = await axios.put(`https://satish-portfolio.onrender.com/api/v1/auth/update-user/${auth?.user?._id}`, userData);

            setAnimation(false);

            if (data?.success) {
                toast.success('Profile updated successfully!');
                setAuth({...auth, [auth?.user?.image] : data?.updatedUser?.image})
                console.log(auth)
                getProfileData();
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            console.log(error);
            setAnimation(false);
            toast.error('Something went wrong!');
        }
    };

    const getProfileData = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/auth/get-all-user`);
            setUser(data?.allUser[0]);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProfileData();
    }, []);
    return (
        <div className="about-page center">
            <form className="profile-form login-form">
                <h2 className="heading" style={{ textAlign: 'center' }}>
                    Update Your Profile
                </h2>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" onChange={handleChange} value={user.name} />
                </div>
                <div>
                    <label htmlFor="occupation">Your Occupation</label>
                    <input type="text" name="occupation" id="occupation" onChange={handleChange} value={user.occupation} />
                </div>
                <div>
                    <label htmlFor="des">Write Some Words for Hero Section</label>
                    <input type="text" name="description" id="des" onChange={handleChange} value={user.description} />
                </div>
                <div>
                    <label htmlFor="">Resume Link</label>
                    <input type="text" name="resumeLink" onChange={handleChange} value={user.resumeLink} />
                </div>
                <div>
                    <label htmlFor="">Your Bio</label>
                    <textarea type="text" name="bio" onChange={handleChange} value={user.bio} />
                </div>
                <div>
                    <label htmlFor="">Profile Image</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} style={{ border: '3px solid lightgray', color: 'white' }} />
                </div>
                <div style={{ textAlign: 'right' }}>
                    <button className="btn profile-btn" onClick={updateProfile}>
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Aboutme;
