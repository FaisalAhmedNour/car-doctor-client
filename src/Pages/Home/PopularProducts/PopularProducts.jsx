
import { FaStar } from 'react-icons/fa';
import products1 from '../../../assets/images/products/1.png'
import products2 from '../../../assets/images/products/2.png'
import products3 from '../../../assets/images/products/3.png'
const PopularProducts = () => {
    return (
        <div className="text-center my-10">
            <h3 className='font-bold text-lg text-[#FF3811]'>Popular Products</h3>
            <h1 className="text-5xl font-bold ">Browse Our Products</h1>
            <p className="pt-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="grid grid-cols-3 gap-20 my-8">
                <div className="card w-96 glass  p-3">
                    <figure><img src={products1} alt="car!" /></figure>
                    <div className="card-body text-center">
                        <p className='flex mx-auto text-warning'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h2 className="card-title mx-auto">Electrical System</h2>
                        <h3 className='text-[#FF3811]'>$20.00</h3>
                    </div>
                </div>
                <div className="card w-96 glass  p-3">
                    <figure><img src={products2} alt="car!" /></figure>
                    <div className="card-body text-center">
                        <p className='flex mx-auto text-warning'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h2 className="card-title mx-auto">Electrical System</h2>
                            <h3 className='text-[#FF3811]'>$20.00</h3>
                    </div>
                </div>
                <div className="card w-96 glass p-3">
                    <figure><img src={products3} alt="car!" /></figure>
                    <div className="card-body text-center">
                        <p className='flex mx-auto text-warning'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h2 className="card-title mx-auto">Electrical System</h2>
                            <h3 className='text-[#FF3811]'>$20.00</h3>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline btn-warning">More Products</button>
        </div>
    );
};

export default PopularProducts;