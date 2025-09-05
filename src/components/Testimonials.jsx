import React from 'react';

const testimonials = [
  {
    name: "Hassan Kassageto",
    title: "Startup Founder",
    quote: "WebCrafters transformed our online presence. The website is fast, beautiful, and exactly what we needed.",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "David Chen",
    title: "Marketing Manager",
    quote: "Working with WebCrafters was seamless. They truly understood our brand and delivered amazing results.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Abdou Rahman Johnson",
    title: "Photographer",
    quote: "Their design sense is top-tier. I love how my portfolio looks — so clean and professional!",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
  {
    name: "Liam O'Brien",
    title: "Tech Consultant",
    quote: "Reliable, efficient, and creative. I’ve recommended WebCrafters to three other clients already.",
    avatar: "https://i.pravatar.cc/100?img=14",
  },
  {
    name: "Aisha Al-Fulan",
    title: "Nonprofit Director",
    quote: "Our donation portal and info site were up and running in no time — beautifully done and easy to manage.",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Carlos Ramirez",
    title: "E-commerce Owner",
    quote: "WebCrafters nailed the user experience. Sales are up and customer feedback has been incredible.",
    avatar: "https://i.pravatar.cc/100?img=16",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg"
          >
            <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>

            <div className="flex items-center space-x-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-pink-500"
              />
              <div>
                <p className="font-semibold text-pink-600">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

