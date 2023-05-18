import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const {_id, img, title, price} = service;

    return (
        <div className="card w-96 glass  px-3">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between align-middle text-[#FF3811]">
                    <h3>Price : $<span>{price}</span></h3>
                    <Link to={`/cheakout/${_id}`}>
                        <button><FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;