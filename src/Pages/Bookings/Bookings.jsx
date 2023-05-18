import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Booking from "./Booking";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email:${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data);
            })
    }, [])

    const handleDelete = id => {
        const process = confirm('Delete successful.')
        if (process) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                })
        }
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full my-10">
                <tbody>
                    {
                        bookings.map(booking => <Booking
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                        ></Booking>)
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Continue Shopping</th>
                        <th></th>
                        <th className="col-span-2 text-right">Clear Shopping Cart</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default Bookings;