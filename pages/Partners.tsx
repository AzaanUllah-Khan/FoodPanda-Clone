import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ChevronRight, User, FileText, Bike, Wallet } from 'lucide-react';

export const Partners: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState('Philippines');

  const countries = [
    'Malaysia', 'Philippines', 'Bangladesh', 'Hong Kong', 'Pakistan', 'Singapore', 'Taiwan', 'Cambodia', 'Laos', 'Myanmar'
  ];

  const steps = [
    {
      id: 1,
      icon: <div className="bg-[#FFEBEE] p-4 rounded-full"><User size={32} className="text-[#D70F64]" /></div>,
      desc: 'The customer adds their delivery address in the app or on the website and then selects a store or restaurant in their area.'
    },
    {
      id: 2,
      icon: <div className="bg-[#FCE4EC] p-4 rounded-full"><FileText size={32} className="text-[#D70F64]" /></div>,
      desc: 'You accept the order with the reading tablet and prepare it for the collection time.'
    },
    {
      id: 3,
      icon: <div className="bg-[#E0F2F1] p-4 rounded-full"><Bike size={32} className="text-[#00695C]" /></div>,
      desc: 'A rider will come to you at the specified time and collect the order. It is then delivered directly to the customer!'
    },
    {
      id: 4,
      icon: <div className="bg-[#F8BBD0] p-4 rounded-full"><Wallet size={32} className="text-[#C2185B]" /></div>,
      desc: 'Twice per month you receive payments for the orders you have received via foodora. You automatically receive a basis for the deposit and a detailed insight into your sales statistics.'
    },
  ];

  const countryContent: Record<string, { title: string; desc: string; cta: string; img: string }> = {
    'Malaysia': {
      title: 'Are you ready to reach more customers?',
      desc: 'Don’t miss out on earnings. Join foodpanda to reach more customers and increase revenue.',
      cta: 'Let’s get started!',
      img: 'https://picsum.photos/seed/malaysia_market/800/600'
    },
    'Philippines': {
      title: 'Are you ready to expand your reach and connect with new customers?',
      desc: 'Let more customers find you. Partner with foodpanda and increase online visibility.',
      cta: 'Get Started',
      img: 'https://picsum.photos/seed/sizzling_sisig/800/600'
    },
    'Bangladesh': {
      title: 'Ready to expand your reach to more customers?',
      desc: 'Don’t just serve locals, serve your city. Let foodpanda connect you to new customers.',
      cta: 'Get Started',
      img: 'https://picsum.photos/seed/bangladesh_grill/800/600'
    },
    'Hong Kong': {
      title: 'Would you like to increase your customer base and brand reach?',
      desc: 'foodpanda’s campaigns and offers puts your restaurant in front of thousands of customers.',
      cta: 'Get started!',
      img: 'https://picsum.photos/seed/hongkong_shop/800/600'
    },
    'Pakistan': {
      title: 'Ready to expand your reach?',
      desc: 'Don’t miss out on earnings. Join foodpanda to reach more customers and increase revenue.',
      cta: 'Get started now!',
      img: 'https://picsum.photos/seed/pakistan_roti/800/600'
    },
    'Singapore': {
      title: 'Are you ready to reach new customers?',
      desc: 'Boost your profits. Get more orders and better margins when you partner with foodpanda.',
      cta: 'Sign Up Now',
      img: 'https://picsum.photos/seed/sushi_plate/800/600'
    },
    'Taiwan': {
      title: 'Would you like to boost customer reach and revenue?',
      desc: 'Don’t miss out on earnings. Join foodpanda to reach more customers and increase revenue.',
      cta: 'Start now!',
      img: 'https://picsum.photos/seed/taiwan_market/800/600'
    },
    'Cambodia': {
      title: 'Looking to grow your business with your customers?',
      desc: 'Don’t wait – Sign up now to start growing your business with deliveries!',
      cta: 'Get Started Now!',
      img: 'https://picsum.photos/seed/cambodia_food/800/600'
    },
    'Laos': {
      title: 'Partner with us to grow your business',
      desc: 'Reach more customers and deliver happiness with foodpanda.',
      cta: 'Get Started',
      img: 'https://picsum.photos/seed/laos_food/800/600'
    },
    'Myanmar': {
      title: 'Expand your business with foodpanda',
      desc: 'Join the leading food delivery platform in Myanmar.',
      cta: 'Join now',
      img: 'https://picsum.photos/seed/myanmar_food/800/600'
    }
  };

  const activeContent = countryContent[activeCountry];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src="https://picsum.photos/seed/street_food_market/1920/1080" 
                alt="Partner Hero" 
                className="w-full h-full object-cover" 
            />
             {/* Gradient overlay to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Get more orders with<br />
            with foodpanda
          </h1>
          <Button size="lg" className="bg-panda hover:bg-panda-hover text-white font-bold px-8 py-3 rounded-lg">
            Become a Partner!
          </Button>
        </div>
      </section>

      {/* Intro (Section 2) */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black tracking-tight">
                Become a restaurant or local shop partner
            </h2>
            <p className="text-gray-700 mb-0 text-lg leading-relaxed max-w-4xl mx-auto">
                Take your business to new heights by partnering with foodpanda, the leading delivery service trusted by businesses large and small. We dare to always go further, helping you reach untapped customer bases, boost order volume, and drive more sales.
            </p>
        </div>
      </section>

      {/* Expand Reach (Section 3 - Interactive) */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
            
            {/* Country Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-16 md:mb-24">
                {countries.map(c => (
                    <button 
                        key={c} 
                        onClick={() => setActiveCountry(c)}
                        className={`
                            px-6 py-2 rounded-full font-bold border transition-colors duration-200 select-none
                            ${activeCountry === c 
                                ? 'bg-black text-white border-black' 
                                : 'bg-white text-panda border-panda hover:bg-panda-light'}
                        `}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* Dynamic Content */}
            <div key={activeCountry} className="flex flex-col md:flex-row items-center gap-16 lg:gap-24 animate-in fade-in duration-500">
                <div className="md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black leading-tight tracking-tight">
                        {activeContent.title}
                    </h2>
                    <p className="text-gray-700 mb-8 text-lg">
                        {activeContent.desc}
                    </p>
                    <Button size="lg" className="rounded-xl px-8 font-bold">{activeContent.cta}</Button>
                </div>
                <div className="md:w-1/2">
                    <div className="rounded-md overflow-hidden shadow-lg">
                         <img 
                            src={activeContent.img} 
                            alt={activeCountry} 
                            className="w-full h-auto object-cover transform hover:scale-105 transition duration-700" 
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">Why partner with foodpanda?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* Card 1 */}
                 <div className="relative h-[480px] rounded-lg overflow-hidden group cursor-pointer">
                     <img src="https://picsum.photos/seed/indian_woman_tablet/600/900" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Reach New Customers" />
                     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
                     <div className="absolute inset-0 p-8">
                         <h3 className="text-white text-3xl font-bold uppercase leading-tight drop-shadow-md">
                             REACH NEW<br/>CUSTOMERS
                         </h3>
                     </div>
                 </div>
                 {/* Card 2 */}
                 <div className="relative h-[480px] rounded-lg overflow-hidden group cursor-pointer">
                     <img src="https://picsum.photos/seed/delivery_stairs/600/900" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Boost Volume" />
                     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
                     <div className="absolute inset-0 p-8">
                         <h3 className="text-white text-3xl font-bold uppercase leading-tight drop-shadow-md">
                             BOOST YOUR<br/>ORDER VOLUME
                         </h3>
                     </div>
                 </div>
                 {/* Card 3 */}
                 <div className="relative h-[480px] rounded-lg overflow-hidden group cursor-pointer">
                     <img src="https://picsum.photos/seed/panda_rider_pink/600/900" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Drive Sales" />
                     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
                     <div className="absolute inset-0 p-8">
                         <h3 className="text-white text-3xl font-bold uppercase leading-tight drop-shadow-md">
                             DRIVE MORE<br/>SALES
                         </h3>
                     </div>
                 </div>
                 {/* Card 4 */}
                 <div className="relative h-[480px] rounded-lg overflow-hidden group cursor-pointer">
                     <img src="https://picsum.photos/seed/woman_eating_happy/600/900" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Customer Satisfaction" />
                     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
                     <div className="absolute inset-0 p-8">
                         <h3 className="text-white text-3xl font-bold uppercase leading-tight drop-shadow-md">
                             INCREASE<br/>CUSTOMER<br/>SATISFACTION
                         </h3>
                     </div>
                 </div>
              </div>
          </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold mb-20 text-center text-black">How does it work?</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
                {steps.map(step => (
                    <div key={step.id} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center h-full hover:shadow-md transition-shadow">
                        <div className="mb-6">
                           {step.icon}
                        </div>
                        <div className="mb-4">
                            <span className="text-3xl font-bold text-black">{step.id}</span>
                        </div>
                        <p className="text-gray-700 font-semibold leading-relaxed text-sm">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Links */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
                    Have more questions? Check it out here
                </h2>
                <div className="border-t border-gray-200">
                    <button className="w-full flex justify-between items-center py-6 border-b border-gray-200 hover:text-panda transition-colors group text-left">
                        <span className="font-bold text-lg text-black group-hover:text-panda">How can I receive orders?</span>
                        <ChevronRight className="text-black group-hover:text-panda group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full flex justify-between items-center py-6 border-b border-gray-200 hover:text-panda transition-colors group text-left">
                        <span className="font-bold text-lg text-black group-hover:text-panda">Are there any costs if I register on the site?</span>
                        <ChevronRight className="text-black group-hover:text-panda group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full flex justify-between items-center py-6 border-b border-gray-200 hover:text-panda transition-colors group text-left">
                        <span className="font-bold text-lg text-black group-hover:text-panda">What are the opening hours like?</span>
                        <ChevronRight className="text-black group-hover:text-panda group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
