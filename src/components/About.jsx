import React, { useState } from 'react';

function About() {
  const [id, setId] = useState(0);
  const content = [
    {
      id : 0,
      details : ""
    }
  ]
    return (
        <div className="about-section" id='about'>
            <div className="about-section-left">
                <img
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1   "
                    alt=""
                />
            </div>
            <div className="about-section-right">
                <div className="about-heading">
                    <h1 style={{textAlign:"left"}}>ABOUT ME</h1>
                </div>
                <div className='about-bio'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora voluptatem consectetuantium corporis repellendus minima voluptatem quam? Hic, quo commodi, odllres at. Aliquam hic mollitia atque corporis? Molestias cumque, consequatur alias veritatis id sapiente beatae similique natus libero ratione eligendi in modi officia incidunt harum blanditiis tempore numquam accusamus, distinctio minima assumenda ducimus temporibus nemo? Eum sed consequatur mollitia natus maiores voluptatum qui tenetur explicabo! Aut consequatur animi, error ratione porro iusto nemo, facilis deleniti adipisci tempora, maiores facere et alias at! Rem pariatur iste officiis quidem expedita nihil dolor ipsa quam corporis ducimus qui, commodi incidunt nobis eum, aliquid animi blanditiis ipsum maiores! Vero itaque minus quasi dolor ut delectus fuga adipieiciendis minus amet distinctio pariatur asperiores dolor. Expedita odit magni cum quia!
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default About;
