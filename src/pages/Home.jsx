import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import TargetAudienceSection from '../components/TargetAudienceSection';

const Home = () => {
    return (


        <div>

            <header className=" text-white h-screen flex flex-col justify-center items-center relative">
                
                
                <div>
                <div className="text-4xl font-extrabold mb-4">Welcome to Task Manager</div>
                <p className="text-lg mb-8">Simplify your task management and boost productivity.</p>
                <Link to="/login">
                    <button className="bg-white text-gray-800 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                        Let's Explore
                    </button>
                </Link>

                </div>
                <div className='bg-black bg-cover opacity-60 bg-fixed absolute z-[-1] top-0 right-0 left-0 bottom-0'></div>
                <div className="bg-[url('/banner.avif')] bg-cover bg-no-repeat bg-fixed absolute z-[-2] top-0 right-0 left-0 bottom-0"></div>
            </header>
            <TargetAudienceSection></TargetAudienceSection>

        </div>

    );
};

export default Home;
