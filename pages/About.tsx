import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const about: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeValue, setActiveValue] = useState('plan for tomorrow, focus on today');

  const slides = [
    {
      title: 'Customers come first',
      text: "We’re far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of our business. Download the app to experience true convenience.",
      image: '../assets/about/c1.webp'
    },
    {
      title: 'Our riders are our heroes',
      text: "We're here to provide exciting opportunities and empower work flexibility. Learn more about our riders' journey or sign up to become one. Our riders are the backbone of our delivery network, ensuring smiles with every order.",
      image: '../assets/about/c2.webp'
    },
    {
      title: 'Partnering for success',
      text: "We help restaurants and shops reach more customers and increase sales through our platform. Whether you're a small family business or a large chain, foodpanda provides the tools and support you need to thrive in the digital economy.",
      image: '../assets/about/c3.webp'
    }
  ];

  const valuesData = [
    {
      id: 'prioritise, decide, deliver',
      title: 'prioritise, decide, deliver',
      description: "We focus on what matters most. We make decisions swiftly and execute with precision to deliver value to our stakeholders. We cut through complexity to get things done.",
      image: '../assets/about/v1.webp' 
    },
    {
      id: 'start with customer, end with customer',
      title: 'start with customer, end with customer',
      description: "We want our consumers, vendors, riders, employees (including prospective ones) – the customers who make up our ecosystem – to keep coming back to the product, service, and experience we create.",
      image: '../assets/about/v2.webp' 
    },
    {
      id: 'own it end-to-end',
      title: 'own it end-to-end',
      description: "We take full responsibility for our actions and outcomes. From the initial idea to the final result, we own every step of the process and ensure quality throughout.",
      image: '../assets/about/v3.webp' 
    },
    {
      id: 'challenge the status quo',
      title: 'challenge the status quo',
      description: "We never settle for 'good enough'. We constantly look for ways to improve, innovate, and disrupt the industry to serve our customers better. We are not afraid to take risks.",
      image: '../assets/about/v4.webp' 
    },
    {
      id: 'we before me',
      title: 'we before me',
      description: "We are one team. We support each other, share knowledge, and work together towards our common goals. Success is a team effort and we celebrate it together.",
      image: '../assets/about/v5.webp' 
    },
    {
      id: 'plan for tomorrow, focus on today',
      title: 'plan for tomorrow, focus on today',
      description: "Our environment is ever-changing and we meet these changes head-on by adopting a progress-driven mindset. We value diverse inputs, we push the envelope to open up possibilities for innovation, growth and ultimately staying ahead – for our customers, for foodpanda, and ourselves.",
      image: '../assets/about/v6.webp' 
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const selectedValueContent = valuesData.find(v => v.id === activeValue) || valuesData[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] md:h-[400px]">
        <img src="../assets/about/hero-image.webp" alt="Riders" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-4 lg:pb-8">
             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                about<br />foodpanda
             </h1>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 text-black leading-tight tracking-tight">
                    From food delivery to your<br className="hidden md:block" /> daily convenience companion.
                </h2>
                <div className="space-y-8 text-lg text-gray-900 leading-relaxed">
                    <p>
                        A subsidiary of Delivery Hero, foodpanda launched in Singapore in 2014 as a food delivery platform. Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of customers in APAC.
                    </p>
                    <p>
                        Powered by tech and operational excellence, foodpanda has been growing its quick-commerce footprint in more than 400 cities across 11 markets in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar.
                    </p>
                    <p>
                        Thanks to dedicated partners, riders, and a team united by shared values, foodpanda is now providing millions with a convenient way to get food and groceries in a few taps.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-[#F7F7F7] py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            
            {/* Text Content */}
            <div className="w-full md:w-5/12 flex flex-col justify-center">
              <div className="transition-opacity duration-300 ease-in-out">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black tracking-tight leading-tight">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                  {slides[currentSlide].text}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-6">
                <button 
                  onClick={prevSlide} 
                  className="text-panda hover:text-panda-hover transition-colors focus:outline-none"
                  aria-label="Previous slide"
                >
                  <ArrowLeft size={32} />
                </button>
                
                <div className="flex gap-4">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-black scale-110' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide} 
                  className="text-panda hover:text-panda-hover transition-colors focus:outline-none"
                  aria-label="Next slide"
                >
                  <ArrowRight size={32} />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-7/12">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-sm">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold mb-16 text-dark">Our values</h2>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 mb-24 max-w-4xl mx-auto">
                {valuesData.map((val) => (
                    <button
                        key={val.id}
                        onClick={() => setActiveValue(val.id)}
                        className={`
                            px-6 py-2 rounded-full font-bold text-sm md:text-base border transition-all duration-300
                            ${activeValue === val.id 
                                ? 'bg-black text-white border-black' 
                                : 'bg-white text-panda border-panda hover:bg-panda-light'}
                        `}
                    >
                        {val.id}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-16 text-left max-w-6xl mx-auto animate-in fade-in duration-500">
                <div className="md:w-1/2">
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                        {selectedValueContent.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {selectedValueContent.description}
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                     <div className="relative w-full max-w-md aspect-square">
                        <img 
                            src={selectedValueContent.image} 
                            className="w-full h-full object-contain" 
                            alt={selectedValueContent.title} 
                        />
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="bg-[#F7F7F7] py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2 flex flex-col items-start">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
                        Join the panda team!
                    </h2>
                    <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                        Hungry for growth? There’s a seat at our table! We’re looking for the best in tech, marketing, sales, logistics, account management and more. Explore career opportunities at foodpanda now.
                    </p>
                    <Button size="lg" className="rounded-full text-white hover:bg-panda-hover">
                        view jobs
                    </Button>
                </div>
                <div className="w-full md:w-1/2">
                    <img 
                        src="../assets/about/Last Section.webp" 
                        className="w-full h-auto object-cover" 
                        alt="Join the team" 
                    />
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};
