import SocialMediaIcons from './SocialMediaIcons';
//img
import logo from '/public/images/logo-lake.png'

const Footer = () => {
  return (
    <>
      <div className="bg-custom-green grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex flex-col items-center justify-center">
        <img src={logo} className="md:w-3/6 mt-10"/>
    </div>
    <div className="flex flex-col md:ml-36 xs:items-center md:items-start justify-center">
        <h1 className="font-rufina font-bold text-white text-3xl sm:text-3xl md:text-3xl xl:text-4xl pb-5">Contact</h1>
        <p className="text-white text-xl md:text-md xl:text-xl">+1 86 852 346 000</p>
        <p className="text-white mb-10 text-xl md:text-md xl:text-xl">info@lakebarrine.com</p>
        <span className="text-white text-xl md:text-md xl:text-xl">Lake Barrine.</span>
        <span className="text-white text-xl md:text-md xl:text-xl">Australia, 90230</span>
    </div>
    <div className="flex flex-col xs:items-center md:items-start justify-center p-16 sm:pt-3 md:pt-24">
        <h1 className="whitespace-nowrap font-rufina font-bold text-white text-3xl md:text-3xl xl:text-3xl pb-5">Opening hours</h1>
        <p className="sm:mr-0 text-white sm:text-xl md:text-md xl:text-xl">Monday to Sunday</p>
        <p className="sm:mr-0 text-white sm:text-xl md:text-md xl:text-xl">9:00 am - 10:00 pm</p>
        <h1 className="whitespace-nowrap font-rufina font-bold text-white text-3xl sm:text-3xl md:text-3xl xl:text-3xl md:pt-10 sm:pb-3 sm:pt-12 mt-4 xs:pt-6">Stay connected</h1>
          <SocialMediaIcons/>
        </div>
      </div>

      <div className="bg-custom-green grid grid-cols-1 place-items-center">
        <div className="w-full bg-yellow-500 h-0.5"></div>
        <p className="m-6 text-white">© 2024. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;