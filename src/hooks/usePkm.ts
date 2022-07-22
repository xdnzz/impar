import {useState, useEffect} from 'react';


export const usePkmData = () => {
    const [loadPage, setLoadPage] = useState(8)
    const [getPkm, setGetPkm] = useState<any>([]);
    const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${loadPage}`);
  
    async function getPokemons() {
      const response = await fetch(loadMore);
      const data = await response.json();
  
      setLoadMore(data.next);
  
      function searchPokemon(result: []) {
        result.forEach(async (pokemon: any) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data = await response.json();
          setGetPkm((currentList: any) => [...currentList, data]);
        });
      }
      searchPokemon(data.results);
    }
  
    useEffect(() => {
      getPokemons();
    }, []);

    return {setLoadPage, getPkm, getPokemons, loadPage }
}