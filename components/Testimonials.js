import React from 'react';

const testimonialsData = [
  {
    name: 'John Doe',
    image: '/path-to-image1.jpg', // Replace with actual image path
    review: 'This platform is fantastic! It has improved our productivity by 50%. Highly recommend it to everyone.',
  },
  {
    name: 'Jane Smith',
    image: '/path-to-image2.jpg', // Replace with actual image path
    review: 'A game-changer for our business. The support team is always there to help when needed!',
  },
  {
    name: 'Michael Brown',
    image: '/path-to-image3.jpg', // Replace with actual image path
    review: 'The user experience is amazing. I have never worked with a more intuitive platform!',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Our Students Say
        </h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="mt-4 text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
