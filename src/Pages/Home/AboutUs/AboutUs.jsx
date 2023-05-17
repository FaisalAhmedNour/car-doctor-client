
import img1 from '../../../assets/images/about_us/person.jpg';
import img2 from '../../../assets/images/about_us/parts.jpg';

const AboutUs = () => {
    return (
        <div>
            <div className="hero py-8">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative pr-20'>
                        <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                        <img src={img2} className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute -bottom-24 right-16 border-8" />
                    </div>
                    
                    <div className='w-1/2'>
                        <h3 className='font-bold text-lg text-[#FF3811]'>About us</h3>
                        <h1 className="text-5xl font-bold  w-4/5">We are qualified & of experience in this field</h1>
                        <p className="pt-6 w-4/5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p className="py-6 w-4/5">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-warning">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;