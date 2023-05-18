import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheakOut = () => {

    const service = useLoaderData();
    const {title, _id, price, img} = service;

    const { user } = useContext(AuthContext);

    const handleCheakOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const message = form.message.value;
        // console.log( firstName, lastName, email, phone)
        const order = {
            CustomerName : name,
            email,
            price,
            img,
            service_id: _id,
            service_title: title,
            date,
            message
        }
        form.reset()
        // console.log(order);
        fetch( 'http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId){
                alert('service book successful.')
            }
        })

    }

    return (
        <div className=" mb-32 mt-12">
            <h2 className="text-center text-xl font-semibold">Checkout</h2>
            <form onSubmit={handleCheakOut} className="card w-full shadow-2xl bg-[#F3F3F3] mt-8">
                <div className="card-body grid grid-cols-2 gap-5">
                    <div className="form-control">
                        <input type="text" name="name" defaultValue={user?.name} placeholder="Name" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="number" name="dueAmount" defaultValue={price} placeholder="Due Amount" className="input" />
                    </div>
                    <div className="form-control col-span-2">
                        <textarea name="message" cols="10" rows="10" placeholder="Your message" className="p-4 rounded-xl"></textarea>
                    </div>
                    <div className="form-control mt-6 col-span-2">
                        <button className="btn btn-warning">Order Confirm</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheakOut;