
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#151515]  text-white flex">
            <div className='flex-1 pr-36'>
                <img src={logo} alt="" />
                <p >Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial . </p>
                <p className='flex gap-4 text-white'>
                    <FaGoogle />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedin />
                </p>
            </div>
            <div className='flex-1'>
                <span className="footer-title">About</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div className='flex-1'>
                <span className="footer-title">Company</span>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">About</a>
            </div>
            <div className='flex-1'>
                <span className="footer-title">Support</span>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </div>
        </footer>
    );
};

export default Footer;