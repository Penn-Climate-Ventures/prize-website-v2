import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import './GetInvolved.css';

const GetInvolved = () => {
  const [selectedContent, setSelectedContent] = useState('sponsors'); // Default tab

  return (
    <div>
      <Navbar />
      <header className="hero-section">
      <video className="hero-video" autoPlay loop muted controlsList="nodownload nofullscreen noremoteplayback">
          <source src={`${process.env.PUBLIC_URL}/about.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="title">Get Involved</h1>
          <p className="subheading">Become a Judge or Sponsor!</p>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <div className="content">
            <p>
              Penn Climate Ventures is always looking for new sponsors and judges to help support
              our mission.
            </p>
          </div>
        </section>

        <div className="button-group">
          <button
            className={selectedContent === 'sponsors' ? 'active' : ''}
            onClick={() => setSelectedContent('sponsors')}
          >
            Sponsors
          </button>
          <button
            className={selectedContent === 'judges' ? 'active' : ''}
            onClick={() => setSelectedContent('judges')}
          >
            Judges
          </button>
        </div>

        <div className="content">
          {selectedContent === 'sponsors' && (
            <div>
              <br />
              <h2>Sponsor</h2>
              <p>
                Sponsoring the UPenn EcoVenture Challenge empowers future leaders to tackle the
                climate crisis with innovative solutions.
              </p>
              <p>
                The UPenn EcoVenture Challenge would not be possible without our sponsors. Thank you
                to our current sponsors for supporting impactful ideas and driving a sustainable
                future.
              </p>
              <p>Reach out to: prizepcv@gmail.com if you are interested in becoming a sponsor.</p>
              {/* <p><strong>Sponsor List:</strong></p>
              <p>Photos and descriptions of sponsors will be added here.</p> */}
              <br /><br /><br />
            </div>
          )}

          {selectedContent === 'judges' && (
            <div>
              <br />
              <h2>Judge</h2>
              <p>
                Judges are essential to hosting a successful UPenn EcoVenture competition. By
                serving as a judge, you'll empower student entrepreneurs to bring their ideas to
                life.
              </p>
              <p>
                Reach out to prizepcv@gmail.com if you are interested in becoming a judge or mentor
                for next year's competition. We are recruiting judges for each of the three rounds:
                written application, slide deck, and live pitch judging.
              </p>
              <br />
              <h3>Final Round Judges:</h3>
              <div className="judges-list">
                <div className="judge-item">
                  <img src={`${process.env.PUBLIC_URL}/final-round-judges/annelise-dyer.jpeg`} alt="Anneliese Dyer" className="judge-photo" />
                  <p>Anneliese Dyer, 4AIR</p>
                </div> 
                <div className="judge-item">
                  <img src={`${process.env.PUBLIC_URL}/final-round-judges/david-jacoby.jpeg`} alt="David Steven Jacoby" className="judge-photo" />
                  <p>David Steven Jacoby, NYU Stern Business School</p> 
                </div>
                <div className="judge-item">
                  <img src={`${process.env.PUBLIC_URL}/final-round-judges/daniel-bloch.jpeg`} alt="Daniel Bloch" className="judge-photo" />
                  <p>Daniel Bloch, Lanzajet</p>
                </div>
                <div className="judge-item">
                  <img src={`${process.env.PUBLIC_URL}/final-round-judges/chuck-hurchalla.jpeg`} alt="Chuck Hurchalla" className="judge-photo" />
                  <p>Chuck Hurchalla, Evolution Sustainability Group</p>
                </div>
              </div>
              <br />
              <h3>We would like to thank our Round 1 Judges for their hard work grading the pitches. We could not have done this without their respective expertise in the field. Thank you to:</h3>
              <ul>
                <li>Siddharth Gundala - Columbia University, Master's Student in Climate and Society</li>
                <li>Julia Campbell - University of Michigan, PhD Student in Climate Science</li>
                <li>Corey Pedersen - Harvard University, PhD Student in Environmental Science and Engineering</li>
                <li>William Sewell - University of Oxford, Master's student in Nature, Society and Environmental Governance</li>
                <li>Ananya A. Pillai - University of Pennsylvania, Master's Student in Environmental Studies</li>
                <li>Bailey Lin - University of Pennsylvania, Master's Student in Environmental Studies</li>
                <li>Jiayu Tang - University of Pennsylvania, Master's Student in Environmental Studies</li>
                <li>Riqi Zhang - Imperial College London, PhD Student at the Center of Environmental Policy</li>
                <li>Anne Rolim - Columbia University, Master's Student in Sustainability Management</li>
                <li>Anar Amarjargal - Columbia University, Master's Student in Climate and Society</li>
                <li>Yeraldi Loera - Princeton University, PhD Student in Ecology and Evolutionary Biology</li>
                <li>Sierra Hicks - Cornell University, PhD Student in Natural Resources & the Environment</li>
                <li>Narayani Sunil Pillai - University of Pennsylvania, Master's Student in Environmental Studies</li>
                <li>Annabelle Horton - University of Pennsylvania, PhD Student in the Department of Earth and Environmental Science</li>
                <li>Yanying Zhu - University of Oxford, Master's Student in Biodiversity Conservation and Management</li>
                <li>Alexandra Gonzalez - Columbia University, Master's Student in Climate and Society, Policy</li>
                <li>Molly Fowler - University of Pennsylvania, Master's Student in Environmental Studies</li>
              </ul>
              <br />
              {/* <p><strong>Judge List:</strong></p>
              <p>Photos and descriptions of judges will be added here.</p> */}
              <br /><br />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetInvolved;