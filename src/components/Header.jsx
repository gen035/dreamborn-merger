import DreamInk from "./DreamInk";

const Header = () => {
  return (
    <>
      <header className='m-10 text-center text-white text-3xl'>
        A deck merging tool for Dreamborn.ink
        <DreamInk />
      </header>
      <p className='text-center mt-8 text-white text-lg max-w-screen-lg mx-auto'>This tool is in its initial iteration. Users are advised to exercise caution when using it and consider creating a new deck to avoid any potential issues or unintended modifications to existing data. Your feedback is valuable for further improvements.</p>
    </>
  );
}

export default Header;
