import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './CSS/Skills.css';

function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sulaeman - Skills</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skills</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>03</strong>
          </h4>
        </div>
        <div className="skills-right">
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-html5-plain-wordmark colored"
                title="HTML"
              ></i>
              <i
                className="devicon-css3-plain-wordmark colored"
                title="CSS"
              ></i>
              <i
                className="devicon-javascript-plain colored"
                title="JavaScript"
              ></i>
              <i className="devicon-php-plain colored" title="PHP"></i>
            </div>
          </div>
              <i
                className="devicon-react-original-wordmark colored"
                title="React JS"
              ></i>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;
