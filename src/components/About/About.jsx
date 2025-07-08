import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../../assets/profile1.jpg'
import ReactParallaxTilt from 'react-parallax-tilt';

const About = () => {
    return (
        <section id="about" className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                {/* Left Side  */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting  */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    {/* Name  */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Abu Bakkar
                    </h2>
                    {/* Skills heading with typing effect  */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-prim leading-tight">
                        <span className="text-white">I am a </span>
                        <span className="text-prim">
                            <Typewriter
                                words={['DevOps Engineer', 'Cloud Engineer', 'Django Developer', 'Flutter Developer']}
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </h3>
                    {/* About me paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        Aspiring Cloud Engineer with hands-on experience in AWS, Docker, and Terraform. Skilled in Python backend
                        and passionate about automating cloud infrastructure. Currently building and deploying cloud projects, with a
                        strong focus on open-source contributions and continuous improvement.
                    </p>
                    {/* Resume Button  */}
                    <a href="https://drive.google.com/file/d/1xj301PJvt_fJ30UK61dczHW_v-QWbl_6/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        DOWNLOAD CV
                    </a>
                </div>
                {/* Right Side  */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                <ReactParallaxTilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full" tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} scale={1.05} transitionSpeed={1000} gyroscope={true}>
                <img src={profileImage} alt="Abu Bakkar" className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130, 69, 236, 0.5)]" />
                </ReactParallaxTilt>
                </div>
            </div>
        </section>
    );
};

export default About;