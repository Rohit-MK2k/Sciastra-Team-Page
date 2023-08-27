import React , { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Universitycard({ uniName }) {
    useEffect(() => {
    AOS.init()
    }, [])
    return (
        <div className='university-card text-2xl font-semibold border-2 p-10 w-56 flex justify-center items-center text-center rounded-lg' data-aos="zoom-in" data-aos-duration="500">{ uniName }</div>
    )
}

export default Universitycard