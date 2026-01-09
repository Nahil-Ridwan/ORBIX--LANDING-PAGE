import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const images = [
    'images/white-truck-crossing-bridge-sunset-urban-logistics-motion.jpg',
    'images/truck-with-white-trailer-drives-down-road-with-mountains-background.jpg'
  ];

  const text = [
  {
    kicker: "WELCOME TO ORBITRACKER",
    line1: "Experience peace of",
    line2: "mind on every journey",
  },
  {
    kicker: "SMART GPS SOLUTIONS",
    line1: "Seamlessly connecting",
    line2: "you to your vehicles",
  },
];


  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
  id="home"
  className="relative min-h-[100svh] text-slate-800 flex items-center justify-start overflow-hidden"
>

      {/* Background images with fade transition */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === bgIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Dim overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Caption only — no headings */}
      <section className="relative w-full z-10">
        <div className="w-full px-6 sm:px-8 lg:px-12 relative text-left font-bold">
          <div className="relative h-40 md:h-48 lg:h-52 mt-6 w-full max-w-3xl">
  {text.map((item, idx) => (
    <div
      key={idx}
      className={`absolute inset-0 transition-opacity duration-700 ${
        idx === bgIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={idx === bgIndex ? 'false' : 'true'}
    >
      {/* Small intro line */}
      <p className="text-lg uppercase leading-10 tracking-widest text-slate-300 mb-3">
        {item.kicker}
      </p>

      {/* Main headline */}
      <h1 className="font-extrabold tracking-tight leading-10 text-slate-100 leading-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-[44px]">
        {item.line1}
        <br />
        <span className="text-slate-200 leading-10">
          {item.line2}
        </span>
      </h1>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-400 hover:bg-orange-500/6- text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Hero;