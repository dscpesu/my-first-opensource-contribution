import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-[100vh]">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-3xl">404 Not Found...</h2>
        <p>Stuff you're looking for, was not found :(</p>
        <p className="text-[0.5xl]">so  the question is...does it even exist ??? 🤔</p>
      </div>
      <div>
        <Link
          href="/"
          className=" my-4 p-2 border-2 rounded-lg hover:border-4 "
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
