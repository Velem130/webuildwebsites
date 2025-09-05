import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
  <section class="bg-gray-50 py-20 px-6 text-center">
  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight 
               text-transparent bg-clip-text bg-gradient-to-r 
               from-pink-600 via-orange-500 to-red-500 
               drop-shadow-sm leading-tight text-center p-8">
  We Design, Build & Maintain Websites
</h1>

  <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
    Your all-in-one solution for professional websites, branding, and 24/7 support.
  </p>

  <div class="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg">
      <h3 class="text-xl  text-pink-600 font-semibold ">Web Development</h3>
      <p class="mt-2 text-gray-600">Custom websites that load fast and look great.</p>
    </div>
    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg">
      <h3 class="text-xl font-semibold text-pink-600">Logo & Branding</h3>
      <p class="mt-2 text-gray-600">Unique logos and visual identities for your brand.</p>
    </div>
    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg">
      <h3 class="text-xl font-semibold text-pink-600">Maintenance</h3>
      <p class="mt-2 text-gray-600">Keep your site secure, updated, and running 24/7.</p>
    </div>
  </div>

  <div class="mt-10">
  
  <Link 
  to="/contact"
  className="bg-gradient-to-r from-pink-600 to-orange-500 text-white font-semibold 
             px-6 py-3 rounded-md hover:opacity-90 transition text-center"
>
  Come and meet us
  </Link>

  </div>
</section>
    
    </div>
  );
}

export default Hero;



