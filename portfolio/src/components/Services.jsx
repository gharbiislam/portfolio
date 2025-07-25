import React, { useState } from 'react';
import { FaTimes, FaCode, FaPaintBrush, FaPencilRuler } from 'react-icons/fa';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='container mx-auto px-4 sm:px-8  h-screen flex flex-col justify-center ' id='services'>
            <h2 className='text-4xl font-bold text-teal-900 mb-12'>My Services</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* UI/UX Design Card */}
                <div className='border-2 border-teal-800 rounded-2xl p-6  bg-white shadow-md abosolute'>
                    <div className='flex items-center gap-3 mb-10'>
                        <FaPaintBrush className='text-3xl text-teal-700 ' />
                        <h4 className='text-xl font-semibold text-gray-800'>UI/UX Designer</h4>
                    </div>
                    <p className='text-gray-600 '>Designing smooth and engaging user experiences.</p>
                    <button onClick={() => toggleTab(1)} className='text-teal-700 font-medium hover:underline'>Read more</button>

                    {toggleState === 1 && (
                        <div className="fixed inset-0 bg-teal-900 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="absolute  h-[300px] bg-white border-teal-900 border-2 rounded-xl flex flex-col justify-center items-center p-4">
                                <span className='text-xl font-bold  mb-4'>UI/UX Designser</span>
                                <ul className='list-disc list-inside space-y-2 text-gray-700'>
                                    <li>I create compelling and user-centered designs that enhance engagement and drive results.</li>
                                    <li>I build intuitive interfaces that seamlessly blend aesthetics with functionality.</li>
                                    <li>I design strategic user experiences tailored to real user needs and business goals.</li>
                                    <li>I craft digital products focused on usability and meaningful interaction.</li>
                                </ul>
                                <button onClick={() => toggleTab(0)} className='absolute top-3 right-3 text-teal-800 text-xl'>
                                    <FaTimes />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Front-End Developer Card */}
                <div className='border-2 border-teal-800 rounded-2xl p-6  bg-white shadow-md relative'>
                    <div className='flex items-center gap-3 mb-10'>
                        <FaCode className='text-3xl text-teal-700' />
                        <h4 className='text-xl font-semibold text-gray-800'>Front-End Development</h4>
                    </div>
                    <p className='text-gray-600 '>Building responsive and modern websites with clean code.</p>
                    <button onClick={() => toggleTab(2)} className='text-teal-700 font-medium hover:underline'>Read more</button>

                    {toggleState === 2 && (
                        <div className="fixed inset-0 bg-teal-900 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="absolute  h-[300px] bg-white border-teal-900 border-2 rounded-xl flex flex-col justify-center items-center p-4">
                                <span className='text-xl font-bold  mb-4'>Front-End Development</span>
                                <ul className='list-disc list-inside space-y-2 text-gray-700'>
                                    <li>I develop responsive front-end websites optimized for performance and accessibility.</li>
                                    <li>I build scalable and maintainable front-end solutions that bring designs to life with precision.</li>
                                    <li>I create seamless interfaces using modern technologies for smooth user interactions.</li>
                                    <li>I engineer pixel-perfect experiences that adapt across all devices.</li>
                                </ul>
                                <button onClick={() => toggleTab(0)} className='absolute top-3 right-3 text-teal-800 text-xl'>
                                    <FaTimes />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Branding Designer Card */}
                <div className='border-2 border-teal-800 rounded-2xl p-6  bg-white shadow-md relative'>
                    <div className='flex items-center gap-3 mb-10'>
                        <FaPencilRuler className='text-3xl text-teal-700' />
                        <h4 className='text-xl font-semibold text-gray-800'>Branding & Logo</h4>
                    </div>
                    <p className='text-gray-600'>Designing unique logos and brand visuals that stand out.</p>
                    <button onClick={() => toggleTab(3)} className='text-teal-700 font-medium hover:underline'>Read more</button>

                    {toggleState === 3 && (
                        <div className="fixed inset-0 bg-teal-900 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="absolute  h-[300px] bg-white border-teal-900 border-2 rounded-xl flex flex-col justify-center items-center p-4">
                                <span className='font-bold text-xl mb-4'> Branding Designer </span>
                                <ul className='list-disc list-inside space-y-2 text-gray-700'>
                                    <li>I design distinctive logos that reflect your brand’s identity.</li>
                                    <li>I craft visual marks that convey professionalism and recognition.</li>
                                    <li>I develop cohesive brand systems to differentiate your presence.</li>
                                    <li>I create impactful elements that express your brand’s core values.</li>
                                </ul>
                                <button onClick={() => toggleTab(0)} className='absolute top-3 right-3 text-teal-800 text-xl'>
                                    <FaTimes />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
