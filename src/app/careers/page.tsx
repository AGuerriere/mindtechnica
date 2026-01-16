import Navbar from "@/components/Navbar"
import './styles.css';

const CareersPage = () => {
  return (
    <div>
      <Navbar />
      <div className="careers-container">
        <h1>Join Our <span className="highlightsTitle">Team</span></h1>
        <p>
          We are always looking for passionate and talented individuals to join our team. At MindTechnica, we are committed to fostering a collaborative and innovative environment where you can grow your skills and make a real impact.
        </p>
        
        <h2>Open Positions</h2>
        <p>
          We are currently seeking experts in the following fields:
        </p>
        <ul>
          <li>Artificial Intelligence</li>
          <li>Automation</li>
          <li>Data Analytics</li>
          <li>Sales and Marketing</li>
        </ul>
        
        <h2>How to Apply</h2>
        <p>
          If you are interested in any of these roles, please send your CV or portfolio to <a href="mailto:careers@mindtechnica.com">careers@mindtechnica.com</a>. We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default CareersPage;
