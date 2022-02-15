import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <section className="container footer">
            <div className="row W-75">
                <div className="col-md-3">
                    <ul>
                        <li className='mt-5 pt-3'>Emergency Dental Care</li>
                        <li>Check Up</li>
                        <li>Treatment of personal Diseases</li>
                        <li>Tooth Extraction</li>
                        <li>Check Up</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li className='fist-item mb-4'>Services</li>
                        <li>Emargency Dental Care</li>
                        <li>Check Up</li>
                        <li>Treatment of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li className='fist-item mb-4'>Oral Health</li>
                        <li>Emargency Dental Care</li>
                        <li>Check Up</li>
                        <li>Treatment of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li className='fist-item mb-4'>Our Address</li>
                        <li>New York -101010Hudson</li>
                        <li>Yards</li>
                    </ul>
                    <div className='ms-4'>
                        <FontAwesomeIcon className='social-icons-fb' icon={faFacebookF} />
                        <FontAwesomeIcon className='social-icons-google' icon={faGooglePlusG} />
                        <FontAwesomeIcon className='social-icons-twiter' icon={faTwitter} />
                    </div>
                    <div>
                        <ul><li>Call Now</li></ul>
                        <button className='btn btn-primary ms-4'>+2025550295</button>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5 mb-3'>
                <small>Copyright {year} All Rights Reserved</small>
            </div>
        </section>
    );
};

export default Footer;