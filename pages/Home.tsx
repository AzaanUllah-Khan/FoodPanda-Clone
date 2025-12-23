import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const pressReleases = [
  {
    id: 1,
    type: 'image',
    tag: 'Press Releases',
    img: '../Assets/Home/carousel1.jpg',
    title: 'Memorandum of Understanding Signing',
    date: '25.04.2025'
  },
  {
    id: 2,
    type: 'image',
    tag: 'Business',
    img: '../Assets/Home/carousel2.jpg',
    title: 'foodpanda delivered 2024',
    date: '31.01.2025'
  },
  {
    id: 3,
    type: 'image',
    tag: 'Business',
    img: '../Assets/Home/carousel3.jpg',
    title: 'foodpanda Partners with Fiserv to Enable More Streamlined and Secure eCommerce Payments Across Asia',
    date: '23.10.2024'
  },
  {
    id: 4,
    type: 'image',
    tag: 'Press Releases',
    img: '../Assets/Home/carousel4.jpg',
    title: 'foodpanda Singapore launches inaugural Rider Safety Month in partnership with Traffic Police',
    date: '07.10.2024'
  },
  {
    id: 5,
    type: 'image',
    tag: 'Press Releases',
    img: '../Assets/Home/carousel5.jpg',
    title: "foodpanda Malaysia launches 'Jejak Panda' to provide accessible income opportunities",
    date: '13.08.2024'
  },
];

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video width="100%"
            poster="../Assets/Home/video-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            style={{objectFit:'cover',objectPosition:'bottom'}}
          >
            <source src="../Assets/Home/HeroVideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight drop-shadow-lg">
            food<br /> and groceries<br />in a tap
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white text-left">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            We're here to help you<br />live life the panda way.<br />Spend more time doing what you<br />love – we'll take care of tasty meals,<br />fresh groceries and new flavours.
          </h2>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="py-12 bg-panda-light/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img src="../Assets/Home/section 1.webp" alt="App Preview" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the next generation of delivery!</h2>
              <p className="text-gray-600 mb-8 text-lg">
                What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe.
              </p>
              <Link to="/about">
                <Button size="lg">About</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Convenience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Taste the convenience.</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download foodpanda now.
              </p>
              <div className="flex flex-wrap gap-2">
                <img src="../Assets/Home/app-apple.png" alt="app-store" />
                <img src="../Assets/Home/app-google.png" alt="google-play" />
                <img src="../Assets/Home/app-huawei.png" alt="appgallery" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src="../Assets/Home/section 2.webp" alt="Convenience" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Careers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img src="../Assets/Home/section 3.webp" alt="Careers" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Find the job you'd love</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Hungry to make a difference? There's a seat at our table!
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda.
              </p>
              <Button size="lg">Join us!</Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Have you heard?</h2>
            <p className="text-dark text-lg max-w-3xl mx-auto">The industry is changing fast! Stay up to date with foodpanda press. Catch up on the latest news, updates and reports here.</p>
          </div>

          <div className="
                flex gap-5 overflow-x-auto pb-8 
                snap-x snap-mandatory 
                [&::-webkit-scrollbar]:h-0
                px-4
            ">
            {pressReleases.map(item => (
              <div
                key={item.id}
                className={`
                            w-3 md:min-w-[325px] h-[500px] 
                            relative rounded-3xl overflow-hidden 
                            group cursor-pointer snap-start shadow-sm
                            flex-shrink-0
                            bg-gray-200
                        `}
              >
                {item.type === 'image' && (
                  <>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 object-left" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent" />
                  </>
                )}

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-white text-sm font-bold uppercase tracking-wider mb-3 opacity-90">{item.tag}</span>
                  <h3 className="text-white text-3xl font-bold mb-4 leading-tight">{item.title}</h3>
                  <p className="text-gray-200 text-sm font-medium">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Feed your team.</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Treat your talented team to their favourite meals. Let them pick! Explore flexible corporate food delivery options and tasty employee perks.
              </p>
              <Button size="lg">Explore</Button>
            </div>
            <div className="w-full md:w-1/2">
              <img src="../Assets/Home/section 4.webp" alt="Convenience" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
