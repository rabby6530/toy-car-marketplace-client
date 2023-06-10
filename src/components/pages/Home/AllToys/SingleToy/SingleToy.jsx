import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const toyDetails = useLoaderData();
    const { name, email, photo, sellerName, price, quantity, rating, description } = toyDetails;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img  className="w-25 h-[300px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2> Seller Name:{sellerName}</h2>
                <p> Seller Email: {email}</p>
                <p>Price: {price}</p>
                <p> Available Quantity:{quantity}</p>
                <p> Rating:{rating}</p>
                <p> Description:{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;