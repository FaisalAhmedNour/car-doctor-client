import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'

const Banner = () => {

    const bannerText = <>
        <div className=" absolute flex flex-col w-1/3 left-20 bottom-1/4 text-white">
            <h1 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
            <p className='my-10'>
                There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div>
                <button className='btn btn-error text-white mr-5'>Discover More</button>
                <button className='btn btn-outline text-white'>Latest Project</button>
            </div>
        </div>
    </>

    return (
        <div className="carousel w-full rounded-lg  h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div id='carousel' className='absolute w-full h-full'>
                    {bannerText}
                    <div className="absolute flex right-20 bottom-16 ">
                        <a href="#slide6" className="btn btn-circle"><FaArrowLeft /></a>
                        <a href="#slide2" className="btn btn-circle btn-error ml-5"><FaArrowRight /></a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div id='carousel' className='absolute w-full h-full'>
                    {bannerText}
                    <div className="absolute flex right-20 bottom-16">
                        <a href="#slide1" className="btn btn-circle"><FaArrowLeft /></a>
                        <a href="#slide3" className="btn btn-circle btn-error ml-5"><FaArrowRight /></a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div id='carousel' className='absolute w-full h-full'>
                    {bannerText}
                    <div className="absolute flex right-20 bottom-16">
                        <a href="#slide2" className="btn btn-circle"><FaArrowLeft /></a>
                        <a href="#slide4" className="btn btn-circle btn-error ml-5"><FaArrowRight /></a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div id='carousel' className='absolute w-full h-full'>
                    {bannerText}
                    <div className="absolute flex right-20 bottom-16">
                        <a href="#slide3" className="btn btn-circle"><FaArrowLeft /></a>
                        <a href="#slide5" className="btn btn-circle btn-error ml-5"><FaArrowRight /></a>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div id='carousel' className='absolute w-full h-full'>
                    {bannerText}
                    <div className="absolute flex right-20 bottom-16">
                        <a href="#slide4" className="btn btn-circle"><FaArrowLeft /></a>
                        <a href="#slide6" className="btn btn-circle btn-error ml-5"><FaArrowRight /></a>
                    </div>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div id='carousel' className='absolute w-full h-full'>
                    {bannerText}
                    <div className="absolute flex right-20 bottom-16">
                        <a href="#slide5" className="btn btn-circle"><FaArrowLeft /></a>
                        <a href="#slide1" className="btn btn-circle btn-error ml-5"><FaArrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;