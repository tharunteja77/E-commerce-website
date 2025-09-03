import Slider from "react-slick";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";



const slides = [
  {
    title: "Experience Pure Sound – Your Perfect Headphones Awaits!",
    subtitle: "Limited Time Offer 30% Off",
    image: "https://res.cloudinary.com/dpt0bztac/image/upload/v1756927534/headphones-carousal_r4grif.jpg",
    button: "Explore Now",
    link: "/category/headphones & earpods",
  },
  {
    title: "Power Your Productivity – Laptops Built for Speed",
    subtitle: "Special Deal - Up to 40% Off",
    image: "https://res.cloudinary.com/dpt0bztac/image/upload/v1756927534/laptop_asu1ui.webp",
    button: "Buy Now",
    link: "/category/laptops",
  },
  {
    title: "Next-Level Gaming – Unleash Your Potential with PS5",
    subtitle: "Hurry Up! Limited Stock",
    image: "https://res.cloudinary.com/dpt0bztac/image/upload/v1756927534/PS5_rujgjn.png",
    button: "Shop Now",
    link: "/category/gaming",
  },
  {
    title: "Upgrade Your Setup – With Mechanical Keyboards",
    subtitle: "Flash Sale – Up to 20% Off",
    image: "https://res.cloudinary.com/dpt0bztac/image/upload/v1756927535/Mech_keyboard_rcm0za.png",
    button: "Upgrade Now",
    link: "/category/keyboards & accessories",
  },
  {
    title: "Capture Moments – Cameras & Accessories",
    subtitle: "Special Savings – Up to 40% Off",
    image: "https://res.cloudinary.com/dpt0bztac/image/upload/v1756927534/camera_accessories_r1jufy.jpg",
    button: "Browse Now",
    link: "/category/camera & accessories",
  },
];

const HeroCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const navigate = useNavigate();

  const handleRedirect = (path) => {
  navigate(path);
  };


  return (
    <div className="flex justify-center items-center my-10 py-10 px-4 bg-[#e6e9f4] rounded-lg">
      <div className="w-full max-w-7xl">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#e6e9f4] rounded-xl p-8">
                {/* Left side: text */}
                <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-6">
                  <p className="text-orange-500 font-semibold">{slide.subtitle}</p>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900">{slide.title}</h2>
                  <div className="flex items-center gap-4">
                    <button onClick={() => handleRedirect(slide.link)} className="bg-orange-500 text-white px-10 py-2 rounded-full text-lg font-semibold hover:bg-orange-600 transition">
                       {slide.button}
                    </button>
                    <button onClick={() => handleRedirect(slide.link)} className="text-gray-800 font-medium hover:underline flex items-center gap-2">
                      Find more <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Right side: image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={slide.image}
                    alt="Product visual"
                    className="w-[300px] md:w-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroCarousel;
