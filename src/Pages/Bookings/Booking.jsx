import { useState } from "react";

const Booking = ({ booking, handleDelete }) => {

    const [pending, setPending] = useState(true)

    console.log(booking)
    const { _id, img, service_title, price, date} = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-square w-12 h-12">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service_title}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="font-semibold">${price}</span>
            </td>
            <td className="font-semibold">{date}</td>
            <th>
                {
                pending ?
                    <button onClick={() => setPending(false)} className="btn btn-primary btn-xs">pending</button> :
                    <button className="btn btn-success btn-xs">done</button>
                }
            </th>
        </tr>
    );
};

export default Booking;