/**
 * Testimonials Component
 * 
 * Customer testimonials carousel/slider.
 * Features:
 * - Swiper.js carousel for smooth sliding
 * - Navigation arrows for manual control
 * - Multiple testimonial cards with quotes
 * - Displays customer name and profession
 * - Responsive design
 */

// Swiper React components for carousel functionality
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS styles (required for carousel to work properly)
import "swiper/css";
import "swiper/css/navigation";

// Swiper modules - Navigation enables prev/next arrow buttons, Autoplay for auto-slide
import { Navigation, Autoplay } from "swiper/modules";

// React Icons - Quote icon for testimonials
import { IoMdQuote } from "react-icons/io";

// Testimonials data - Customer reviews
const testimonials = [
  {
    message:
      "The coffee here is absolutely amazing! The baristas are skilled and the atmosphere is perfect for both work and relaxation.",
    name: "Alice Johnson",
    profession: "Graphic Designer",
  },
  {
    message:
      "I love coming to this cafe. The pastries are always fresh, and the staff is incredibly friendly. It's my go-to spot for meetings.",
    name: "Michael Lee",
    profession: "Freelance Writer",
  },
  {
    message:
      "A hidden gem! The ambiance is cozy, and the menu offers a great variety. The chai latte is a must-try!",
    name: "Samantha Green",
    profession: "Marketing Specialist",
  },
];

const Testimonials = () => {
  return (
    <section className="h-[60vh] xl:h-[70vh]">
      <div className="container mx-auto h-full flex items-center">
        {/* Swiper Carousel Component */}
        {/* navigation={true}: Shows prev/next arrow buttons */}
        {/* modules={[Navigation]}: Enables navigation functionality */}
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-[400px]"
        >
          {testimonials.map((person, index) => (
            // Each testimonial is a slide
            <SwiperSlide key={index} className="w-full h-full">
              <div className="flex justify-center h-full xl:pt-14">
                {/* Testimonial Card Content */}
                <div className="max-w-[60%] text-primary">
                  {/* Quote Icon - Large, centered */}
                  <IoMdQuote className="text-6xl text-primary mb-12 mx-auto" />
                  
                  {/* Testimonial Message */}
                  <p className="text-2xl font-secondary text-center mb-8">
                    {person.message}
                  </p>
                  
                  {/* Customer Information */}
                  <div className="text-center">
                    {/* Customer Name - Bold */}
                    <p className="text-xl font-bold mb-1">{person.name}</p>
                    {/* Customer Profession - Secondary color */}
                    <p className="text-secondary">{person.profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
