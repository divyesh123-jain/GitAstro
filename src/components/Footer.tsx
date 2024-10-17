const Footer = () => {
    return (
      <div className="flex flex-col items-center mt-20 mb-10">
        <p className="font-medium text-gray-200">
          Made by
          <a
            href="http://peerlist.io/here_is_dj"
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold  ml-1 text-[1.2rem]"
          >
            Divyesh
          </a>
        </p>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm ">Reach out to me via</p>
          <div className="flex items-center gap-2">
            <a
              href="https://x.com/here_is_dj"
              target="_blank"
              rel="noreferrer"
              className="text-gray-510 font-medium text-sm underline"
            >
              Twitter
            </a>
            <a
              href="https://github.com/divyesh123-jain"
              target="_blank"
              rel="noreferrer"
              className="text-gray-100 font-medium text-sm underline"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;