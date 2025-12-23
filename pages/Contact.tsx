import React from 'react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
    return (
        <div>
            {/* Hero */}
            <section className="relative h-[400px] md:h-[400px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="../assets/contact/hero.webp"
                        alt="Partner Hero"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex items-end pb-4 lg:pb-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">Contact us</h1>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-2xl font-bold mb-10 text-black">Contact form</h2>

                    <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                        {/* Form Column */}
                        <div className="w-full md:w-1/2 lg:w-5/12">
                            <form className="space-y-6">
                                <div>
                                    <label className="block font-bold text-black mb-2">Name *</label>
                                    <div className="flex gap-4">
                                        <div className="w-1/2">
                                            <input
                                                type="text"
                                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-panda focus:ring-1 focus:ring-panda transition-colors"
                                            />
                                            <span className="text-xs text-gray-500 mt-1 block">First</span>
                                        </div>
                                        <div className="w-1/2">
                                            <input
                                                type="text"
                                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-panda focus:ring-1 focus:ring-panda transition-colors"
                                            />
                                            <span className="text-xs text-gray-500 mt-1 block">Last</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-bold text-black mb-2">Email *</label>
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-panda focus:ring-1 focus:ring-panda transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold text-black mb-2">Your message *</label>
                                    <textarea
                                        rows={6}
                                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-panda focus:ring-1 focus:ring-panda transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <Button type="button" size="md" className="rounded-full px-10 py-3 font-bold bg-panda hover:bg-panda-hover text-white shadow-sm">
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Mascot Column */}
                        <div className="w-full md:w-1/2 lg:w-7/12 flex items-center justify-center">
                            <div className="relative w-full max-w-lg">
                                <img
                                    src="../assets/contact/contact.webp"
                                    className="w-full h-auto object-contain"
                                    alt="Panda Mascot"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Help Center Info */}
            <section className="py-24 bg-[#F7F7F7] text-center">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="space-y-1">
                        <p className="text-lg text-gray-800">Got a question about your order?</p>
                        <p className="text-lg text-gray-800">Need help with some of your app features?</p>
                        <p className="text-lg text-gray-800 pt-2">
                            Contact <span className="font-bold">Help Centre</span> via <span className="font-bold">app</span> menu.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
