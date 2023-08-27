import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../assets/UniversityLogo/Harvard-Logo.png"
import logo2 from "../assets/UniversityLogo/Humboldt.png"
import logo3 from "../assets/UniversityLogo/Illinois.png"
import logo4 from "../assets/UniversityLogo/Johns Hopkin.png"
import logo5 from "../assets/UniversityLogo/Max-Planck.png"
import logo6 from "../assets/UniversityLogo/The University of Edinburgh.png"
import logo7 from "../assets/UniversityLogo/University of Cambridge.png"
import logo8 from "../assets/UniversityLogo/University of Zurich UZH.png"
import logo9 from "../assets/UniversityLogo/University-of-California-logo.png" 
import Mentor from '../components/Mentor';
import profile from '../assets/defaultprofile.jpg'



function Teams() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="team-container">
        <div className="university h-screen flex justify-center items-center">
          <div className='container bg-white w-10/12 flex flex-col items-center rounded-xl py-12 h-1/2' data-aos="fade-up" data-aos-duration="1200" >
            <div className='university-header flex flex-col justify-center items-center font-bold text-4xl p-5'>Learn from Scientist, Research scholars from <span><Link to="/teams/patners">The top institutes in the world</Link></span></div>
            <div className='flex flex-row justify-center items-center gap-5 bg-white p-5'>
              <img src={logo1} className='w-36 aspect-video object-contain' alt="" />
              <img src={logo2} className='w-36 aspect-video object-contain' alt="" />
              <img src={logo3} className='w-36 aspect-video object-contain' alt="" />
              {/* <img src={logo4} className='w-32 aspect-video object-contain' alt="" /> */}
              {/* <img src={logo5} className='w-32 aspect-video object-contain' alt="" /> */}
              {/* <img src={logo6} className='w-32 aspect-video object-contain' alt="" /> */}
              <img src={logo7} className='w-36 aspect-video object-contain' alt="" />
              {/* <img src={logo8} className='w-32 aspect-video object-contain' alt="" /> */}
              <img src={logo9} className='w-36 aspect-video object-contain' alt="" />
            </div>
          </div>
        </div>
        <div className="mentor h-screen" data-aos="fade-up" data-aos-duration="2000">
          <div className="header text-4xl text-center font-semibold">Meet Your Mentors</div>
          <Carousel className="mentor-list-container w-3/4 mx-auto my-14 px-12" autoPlay={true} transitionTime={1200} interval={5000} swipeable={true} emulateTouch infiniteLoop showStatus={false} useKeyboardArrows = {true} >
            <div className="mentor-list-1 flex flex-row justify-between items-center p-8">
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/>
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/>
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/>
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/>
            </div>
            <div className="mentor-list-2 flex flex-row justify-between items-center p-8">
              <Mentor text1="Shubham" text2="Cambridge University, UK" />
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/>
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/>
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/></div>
            <div className="mentor-list-3 flex flex-row justify-between items-center p-8">
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/>
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/>
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/>
              <Mentor text1 = "Shubham" text2= "Cambridge University, UK"/>
            </div>
          </Carousel>
        </div>
        <div className="advisor h-screen flex flex-col items-center" data-aos="fade-up" data-aos-duration="2000">
          <div className="header text-4xl text-center font-semibold">Mentor & Advisor</div>
          <div className="advisor-container rounded-xl flex flex-col justify-center items-center p-12 m-20">
            <div className="profile pb-8">
              <img src={profile} className= "w-48 rounded-full transition-all duration-500 hover:scale-125 " alt="" />
            </div>
            <div className="text-1 text-2xl hover">Dr. Omkar</div>
            <div className="text-2">Principal Project Scientist</div>
            <div className="text-3">IIT Madras</div>
          </div>
        </div>
        <div className="our-team  flex flex-col h-screen items-center">
          <div className="header text-4xl text-center font-semibold mb-24" data-aos="fade-up" data-aos-duration="1200">Our Team</div>
          <div className="member-1 flex flex-row items-center self-start pl-36 gap-28" data-aos="fade-right" data-aos-duration="1200" >
            <div>
              <img src={profile} alt=""  className='w-56 rounded-full'/>
            </div>
            <div className='flex flex-col gap-2'> 
              <div className='text-3xl font-medium'>Akhil Tripathi</div>
              <button className='p-2 rounded-md w-40'>Message him now</button>
            </div>
          </div>
          <div className="member-2 flex flex-row-reverse self-end items-center p-20 pr-36 gap-28" data-aos="fade-left" data-aos-duration="1200">
            <div>
              <img src={profile} alt="" className='w-56 rounded-full'/>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-3xl font-medium'>Vivek Dwivedi</div>
              <button className='p-2 rounded-md w-40'>Message him now</button>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Teams