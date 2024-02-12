import Image from "next/image";

const AuthLoadingLogo = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Image
          width={120}
          height={120}
          alt="auth loading"
          src={"/next.svg"}
          className="animate-pulse duration-700"
        />
      </div>
    </>
  );
};

export default AuthLoadingLogo;
