import React from 'react'
import profile from '../assets/defaultprofile.jpg'

function Mentor({profilePic,text1,text2,text3}) {
    return (
        <div>
            <>
                <div className="mentor-card-container flex flex-col items-center p-10">
                    <div className="profile p-3">
                        <img src={ profilePic } alt="profile" className='w-40 rounded-full'/>
                    </div>
                    <div className="text-1 text-xl">{text1}</div>
                    <div className="text-2">{text2}</div>
                    <div className="text-3">{text3}</div>
                </div>
            </>
        </div>
    )
    
}
Mentor.defaultProps = {
    profilePic: profile,
    text1: "",
    text2: "",
    text3: "",
}

export default Mentor