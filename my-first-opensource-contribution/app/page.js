import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <div className="relative w-full h-[40vh] object-cover flex flex-col items-center justify-center gap-2    bg-[url('/hero-vector.png')]  ">
        <Image
          src={"/gdsc_logo.png"}
          alt="gdsc-logo-title"
          height={100}
          width={100}
        />
        <h1 className=" text-xl md:text-5xl text-gray-500 text-center">
          Google Developer Student Clubs
        </h1>
        <p className="text-sm md:text-xl text-center  ">
          Make Your First Open Source Contribution!
        </p>
      </div>
      <div className="flex  items-center justify-center text-black my-6">
        <h1 className="text-3xl text-gray-500 ">Steps To Make Your First Contribution:</h1>
      </div>
      
    </main>
  );
}
