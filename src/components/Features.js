import React from "react";
import "./Features.css";
import PopularCourses from "./PopularCourses";
import teacher from "./../images/teacher.svg";
import Result from "./../images/Result.svg";
import assistance from "./../images/assistance.svg";
import certificate from "./../images/certificate.svg";
import responsive from "./../images/responsive.svg";
import payment from "./../images/payment.svg";
// import Cards from "./Cards";

const Features = () => {
  return (
    <div>
      <section id="features" className="features">
        <div className="features-ui">
          <svg
            width="1726"
            height="911"
            viewBox="0 0 1726 911"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 721V40L1726 40V877C1649.89 909.5 1438.93 944.5 1400.58 847C1339.19 690.943 925.328 861 742.54 893.5C551.367 927.491 330.46 869.019 230.133 759C92.8923 608.5 18.978 688.333 0 721Z"
              fill="#181D27"
              fill-opacity="0.5"
            />
            <path
              d="M0 681V4.67151e-05L1726 0V852C1649.89 884.5 1476.33 922.2 1400.58 807C1305.89 663 939.859 824.639 750 871C610.5 905.064 372 879 230.133 719C95.0053 566.6 18.978 648.333 0 681Z"
              fill="#181D27"
            />
          </svg>
        </div>
        <div className="features-wrap">
          <div className="features-intro">
            <h2>
              Achieve your goals with <span>ittoolstraining</span>
            </h2>
            <p>
              ITToolsTraining is a one stop resource for students and
              professions to learn the trending technologies in the world.
            </p>
          </div>
          <div className="features-box">
            <div className="fBox fBox1">
              <div className="fBox-icon">
                <img src={teacher} alt="Coaching" />
              </div>
              <h4>Lectures By Industry Experts</h4>
              <p>
                Our instructors are expert industry practitioners who have a
                good experience in teaching and trained thousands of students
                across the globe.
              </p>
            </div>
            <div className="fBox fBox2">
              <div className="fBox-icon">
                <img src={Result} alt="Target" />
              </div>
              <h4>Results Oriented</h4>
              <p>
                Innovation drives performance. Our courses are alligned with the
                industry trends so that students can apply the knowledge from
                first day after completing the course.
              </p>
            </div>
            <div className="fBox fBox3">
              <div className="fBox-icon">
                <img src={assistance} alt="assistance" />
              </div>
              <h4>Support Assistance</h4>
              <p>
                Quick Technical and Academic support assistance is available.
                Your questions will be answered within 24 hours.
              </p>
            </div>

            <div className="fBox fBox4">
              <div className="fBox-icon">
                <img src={payment} alt="Affordable Pricing" />
              </div>
              <h4>Affordable Pricing</h4>
              <p>
                With our unique subscription based pricing model, students can
                access the whole library of the courses within the subscription
                period.
              </p>
            </div>

            <div className="fBox fBox5">
              <div className="fBox-icon">
                <img src={responsive} alt="Mobile Responsive" />
              </div>
              <h4>Accessibility</h4>
              <p>
                The whole content is easily accessible from any device. It can
                be either Mobile, Laptop or Tablet.
              </p>
            </div>

            <div className="fBox fBox6">
              <div className="fBox-icon">
                <img src={certificate} alt="Certificate" />
              </div>
              <h4>Certificate of Completion</h4>
              <p>
                Earn a professional certificate that adds value to your skills
                after each course completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-courses">
        <div className="about-courses-wrapper">
          <h2>We Offer Everything You Need To Upgrade Your Skills</h2>
          <div className="course-img">
            <img src="../img/dummy.jpg" alt="" />
          </div>
          <div className="courseText">
            <h3>What Each Course offers?</h3>
            <ul>
              <li className="ac1">Video Lectures By Industry Experts</li>
              <li className="ac2">Doubt Support Assistance</li>
              <li className="ac3">
                Projects To See Actual Implementation Of Concepts
              </li>
              <li className="ac4">Downloadable Code Files</li>
              <li className="ac5">
                Interactive Quizzes That Cover Interview Questions To Test Your
                Knowledge
              </li>
              <li className="ac6">Certificate Of Completion</li>
            </ul>
          </div>
        </div>
      </section>

      <PopularCourses />

      <section id="testimonals" className="testimonals">
        <h2>We Add Value To Our Students Journey</h2>
        <h3 className="testimonal-title">Testimonals</h3>
        <div className="testimonal-videos">
          <video
            className="testimonal-video"
            src="./float.MP4"
            controls
            width="350px"
          ></video>
          <video
            className="testimonal-video"
            src="./float.MP4"
            controls
            width="350px"
          ></video>
          <video
            className="testimonal-video"
            src="./float.MP4"
            controls
            width="350px"
          ></video>
          <video
            className="testimonal-video"
            src="./float.MP4"
            controls
            width="350px"
          ></video>
          <video
            className="testimonal-video"
            src="./float.MP4"
            controls
            width="350px"
          ></video>
        </div>
      </section>
    </div>
  );
};

export default Features;
