import Image from "next/image";

const DevImg = ({ containerStyle, imgSrc, alt }) => {
  return (
    <div className={`${containerStyle}`}>
      <Image src={imgSrc} fill priority alt={alt} />
    </div>
  );
};

export default DevImg;
