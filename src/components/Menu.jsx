import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="py-16 bg-white text-center px-4 md:px-8 lg:px-24">
      <h2 className="text-4xl font-bold text-black mb-6">Why We Do It</h2>

      <p className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent text-lg leading-relaxed mb-4">
        At WebCrafters, we believe that every business deserves a strong online presence.
        We're passionate about empowering brands to tell their story through clean,
        modern websites that are both functional and visually appealing.
      </p>

      <p className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent text-lg leading-relaxed mb-8">
        We do this because we love solving real-world problems with creative digital solutions.
        Whether it's a startup looking for identity or a growing company needing scalable infrastructure,
        we’re here to help turn ideas into impactful experiences.
      </p>

      {/* Call to Action Button */}
     
       <Link 
          to="/contact"
          className="bg-gradient-to-r from-pink-600 to-orange-500 text-white font-semibold 
             px-6 py-3 rounded-md hover:opacity-90 transition text-center"
>
             Let Build Your Website
       </Link>
    </section>
  );
};

export default Menu;


