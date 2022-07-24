import {useState,ReactNode, createContext, useEffect} from 'react';

interface IPkmRequest {
    children: ReactNode;
  }

export const PkmContextData = createContext<any>({});

export function PkmProvider({children}:IPkmRequest){
    const [loadPage, setLoadPage] = useState(8)
    const [pkmData, setPkmData] = useState<any>([]);
    const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${loadPage}`);
  
    async function getPokemons() {
      const response = await fetch(loadMore);
      const data = await response.json();
      setLoadMore(data.next);
  
      function searchPokemon(result: []) {
        result.forEach(async (pokemon: any) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data = await response.json();
          setPkmData((currentList: any) => [...currentList, data]);
        });
      }
      searchPokemon(data.results);
    }
  
    useEffect(() => {
      getPokemons();
    }, []);


  
    return (
        <PkmContextData.Provider value={{pkmData, setPkmData}}>
            {children}
        </PkmContextData.Provider>
    )
}
