import { ScryfallCard } from "@scryfall/api-types";
import { useCallback, useState } from "react";
import * as defaultCard from '../assets/discord_card.json';

const URL = 'https://api.scryfall.com/cards/random?q=-t:land+game:paper';

export default function useScryfallCard(): [card: ScryfallCard.Any, loading: boolean, onClick: () => void] {
  const [data, setData] = useState<ScryfallCard.Any>(defaultCard as ScryfallCard.Any);
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

  return [data, loading, onClick];
}