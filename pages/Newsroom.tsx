import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const initialFilters = ['All', 'Business', 'Campaigns', 'Editorials', 'Food delivery', 'Infographics'];
const moreFilters = ['Merchants', 'panda ads', 'pandago', 'Press Releases', 'Q-commerce', 'Riders', 'Tech'];

const newsItems = [
  { 
    id: '1', 
    title: 'foodpanda strengthens merchant care with record onboarding milestone in Asia', 
    tag: 'APAC', 
    date: '17.12.2025', 
    img: 'https://picsum.photos/seed/merchant_asia/800/600' 
  },
  { 
    id: '2', 
    title: 'foodpanda expands \'panda hearts\' programme, reports 30% drop in rider accidents across Asia', 
    tag: 'APAC', 
    date: '25.11.2025', 
    img: 'https://picsum.photos/seed/panda_hearts/800/600' 
  },
  { 
    id: '3', 
    title: 'foodpanda brings unmatched value to pandapro members with one-of-a-kind ride-hailing partnerships across Asia', 
    tag: 'APAC', 
    date: '21.11.2025', 
    img: 'https://picsum.photos/seed/pandapro_ride/800/600' 
  },
  { 
    id: '4', 
    title: 'foodpanda Singapore strengthens support for delivery partners through signed MOU with NDCA', 
    tag: 'SINGAPORE', 
    date: '25.04.2025', 
    img: 'https://picsum.photos/seed/mou_signing/800/600' 
  },
  { 
    id: '5', 
    title: 'foodpanda delivered 2024', 
    tag: 'APAC', 
    date: '31.01.2025', 
    img: 'https://picsum.photos/seed/panda_delivered/800/600' 
  },
  { 
    id: '6', 
    title: 'foodpanda Partners with Fiserv to Enable More Streamlined and Secure eCommerce Payments Across Asia', 
    tag: 'APAC', 
    date: '23.10.2024', 
    img: 'https://picsum.photos/seed/fiserv_payment/800/600' 
  },
  { 
    id: '7', 
    title: 'foodpanda Singapore launches inaugural Rider Safety Month in partnership with Traffic Police', 
    tag: 'SINGAPORE', 
    date: '07.10.2024', 
    img: 'https://picsum.photos/seed/safety_month/800/600' 
  },
  { 
    id: '8', 
    title: "foodpanda Malaysia launches 'Jejak Panda' to provide accessible income opportunities", 
    tag: 'MALAYSIA', 
    date: '13.08.2024', 
    img: 'https://picsum.photos/seed/jejak_panda/800/600' 
  },
  { 
    id: '9', 
    title: 'Finally, something in Yew Tee – foodpanda spices up Singapore’s "most dull" neighbourhood with unlimited free deliveries', 
    tag: 'SINGAPORE', 
    date: '12.08.2024', 
    img: 'https://picsum.photos/seed/yew_tee/800/600' 
  },
  { 
    id: '10', 
    title: 'foodpanda Philippines partners with Jia to extend support to partner vendors', 
    tag: 'PHILIPPINES', 
    date: '30.07.2024', 
    img: 'https://picsum.photos/seed/philippines_jia/800/600' 
  },
  { 
    id: '11', 
    title: 'foodpanda Singapore awards $10,500 in bursaries to delivery partners and their families', 
    tag: 'SINGAPORE', 
    date: '30.07.2024', 
    img: 'https://picsum.photos/seed/bursaries/800/600' 
  },
  { 
    id: '12', 
    title: 'foodpanda partners with Cybersource to drive business growth in Asia Pacific through enhanced customer checkout experience', 
    tag: 'APAC', 
    date: '25.07.2024', 
    img: 'https://picsum.photos/seed/cybersource/800/600' 
  },
];

export const Newsroom: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAllFilters, setShowAllFilters] = useState(false);

  const displayedFilters = showAllFilters ? [...initialFilters, ...moreFilters] : initialFilters;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-10 text-gray-800">Press Releases</h1>
        
        {/* Featured Article */}
        <div className="flex flex-col md:flex-row mb-24 h-auto md:h-[500px]">
            <div className="md:w-1/2 h-64 md:h-full">
                <img src="https://picsum.photos/seed/merchant_care/1200/800" className="w-full h-full object-cover" alt="Featured" />
            </div>
            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#F7F7F7]">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-panda font-bold uppercase tracking-widest text-sm">MERCHANTS</span>
                    <span className="text-gray-500 text-sm">17 Dec 2025</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800 hover:text-panda cursor-pointer transition-colors">
                    foodpanda strengthens merchant care with record onboarding milestone in Asia
                </h2>
            </div>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            <div className="w-full lg:w-1/4">
                <h3 className="text-3xl font-bold leading-tight text-gray-800">Discover<br />latest news</h3>
            </div>
            
            <div className="w-full lg:w-3/4 flex flex-col items-start lg:items-end gap-4">
                <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
                    {displayedFilters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`
                                px-6 py-2 rounded-full font-bold border transition-all duration-200 text-sm md:text-base
                                ${activeFilter === filter 
                                    ? 'bg-black text-white border-black' 
                                    : 'bg-white text-gray-800 border-black hover:bg-gray-100'}
                            `}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                
                <button 
                    onClick={() => setShowAllFilters(!showAllFilters)}
                    className="px-8 py-2 rounded-full border border-panda text-panda font-bold hover:bg-panda-light transition-colors text-sm md:text-base flex items-center gap-2"
                >
                    {showAllFilters ? 'Show less' : 'Show more'}
                </button>
            </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
            {newsItems.map(item => (
                <div key={item.id} className="group cursor-pointer flex flex-col h-full">
                    <div className="overflow-hidden rounded-2xl mb-6 h-64 w-full">
                         <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
                        />
                    </div>
                    <div className="flex flex-col flex-grow">
                        <span className="text-panda text-xs font-bold uppercase tracking-wider mb-3">{item.tag}</span>
                        <h3 className="text-2xl font-bold mb-4 leading-tight text-gray-900 group-hover:text-panda transition-colors">
                            {item.title}
                        </h3>
                        <div className="mt-auto pt-4">
                             <span className="text-gray-500 text-sm">{item.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 text-gray-500 font-bold text-sm md:text-base">
            <button className="w-10 h-10 rounded-full bg-gray-200 text-black flex items-center justify-center transition-colors">1</button>
            {[2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button key={num} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                    {num}
                </button>
            ))}
            <span className="px-2">...</span>
            <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">13</button>
        </div>
      </div>
    </div>
  );
};
