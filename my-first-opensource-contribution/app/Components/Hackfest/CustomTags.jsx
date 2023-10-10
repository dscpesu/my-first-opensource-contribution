const customTags = {
  h1: (props) => <h1 className="text-2xl md:text-3xl" {...props} />,
  h2: (props) => <h2 className="text-xl md:text-2xl" {...props} />,
  ul: (props) => (
    <l1 className="text-1xl w-[100%] px-10 md:px-20 " {...props} />
  ),
  ol: (props) => <l1 className="text-1xl w-[100%] px-10 md:px-20" {...props} />,
  a: (props) => <a className="underline" {...props} />,
  p: (props) => <p className="w-[100%] px-10" {...props} />,
  img: (props) => <img className="w-auto h-auto rounded-full" {...props} />,
  strong: (props) => <strong className="text-xl" {...props} />,
  code: (props) => (
    <mark className="bg-gray-100">
      <code {...props} />
    </mark>
  ),
};

export default customTags;
