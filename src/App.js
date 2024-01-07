import Header from './components/Header';
import Tool from './components/Tool';

const App = () => {
  return (
    <>
      <Header />
      <Tool />
      <a href='https://github.com/gen035/dreamink-merger' target='_blank' rel='noreferrer' className='absolute bottom-4 left-4'>
        <img className='max-w-16' src='GitHub_Logo_White.png' />
      </a>
    </>
  );
}

export default App;
