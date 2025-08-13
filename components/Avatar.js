import Image from "next/image";

const Avatar = () => {
  return (
    <div className=" xl-flex xl:max-w-none">
      <Image
        //removed hidden
        className=" translate-z-0 w-full h-full"
        src={"/camis.png"}
        width={500}
        height={500}
        alt="image of a girl, in a black blouse , pony hair and smiling "
      />
    </div>
  );
};

export default Avatar;
