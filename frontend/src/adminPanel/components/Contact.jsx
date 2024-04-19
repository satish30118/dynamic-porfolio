import React from 'react';

const Contact = () => {
    return (
        <div className="contact-page center">
            {/* <form className="login-form" style={{ height: 'auto' }}>
                <h5 className="heading">{updateForm ? 'Update Service Data' : 'Add Service'}</h5>
                <div>
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
            </form> */}

            <h2 className="heading">Upcoming...</h2>
        </div>
    );
};

export default Contact;
