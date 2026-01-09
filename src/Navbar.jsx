import  { useState } from 'react';
import {
  Download
} from 'lucide-react';

const Navbar = () => {
    
    const [isDownloadOpen, setIsDownloadOpen] = useState(false);

    async function redirectToWhatsapp() {
        const phonenumber = "919645994556"; // include country code, no '+' or spaces
        const message = encodeURIComponent("Hi, I need help");
        const url = `https://wa.me/${phonenumber}?text=${message}`;
        window.location.href = url;
      }
  return (
    <div className="overflow-x-hidden">
        <nav className="fixed w-full z-50 bg-gray-800/60 backdrop-blur-md border-b border-orange-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              
                <img
                  src="images/logo-no-bg-orange.png"
                  className="h-16 w-16 max-w-full"
                  alt="logo"
                />

              
              <span className="text-2xl font-bold text-orange-400 tracking-tight">Orbitracker</span>
            </div>
           
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-3">
              
              <a href="#about" className="text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline mr-7">About Us</a>
              <a href="#feature" className="text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline mr-7">Features</a>
              <a href="#footer" className="text-orange-400 visited:text-orange-400 hover:text-orange-500 font-medium no-underline mr-6">Contact Us</a>

              {/* Download with dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDownloadOpen(true)}
                onMouseLeave={() => setIsDownloadOpen(false)}
              >
                <button
                onClick={() => setIsDownloadOpen((s) => !s)}
                className="bg-[#e56d11] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#c05d11] transition shadow-lg shadow-emerald-600/20 focus:outline-none focus:ring-0 focus:border-none"
                type="button"
              >
                Download
                <span className="ml-2 text-white">{isDownloadOpen ? '▴' : '▾'}</span>
              </button>

                {isDownloadOpen && (
                  <div className="absolute right-0  w-44 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.tbtrack.gps"
                      className="block px-4 py-2 text-sm font-bold text-orange-400 hover:bg-gray-700 hover:text-white"
                    >
                      Android
                    </a>
                    <a
                      href="https://apps.apple.com/us/app/tb-track-vehicle-tracking/id1249657981" /* replace with real App Store link */
                      className="block px-4 py-2 text-sm font-bold text-orange-400 hover:bg-gray-700 hover:text-white"
                    >
                      ios
                    </a>
                  </div>
                )}
              </div>

              
                <a
                onClick={(e)=>{e.preventDefault(); redirectToWhatsapp();}}
                role="button"
                tabIndex={0}
                onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); redirectToWhatsapp(); } }}
                className="bg-green-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-600/20 cursor-pointer"
                type='button'
              >
                 Whatsapp
              </a>
              
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-3">
              {/* Mobile download toggle */}
              <button
                onClick={() => setIsDownloadOpen((s) => !s)}
                className="bg-[#e56d11] text-white px-4 py-[10px] rounded-xl font-medium hover:bg-[#c05d11] transition shadow-lg shadow-emerald-600/20 focus:outline-none focus:ring-0 focus:border-none"
                type="button"
              >
                <Download size={20}/>
              </button>
             {isDownloadOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.tbtrack.gps"
                      className="block px-4 py-2 text-sm font-bold text-orange-400"
                    >
                      Android
                    </a>
                    <a
                      href="https://apps.apple.com/us/app/tb-track-vehicle-tracking/id1249657981" /* replace with real App Store link */
                      className="block px-4 py-2 text-sm font-bold text-orange-400"
                    >
                      ios
                    </a>
                  </div>
                )}

              {/* WhatsApp Button (Mobile) */}
              <button
                onClick={(e)=>{e.preventDefault(); redirectToWhatsapp();}}
                className="bg-green-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-green-700 transition shadow-lg shadow-emerald-600/20"
                type="button"
              >
                Whatsapp
              </button>

              
            </div>

            </div>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar