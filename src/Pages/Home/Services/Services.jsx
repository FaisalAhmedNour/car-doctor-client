import { useEffect, useState } from 'react';
import Service from './Service/Service';


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    console.log(services);

    return (
        <div className="text-center my-5">
            <h3 className='font-bold text-lg text-[#FF3811]'>Service</h3>
            <h1 className="text-5xl font-bold ">Our Service Area</h1>
            <p className="pt-6">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="grid grid-cols-3 gap-20 my-8">
                {
                    services.map(service => <Service 
                        key={service._id} 
                        service={service}
                    ></Service>)
                }
            </div>
            <button className="btn btn-outline btn-warning">More Services</button>
        </div>
    );
};

export default Services;