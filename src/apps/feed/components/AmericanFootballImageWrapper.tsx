import images from "../../../assets/images";
import Image from "../../../components/Image";

const AmericanFootballImageWrapper = () => {
  return (
    <div className="absolute top-0">
      <div className="hidden lg:block">testet</div>
      <Image
        className="w-[200px] md:w-[518px] lg:w-[678px]"
        src={images.americanfootball}
        aspectRatio={0.7151}
      />
    </div>
  );
};

export default AmericanFootballImageWrapper;
