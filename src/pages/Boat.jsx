import HeroSection from "../components/SecondHeroSection";
import GreenButton from "../components/GreenButton";
import YellowButton from "../components/YellowButton";
import RatingSlider from "../components/rating_slider/RatingSlider";

function Boat() {
    return(

        <div>
            <HeroSection
            imageSrc="src/assets/images/9f7924f7dae4639228a8cff9899d74a5.png"
            title="The waters of Lake Barrine"
            />

<div className="bg-[#F7F7F7] grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-items-center items-center">
                <img src="src/img/huevos.png" alt="Imagen" className="h-2/3 w-96 md:rounded-3xl" />
                <div className="items-center justify-items-center px-10 py-5 md:mb-20">
                    <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-third-green text-3xl sm:text-3xl md:text-3xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1">
                        The lakeside studio
                    </h1>
                    <p className="text-justify text-xl text-custom-green">
                        Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.
                    </p>
                </div>
            </div>
                <div className="bg-[#F7F7F7] flex justify-center">
                    <GreenButton text="Book now"/>
                </div>
            
                <div class="bg-[#F7F7F7]">
                <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>
            </div>

            <div className="bg-second-green grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-items-center items-center">
                <div className="items-center justify-items-center px-10 py-5 md:mb-20">
                    <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-custom-green text-3xl sm:text-3xl md:text-3xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1">
                        The Cottage
                    </h1>
                    <p className="text-justify text-xl text-custom-green">
                        Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.
                    </p>
                </div>
                <img src="src/img/huevos.png" alt="Imagen" className="h-2/3 w-96 md:rounded-3xl" />
            </div>

            <div className="bg-second-green flex justify-center">
                    <YellowButton text="Book now"/>
                </div>

            <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>

            <div className="bg-[#F7F7F7] grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-items-center items-center">
                <img src="src/img/huevos.png" alt="Imagen" className="h-2/3 w-96 md:rounded-3xl" />
                <div className="items-center justify-items-center px-10 py-5 md:mb-20">
                    <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-third-green text-3xl sm:text-3xl md:text-3xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1">
                        Create your own package
                    </h1>
                    <p className="text-justify text-xl text-custom-green">
                    Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.
                    </p>
                </div>
            </div>
                <div className="bg-[#F7F7F7] flex justify-center">
                    <GreenButton text="Book now"/>
                </div>
                <div class="bg-[#F7F7F7] pt-10">
                    <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div> 
                </div>
                <RatingSlider />
        </div>
    )
}

export default Boat; 