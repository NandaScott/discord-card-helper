import { useCallback, useState } from 'react';

interface ScryfallCard {
  card_faces?: Record<'image_uris', Record<'normal', string>>[];
  image_uris?: Record<'normal', string>;
  scryfall_uri?: string;
  name: string;
}

const defaultCard: ScryfallCard = {
  name: 'Discord, Lord of Disharmony',
  image_uris: {
    normal:
      'https://cards.scryfall.io/normal/front/c/4/c474c0f1-08c7-4183-b024-297a11594a96.jpg?1711471586',
  },
  scryfall_uri:
    'https://scryfall.com/card/sld/798/discord-lord-of-disharmony?utm_source=api',
};

const URL = 'https://api.scryfall.com/cards/random?q=-t:land+game:paper';

export default function App() {
  const [data, setData] = useState<ScryfallCard>(defaultCard);
  const [loading, setLoading] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setLoading(true);
    fetch(URL)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

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

        <a href={data.scryfall_uri} className='max-w-sm'>
          <img
            src={
              data.image_uris?.normal ?? data.card_faces?.[0].image_uris.normal
            }
            alt={data.name}
            className='rounded-2xl shadow-lg'
            width={401}
            height={288}
          />
        </a>

        <button
          onClick={onClick}
          disabled={loading}
          className='text-white w-full max-w-sm bg-purple-600 rounded-lg shadow-sm p-4 font-semibold text-xl active:bg-purple-800 disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed'
        >
          New Card
        </button>
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
