import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Universitycard from '../components/Universitycard';

function Patners() {
    useEffect(() => {
    AOS.init()
    }, [])
    return (
      <>
        <div className="patner">
          <div className="patner-header flex flex-col justify-center items-center text-5xl font-extrabold text-white">
            <h1 className='w-3/4 flex flex-col justify-center items-center p-32 text-center'><span data-aos="fade-up" data-aos-duration="1200">Learn from Scientist, Research scholars from the top institutes in the world</span></h1>
          </div>
            <div className="grid-list grid place-items-center grid-cols-4 gap-y-20 min-h-screen px-36 py-10">
              <Universitycard uniName={"Cambrige University"}/>
              <Universitycard uniName={"Harvard University"}/>
              <Universitycard uniName={"Illinois University"}/>
              <Universitycard uniName={"Johns Hopkin University"}/>
              <Universitycard uniName={"Max-Planck University"}/>
              <Universitycard uniName={"The University of Edinburgh"}/>
              <Universitycard uniName={"University of Zurich UZH"}/>
              <Universitycard uniName={"University of California"}/>
              <Universitycard uniName={"Humboldt University"}/>
              <Universitycard uniName={"Vellore Institute of Technology"}/>
              <Universitycard uniName={"IIT Madras"}/>
              <Universitycard uniName={"IIT Bombay"}/>
            </div>
        </div>
      </>
  )
}

export default Patners