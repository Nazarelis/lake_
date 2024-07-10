import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import HeroSection from '../components/SecondHeroSection'; // Adjust the path if necessary
import GoogleMap from '../components/GoogleMap'; // Adjust the path if necessary
import hojaIzq from '/public/images/hojader1.svg'; // Adjust the path if necessary
import hojaDer from '/public/images/hojaizq1.svg'; // Adjust the path if necessary
import contact from '/public/images/contact.jpg'; // Adjust the path if necessary
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AirbnbIcon from '/public/images/airbnb.svg'; // Adjust the path if necessary
import Email from '/public/images/email.svg'; // Adjust the path if necessary
import Phone from '/public/images/phone.svg'; // Adjust the path if necessary
import map from '/public/images/map.svg'; // Adjust the path if necessary

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with data:", formData); // Log the data being submitted
    
        // Use EmailJS to send the form
        emailjs.sendForm('service_55qyrmd', 'template_mj7x5v8', e.target, 'VAJlaJb5Q_FJhE9rr')
          .then((result) => {
              console.log('Email successfully sent!', result.text);
              alert("Thank you for your message. We will contact you soon!");
              setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form after successful send
          }, (error) => {
              console.log('Failed to send email:', error.text);
              console.error("Error details:", error); // Log the error details
              alert("Failed to send message. Please try again later.");
          });
    };

    return (
        <div className="bg-[#F7F7F7] relative">
            <HeroSection imageSrc={contact} title="Contact Us" />
            <img src={hojaIzq} alt="Leaf on the left" className="absolute top-30 left-0 w-16 h-16 lg:w-30 lg:h-30" />
            <img src={hojaDer} alt="Leaf on the right" className="absolute bottom-0 right-0 w-16 h-16 lg:w-30 lg:h-30" />

            <div className="mx-auto p-6">
                <div className="text-center font-rufina text-lg md:text-xl lg:text-2xl text-custom-green mt-20 mb-20">
                    <p>Have a question or want to plan your visit? Get in touch with Lake Barrine Teahouse today.</p>
                    <p>Our friendly team is here to assist with reservations, event inquiries, and more.</p>
                    <p>Reach out and let us help make your experience unforgettable.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Name" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Email" />
                                </div>
                                <div className="md:w-1/2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Phone Number" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 block w-full rounded-md border border-custom-green px-4 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Message"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="mt-2 px-4 py-2 bg-custom-green text-white rounded-md hover:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-500 focus:ring-opacity-50">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        {/* Social Links and other contact info */}
                        <div className="grid grid-cols-8 grid-rows-5 items-center">
                            <img src={Phone} alt="Phone icon" className="w-7 h-7 cursor-pointer col-start-1" />
                            <p className="whitespace-nowrap col-start-2 col-span-7">(07) 4095 3847</p>
                            <img src={Email} alt="Email icon" className="w-6 h-6 cursor-pointer col-start-1 row-start-3" />
                            <p className="whitespace-nowrap col-start-2 col-span-7 row-start-3">info@lakebarrine.com.au</p>
                            <a href="https://www.facebook.com/LakeBarrine" target="_blank" rel="noopener noreferrer" className="col-start-1 row-start-4">
                                <FacebookIcon className="text-custom-green text-[40px] md:text-[30px]" />
                                
                            </a>
                            <a href="https://www.instagram.com/lakebarrine" target="_blank" rel="noopener noreferrer" className="col-start-1 row-start-5">
                                <InstagramIcon className="text-custom-green text-[40px] md:text-[30px]" />
                            </a>
                            <a href="https://maps.app.goo.gl/36dBFdTyxmWJEo3o7" target="_blank" rel="noopener noreferrer" className="col-start-1 row-start-2">                                
                                <img src={map} alt="map icon" className="w-6 h-6 cursor-pointer col-start-1 row-start-5" />
                            </a>
                            <p className="whitespace-nowrap col-start-2 col-span-7 row-start-2">27 Lake Barrine Road, Yunguburra, QLD 4884</p>


                            <p className="col-start-2 col-span-7 row-start-5">instagram.com/lakebarrine</p>
                            <p className="col-start-2 col-span-7 row-start-4">facebook.com/lakebarrine</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6 mt-4">
                    <GoogleMap />
                </div>
            </div>
        </div>
    );
}

export default Contact;