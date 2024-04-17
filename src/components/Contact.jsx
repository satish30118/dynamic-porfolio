import React from 'react';

function Contact() {
    return (
        <div className="contact-section" id='contact'>
            <div className="contact-section-left">
                <div>
                  
                    <p>
                        <a href="">
                            <i class="fa-solid fa-phone-volume"></i>
                            <span>satishmaurya2257@gmail.com</span>
                        </a>
                    </p>
                    <p>
                        <a href="">
                            <i class="fa-solid fa-envelope"></i>
                            <span>+91 7985017186</span>
                        </a>
                    </p>
                </div>
                <div style={{ display: 'flex' }}>
                <p style={{marginRight:"20px"}}>Connect with Me</p>
                    <p>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </p>
                    <p>
                        <a href="">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </p>
                    <p>
                        <a href="">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </p>
                    <p>
                        <a href="">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </p>
                    <p>
                        <a href="">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </p>
                </div>
            </div>
            <div className="contact-section-right">
                <div className="heading">CONTACT ME</div>
                <form>
                    <div>
                        <input type="text" placeholder="Name" required autoSave="false" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div>
                        <textarea name="message" placeholder="Write Message ..."></textarea>
                    </div>
                    <div>
                        <button className="btn" style={{ marginTop:"25px"}}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
