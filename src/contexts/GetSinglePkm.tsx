import {useState,ReactNode, createContext, useEffect} from 'react';

interface IPkmRequest {
    children: ReactNode;
  }

export const SinglePkmContextData = createContext<any>({});

export function PkmSingleProvider({children}:IPkmRequest){
    const [loadPage, setLoadPage] = useState(8)
    const [singlePkmData, setSinglePkmData] = useState<any>([]);
    const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=240`);
  
    async function getPokemons() {
      const response = await fetch(loadMore);
      const data = await response.json();
      setLoadMore(data.next);
  
      function searchPokemon(result: []) {
        result.forEach(async (pokemon: any) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data = await response.json();
          setSinglePkmData((currentList: any) => [...currentList, data]);
        });
      }
      searchPokemon(data.results);
    }
  
    useEffect(() => {
      getPokemons();
    }, []);


  
    return (
        <SinglePkmContextData.Provider value={{singlePkmData}}>
            {children}
        </SinglePkmContextData.Provider>
    )
}
