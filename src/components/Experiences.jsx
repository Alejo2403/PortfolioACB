import '../styles/Experiencies.css';
import mplogo from '../assets/img/MAN_BIG.D.png';

function Experiences() {
  return (
    <div className="experiencies-container">
        <div className="experiences-left">
            <div className="e-tittle">
                <h2>Experiences</h2>          
            </div>
            <div className="experiences">
                <div className="experience">
                    <div className="experience-left">
                        <img src={mplogo} alt="" />
                        <h3 className="e-name">ManpowerGroup</h3>
                        <p className="e-role">Web Development Intern</p>
                        <p className="e-date">Jan 2024 – Apr 2024</p>
                    </div>
                    <div className="experience-right">
                        <p>Assisted in database migration to PeopleNet and adapted legacy apps for compatibility. Later joined the data analytics team to build a data lake interface with login, search engine, and natural language query features. Also developed a performance improvement plan (PIP) app using Power Apps.</p>
                    </div>
                </div>

                <div className="experience">                    
                    <div className="experience-left">
                        <img src={mplogo} alt="" />
                        <h3 className="e-name">ManpowerGroup</h3>
                        <p className="e-role">Data Analyst</p>
                        <p className="e-date">Ago 2024 – Jan 2025</p>
                    </div>
                    <div className="experience-right">
                        <p>Returned as an independent contractor to support tasks in Novasoft, including Excel parameterization and troubleshooting. Resolved stored procedure issues related to data duplication and assisted in case management through the Aranda platform.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences