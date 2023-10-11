import Image from "next/image";
import Navbar from "./Components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <Navbar />
      <div className="relative w-full h-[60vh] object-cover flex flex-col items-center justify-center gap-1    bg-[url('/hero-vector.png')]  ">
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
      <div className="flex flex-col gap-3 items-center justify-center text-black my-6 px-5 text-center">
        <h1 className="text-xl md:text-3xl text-gray-500 ">
          Steps To Make Your First Contribution:
        </h1>

        <hr />
        <hr />

        <div className="text-left flex flex-col gap-3">
          <div className="justify-center">
            <span className="text-2xl text-gray-500">#1</span> Fork this
            repository to your GitHub account.
          </div>
          <hr />
          <div>
            <span className="text-2xl text-gray-500">#2</span> Clone your forked
            repository to your local machine.
          </div>
          <hr />
          <div>
            <span className="text-2xl text-gray-500">#3</span> Create a new
            markdown <code>(.mdx)</code> file with your GitHub username as the
            filename (e.g., <code>your-username.mdx</code>).
          </div>
          <hr />

          <div>
            <span className="text-2xl text-gray-500">#4</span> Add your profile
            information to the markdown file. Feel free to include details like
            your name, bio, skills, interests, and social media links.
          </div>
          <hr />

          <div>
            <span className="text-2xl text-gray-500">#5</span> Commit your
            changes and push them to your forked repository.
          </div>
          <hr />

          <div>
            <span className="text-2xl text-gray-500">#6</span> Create a pull
            request (PR) to the main repository.
          </div>
        </div>
        <hr />
      </div>
      <div className="flex flex-col items-center justify-center w-fit px-2 my-4 gap-y-3">
          <p className="text-center"> 🥳 That's it! Once your PR is merged, you'll have your personal
          profile page on our website at</p>
          <div className="flex flex-col md:flex-row ">
          <code className=" text-center">contributions.gdscpesu.com</code>
          <code className=" text-center">/hackfest/[your-name]</code>
          </div>
        </div>
    </main>
  );
}
