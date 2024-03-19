import React from 'react'
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-row">
                <div className="footer-col">
                    <h2 className="logo">Swami <br /> <span>Sanitation</span> </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                        dolor sit amet, Lorem ipsum dolor sit
                    </p>
                </div>
                <div className="footer-col">
                    <h3>Site <div className="underline"><span></span></div></h3>
                    <p>ITPL Road</p>
                    <p>Whitefield, bangalore</p>
                    <p>Karnataka, Pin 144004, India</p>
                    <a href='/' className="email">officialofferszone@gmail.com</a>
                    <h4>+91  987654321</h4>
                </div>
                <div className="footer-col">
                    <h3>as <div className="underline"><span></span></div></h3>
                    <ul>
                        <li><Link to={'/about'}>About us</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/policy'}>Terms &amp; conditions</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Contact Us <div className="underline"><span></span></div></h3>
                    <form className='contact-form' action='https://formspree.io/f/mvonqvpg' method='POST'>
                        <i className="far fa-envelope"></i>
                        <input type="text" name='name' placeholder="enter name" required />
                        <hr />
                        <input type="email" name='email' placeholder="enter email" required />
                        <hr />
                        <textarea name="message" id="" footer-cols="30" rows="3" placeholder='enter message'></textarea>
                        <hr />
                        <button type="submit">Submit</button>
                    </form>
                    <div className="icons">
                        <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' alt="instgram" /></Link>
                        <Link to='/'><img src='https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png' alt="facebook" /></Link>
                        <Link to='/'><img src='https://purepng.com/public/uploads/large/purepng.com-youtube-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596145hip8d.png' alt="youtube" /></Link>
                        <Link to='/'><img src='https://4.bp.blogspot.com/-0r7Tgg0kIV8/WIq1KtKcWYI/AAAAAAAACVE/CksIlo-zSpEcKLQDu4fhi1guhWtZW2dkgCLcB/s1600/EMAIL%2BVEKTOR.png' alt="mail" /></Link>
                    </div>
                </div>
            </div>
            <hr className='footer-hr'/>
            <p className="cr">copyright my store @2023</p>
        </footer>
    )
};

export default Footer;