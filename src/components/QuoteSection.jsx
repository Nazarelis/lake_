import hojaizq from '/public/images/hojaizq.png';
import hojader from '/public/images/hojader.png';

const QuoteSection = ({ quote, author }) => {
  return (
    <div className="relative flex items-center justify-center h-1/3 min-h-1/3 bg-[#F7F7F7] p-4 mx-auto" style={{ minHeight: '33vh' }}>
      <img src={hojaizq} alt="Hoja izquierda" className="absolute top-0 left-0 w-16 h-auto" />
      <img src={hojader} alt="Hoja derecha" className="absolute bottom-0 right-0 w-16 h-auto" />
      <div className="text-center mx-auto mt-4">
        <p className="text-lg md:text-2xl xl:text-3xl text-custom-green font-semibold">
          {quote}
        </p>
        <p className="text-md md:text-lg xl:text-xl text-custom-green font-medium mt-4">
          {author}
        </p>
      </div>
    </div>
  );
};

export default QuoteSection;