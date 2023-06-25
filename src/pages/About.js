import React from 'react';
import {FaTimes} from 'react-icons/fa';
import '../styles/About.css';

const About = ({close}) => {
    return (
        <section className='modal about'>
            <div className='modal-con about-con'>
                <h1>About <span>Imagene AI</span></h1>
                <i className='close-icon'>
                    <FaTimes onClick={close} />
                </i>

                <div className='about-content'>
                    <p>Welcome to AI Image Downloader, your go-to destination for generating stunning images through the power of AI. It combines cutting-edge technology with artistic vision. It offers a seamless platform where you can bring your ideas to life.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About