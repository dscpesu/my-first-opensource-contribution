import Image from "next/image";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Navbar from "../Components/Navbar";

function getAllContributions() {
  const contributionsDir = path.resolve(process.cwd(), "contributions");

  const fileNames = fs.readdirSync(contributionsDir);

  const slugNames = [];

  for (const fileName of fileNames) {
    if (fileName.endsWith(".mdx")) {
      const slug = path.basename(fileName, ".mdx");
      slugNames.push(slug);
    }
  }

  return slugNames;
}

export default function Home() {
  const slugNames = getAllContributions();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <Navbar />
      <div className="relative w-full h-[60vh] object-cover flex flex-col items-center justify-center gap-2    bg-[url('/hero-vector.png')]  ">
        <Image
          src={"/gdsc_logo.png"}
          alt="gdsc-logo-title"
          height={100}
          width={100}
        />
        <h1 className=" text-2xl md:text-5xl text-gray-500 text-center">
          Google Developer Student Clubs
        </h1>
        <p className="text-sm md:text-xl text-center  ">
          Make Your First Open Source Contribution!
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center text-black my-6 px-9 text-center">
        <h1 className="text-xl md:text-3xl text-gray-500 ">
          Our Contributors along the way:
        </h1>
        <hr />
        <div className="flex flex-wrap justify-center gap-5 p-6  border-2 border-gray-500 rounded max-h-48 md:max-h-[200px] overflow-y-auto">
          {slugNames.map((ele)=>{
            return(<Link key={ele} className="m-1 p-2 border-2 border-gray-500 rounded text-gray-500 hover:text-black hover:border-black hover:scale-110 cursor-pointer transition-transform" href={`/hackfest/${ele}`} >{ele}</Link>)
          })}
        </div>
        <hr />

      </div>
    </main>
  );
}
