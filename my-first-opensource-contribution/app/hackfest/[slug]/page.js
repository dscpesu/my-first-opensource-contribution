import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import HeroBanner from "@/app/Components/HeroBanner";
import Introduction from "@/app/Components/Introduction";
import customTags from "@/app/Components/Hackfest/CustomTags";
import Navbar from "@/app/Components/Navbar";

export async function generateStaticPaths() {
  const files = fs.readdirSync(path.join("contributions"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

function getContributions(slug) {
  const contributionsDir = path.resolve(process.cwd(), "contributions");
  const filePath = path.join(contributionsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {
      status: false,
      frontMatter: { issue: "critical", path: `${filePath}` },
    };
  }

  const markDownFile = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter, content } = matter(markDownFile);

  return {
    status: true,
    frontMatter,
    slug,
    content,
  };
}

export default function Page({ params }) {
  const { slug } = params;
  const props = getContributions(slug);

  if (!props.status) {
    return (
      <div className="flex flex-col items-center justify-center h-[100vh] w-full px-9 flex-wrap">
        <p className="text-2xl md:text-5xl text-center">
          Oops {slug}, We are unable to find you! 👀
        </p>
        {/* <p className="text-sm px-9">{JSON.stringify(props.frontMatter)}</p> */}
      
      </div>
    );
  }

  return (
    <>
    <Navbar />
      <HeroBanner />
    <div className="flex flex-col items-center justify-center  text-black gap-9 pb-10 md:px-32">
      <div className="md:px-48 px-12 mb-16 my-16">
        <Introduction
          name={props.frontMatter.name}
          role={props.frontMatter.role}
          semester={props.frontMatter.semester}
        />
      </div>
        <MDXRemote source={props.content} components={ customTags } />
    </div>
    </>
  );
}
