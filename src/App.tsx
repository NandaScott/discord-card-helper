import CardDisplay from './components/CardDisplay';

export default function App() {
  return (
    <>
      <main className='flex flex-col gap-4 lg:gap-10 justify-center items-center font-sans text-slate-900'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl text-center'>
            Discord Card Helper
          </h1>
          <p className='font-semibold text-center'>
            Use this tool to get a random card for Discord, Lord of Disharmony.
          </p>
        </div>

        <CardDisplay />
      </main>
      <footer className='bottom-0 w-full relative'>
        <p className='text-sm font-semibold'>
          Powered by{' '}
          <a href='https://scryfall.com' className='text-purple-600'>
            Scryfall
          </a>
        </p>
      </footer>
    </>
  );
}
