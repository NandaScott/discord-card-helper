import useScryfallCard from '../hooks/useScryfallCard';
import CardImage from './CardImage';

export default function CardDisplay() {
  const [card, loading, onClick] = useScryfallCard();

  if (
    'card_faces' in card &&
    'image_uris' in card.card_faces[0] &&
    card.card_faces[0].image_uris?.normal
  ) {
    return (
      <>
        <a href={card.scryfall_uri} className='max-w-sm'>
          <CardImage
            src={card.card_faces[0].image_uris?.normal}
            alt={card.name}
          />
        </a>

        <button
          onClick={onClick}
          disabled={loading}
          className='text-white w-full max-w-sm bg-purple-600 rounded-lg shadow-sm p-4 font-semibold text-xl active:bg-purple-800 disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed'
        >
          New Card
        </button>
      </>
    );
  }

  if ('image_uris' in card && card.image_uris?.normal) {
    return (
      <>
        <a href={card.scryfall_uri} className='max-w-sm'>
          <CardImage src={card.image_uris?.normal} alt={card.name} />
        </a>

        <button
          onClick={onClick}
          disabled={loading}
          className='text-white w-full max-w-sm bg-purple-600 rounded-lg shadow-sm p-4 font-semibold text-xl active:bg-purple-800 disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed'
        >
          New Card
        </button>
      </>
    );
  }

  return null;
}
