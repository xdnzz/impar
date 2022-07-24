import {useState, createContext, useEffect} from 'react';

interface IPkmRequest {
    children: any;
  }

export const SingleContextPkm = createContext({});

export function PkmProvider({children}:IPkmRequest){
    const [loadPage, setLoadPage] = useState(8)
    const [getSingleDataPkm, setGetPkmSingle] = useState<any>([]);
    const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${loadPage}`);
  
    async function getPokemons() {
      const response = await fetch(loadMore);
      const data = await response.json();
      setLoadMore(data.next);
  
      function searchPokemon(result: []) {
        result.forEach(async (pokemon: any) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data = await response.json();
          setGetPkmSingle((currentList: any) => [...currentList, data]);
        });
      }
      searchPokemon(data.results);
    }
  
    useEffect(() => {
      getPokemons();
    }, []);


    function loadMoreCardsBtn() {
      setLoadPage(loadPage + 8);
      getPokemons();
    }
    return (
        <SingleContextPkm.Provider value={{getSingleDataPkm, setGetPkmSingle, loadMoreCardsBtn}}>
            {children}
        </SingleContextPkm.Provider>
    )
}
