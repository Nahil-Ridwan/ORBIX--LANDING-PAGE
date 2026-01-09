import  { useState } from 'react';
import {
  Mountain,
  MessageCircle,
  Instagram,
  Twitter,
  Download,
  MapPin,
  Mail,
  PhoneCall,
  CalendarClock,
} from 'lucide-react';

const Footer = () => {

  async function redirectToWhatsapp() {
    const phonenumber = "919645994556"; // include country code, no '+' or spaces
    const message = encodeURIComponent("Hi, I need help");
    const url = `https://wa.me/${phonenumber}?text=${message}`;
    window.location.href = url;
  }
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div id="footer">
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-0 mb-4 text-orange-400">
                <img src="images\logo-no-bg-orange.png" alt="" className='size-18 '/>
                <span className="text-2xl font-bold">Orbitracker</span>
              </div>
              <p className="text-slate-400 text-sm max-w-xs mb-6">
                 Explore Orbitracker for state-of-the-art GPS solutions. From real-time vehicle tracking to remote immobilization, we
                 offer unparalleled services tailored to your needs
              </p>
              <div className="flex gap-4">
                <a onClick={(e)=>{e.preventDefault(); redirectToWhatsapp();}} className="hover:text-white transition"><MessageCircle size={20}/></a>
                <a href="https://www.instagram.com/orbitracker?igsh=N3dpOWJvZTMyZjNh" className="hover:text-white transition"><Instagram size={20}/></a>
                <div
                className="relative"
                onMouseEnter={() => setIsDownloadOpen(true)}
                onMouseLeave={() => setIsDownloadOpen(false)}
              >
                <a
                  type="button"
                  onClick={() => setIsDownloadOpen((s) => !s)}
                  className="hover:text-white transition"
                  aria-expanded={isDownloadOpen}
                >
                  <Download size={20}/>
                </a>

                {isDownloadOpen && (
                  <div className="absolute left-0  w-44 bg-gray-800 rounded-md shadow-lg py-1 z-50">
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
              </div>
            </div>
           
            <div className='col-span-2 lg:col-span-2'>
              <h4 className="text-orange-400 font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className='flex items-center gap-2'>
                  <MessageCircle className='size-5'/><a href="#" onClick={(e)=>{e.preventDefault(); redirectToWhatsapp();}} className="hover:text-white transition">+91 9645 994 556</a>
                </li>
                <li className='flex items-center gap-2'><Mail className='size-5'/><a href="mailto:support@orbixgps.com" className="hover:text-white transition">support@orbixgps.com</a></li>
                <li className='flex items-center gap-2'><Instagram className='size-5'/><a href="https://www.instagram.com/orbitracker?igsh=N3dpOWJvZTMyZjNh" className="hover:text-white transition">@orbitracker</a></li>
                <li className='flex items-center gap-2'><MapPin className='size-5'/><a href="https://maps.app.goo.gl/cYQCyB1VW9dBg1K38" className="hover:text-white transition">Orbix GPS Solution Calicut , Kerala, India</a></li>
                <li className='flex items-center gap-2'><CalendarClock className='size-5'/><a href="https://maps.app.goo.gl/cYQCyB1VW9dBg1K38" className="hover:text-white transition"> Opening Hours: Monday to Saturday
                  9:00 AM to 7:00 PM</a></li>
              </ul>
            </div>

            

            <div>
              <h4 className="text-orange-400 font-bold mb-4">Telephone</h4>
              <ul className="space-y-2 text-sm">
                <li className='flex items-center gap-2'><PhoneCall className='size-5'/><a href="tel:+919645994556" className="hover:text-white transition">+91 9645 994 556</a></li>
                <li className='flex items-center gap-2'><PhoneCall className='size-5'/><a href="tel:+918891431277" className="hover:text-white transition">+91 8891 431 277</a></li>
               
              </ul>
            </div>
          </div>
         
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <div>Copyright © 2025 Orbix GPS Solution. All Rights Reserved</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;
