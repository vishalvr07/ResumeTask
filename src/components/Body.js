import React from 'react';
import { AiOutlineMail, AiFillPhone, AiOutlineBarChart } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';
import { GiHandBag } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import './home.css';

function Body() {
  return (
    <div className="All">
      <div className="top">
        <div className="grid-container">
          <div className="grid-item">
            <div className="basic9">
              <div className="TopName">Vishal Verma</div>
              <span className="basic2">
                Web Developer <br />
                <div className="basic3">
                  Noida ,&nbsp; UttarPradesh&nbsp; (IN)
                </div>
              </span>
            </div>
            <br />
            <div className="basic9">
              <CgProfile className="icon" /> &nbsp; Profile{' '}
            </div>
            <p className="BasicText">
              Software Engineer with an experience of working in web development
              industry . Skilled with HTML5, CSS, JavaScript, Responsive Web
              Designs and ReactJS . Seeking new opportunities through which I
              can grow my knowledge, skills and career , towards new heights and
              help the organization with my skills and experience .{' '}
            </p>
            <br />
            <div className="basic9">
              <GiHandBag className="icon" /> &nbsp; Employment History{' '}
            </div>
            <p className="BasicText">
              Sales Officer – Digital at Globus Remedies Ltd , Shahibabad Uttar
              Pradesh
              <br /> <span className="colorText">May 2017 – March 2020</span>
              <br />• Looked after sales through digital and non digital mediums
              . <br />
              • Managed existing Clients and bought new clients through digital
              media and offline contacts . <br />• Analyzed the business , made
              models and various marketing strategies , examined the demand and
              feedback of customers . <br />
              • Successfully marketed the products on various online platforms
              like Amazon , flipkart , nykaa , purple and others . Organized
              online marketing campaigns . <br />• Working on email marketing ,
              social media marketing and various ads campaigns . Used Tools like
              MS Excel , MS Powerpoint , MailChimp and CRM .
            </p>
            <br />
            <p className="BasicText">
              Web Developer at Freelancer , Delhi
              <br /> <span className="colorText">January 2018 – June 2019</span>
              <br />
            </p>
            <p className="BasicText">
              Software Trainee Engineer at Fluper Technologies , Noida
              <br />
              <span className="colorText"> January 2017 – August 2017 </span>
            </p>
            <p className="BasicText">
              • Worked with HTML5, CSS, JavaScript, JQuery tp enhance
              attractiveness and improved user friendly experience with web
              applications . <br /> • Worked on BootStrap to enhance UI and made
              Web Responsive Designs . <br /> • Used ReactJS framework to make
              single page applications with some good front end User Interface .
              <br />• Designed Custom Graphics , Templates and Forms with
              validations and verifications.
              <br /> • Worked on php in the back end . <br />• Have a good
              knowledge of MySQL Database .<br /> • Hands on tools like Git ,
              Github , BootStrap , TextEditors like Sublime and IDEs .<br /> •
              Have a thorough Understanding of SDLC methodologies including
              Waterfall , AgileScrum and Have a thorough knowledge of web
              development .
            </p>
            <div className="basic9">
              <br />
              <IoSchoolSharp className="icon" /> &nbsp; Education
            </div>
            <p className="BasicText">
              Greater Noida Institute Of Technology , Greater Noida , Uttar
              Pradesh
              <span className="colorText">
                Bachelor of Technology , Information Technology , June 2017
              </span>
            </p>
          </div>

          <div className="grid-item" className="basic10">
            <div className="basic">
              <p className="personalInfo">Personal Info</p>
              <p className="basic7">
                Phone &nbsp; <AiFillPhone className="icon" /> :<br />
                +91 8800404795
              </p>

              <p className="basic7">
                Email &nbsp; <AiOutlineMail className="icon" /> : <br />
                vishal.vrm122@gmail.com
              </p>
            </div>
            <br />

            <div className="basic">
              <p className="personalInfo">Languages</p>
              <p className="basic7">
                English <br />
                Fluent
              </p>

              <p className="basic7">
                Hindi <br />
                Native
              </p>
            </div>

            <div className="basic">
              <p className="personalInfo">
                <AiOutlineBarChart className="icon" /> &nbsp; Skills
              </p>
              <p className="basic7">
                Html5, CSS <br />
                JavaScript, BootStrap <br />
                Programming, MySQL <br />
                ReactJS <br />
                MS Excel, Powerpoint <br />
                Marketing and Sales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
