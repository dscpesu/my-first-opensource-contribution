const customTags = {
  h1: (props) => <h1 className="text-2xl md:text-3xl mt-4" {...props} />,
  h2: (props) => <h2 className="text-xl  w-full px-10" {...props} />,
  h3: (props) => <h3 className="text-xl  w-full px-10" {...props} />,
  h4: (props) => <h4 className="text-xl  w-full px-10" {...props} />,
  ul: (props) => (
    <l1 className="text-1xl w-[100%] px-10 md:px-20  " {...props} />
  ),
  ol: (props) => <l1 className="text-1xl w-[100%] px-10 md:px-20" {...props} />,
  a: (props) => <a className="underline" {...props} />,
  p: (props) => <p className="w-[100%] px-10 text-justify" {...props} />,
  img: (props) => <img className="w-auto h-auto rounded-full" {...props} />,
  strong: (props) => <strong className="text-xl" {...props} />,
  code: (props) => (
    <mark className="bg-gray-100">
      <code {...props} />
    </mark>
  ),
  em: (props) => <em className="mx-2" {...props}/>
};

export default customTags;
