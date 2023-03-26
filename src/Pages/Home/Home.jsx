import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from "../../hooks/useTitle";
import Products from './Products/Products';

const Home = () => {

    useTitle("Home")
    // const { data: products = [], isLoading } = useQuery()
    

    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://hand-change.vercel.app/products`, {
                headers: {
                    authoraiton: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <div>
                <Products products={products} />
            </div>
            <div>
                <div className="hero min-h-screen bg-gray-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='rounded-lg' src="/securepayment.png" alt='' />
                        <div>
                            <h1 className="text-5xl font-bold">All Your Information is secured</h1>
                            <p className="py-6">All of your information is secured and encrypted. We dont store your payment data. We take your payment data temporary for transection.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;