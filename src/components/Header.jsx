import DreamInk from "./DreamInk";

const Header = () => {
  return (
    <>
      <header className="m-3 md:m-10 text-center text-white text-xl md:text-3xl md:px-10">
        A deck merging tool for
        <a className="font-bold ml-1" href="https://dreamborn.ink/" rel="noreferrer" target="_blank">
          Dreamborn.ink
          <DreamInk />
        </a>
        
      </header>
      <p className="text-center mt-8 text-white text-md max-w-screen-lg mx-auto px-10">
        This tool is in its initial iteration. Users are advised to exercise caution when using it and consider creating a new deck to avoid any potential issues or unintended modifications to existing data. Your feedback is valuable for further improvements.
      </p>
    </>
  );
}

export default Header;
