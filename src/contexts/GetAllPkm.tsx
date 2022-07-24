import {useState, ReactNode, createContext, useEffect} from 'react';

interface IPkmRequest {
    children: any;
  }

export const PkmContextData = createContext({});

export function PkmProvider({children}:IPkmRequest){
    const [loadPage, setLoadPage] = useState(8)
    const [getPkmSingle, setGetPkmSingle] = useState<any>([]);
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
        <PkmContextData.Provider value={{getPkmSingle, setGetPkmSingle, loadMoreCardsBtn}}>
            {children}
        </PkmContextData.Provider>
    )
}
