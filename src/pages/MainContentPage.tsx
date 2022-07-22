import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import {usePkmData} from "../hooks/usePkm";
import {SideModal} from '../components/SideModal/SideModal';
import {useState} from "react";
import {ICards} from '../@types/Types';

export function MainContentPage() {

  const {setLoadPage, getPkm, getPokemons, loadPage } = usePkmData();
  const [openSideModalState, setOpenSideModalState] = useState(false);


  function loadMoreCardsBtn() {
    setLoadPage(loadPage + 8);
    getPokemons();
  }

  function openAndCloseSideModal() {
    setOpenSideModalState(content => !content)
    console.log(openSideModalState)
    
  }


  return (
    <main className="w-full flex flex-col items-center ">
       <SideModal valueSideModal={openSideModalState} setValueSideModal={setOpenSideModalState}/>
      <div className="w-[1050px] py-7 flex flex-col">
        <div className="flex space-x-[600px]">
          <span className="text-darkPurple text-[32px]">
            Resultado de busca
          </span>
          <Button name="Novo Carda" loadMoreCards={() => openAndCloseSideModal()}/>
        </div>

        <div className="flex flex-wrap justify-center pt-2">
          {getPkm.map((card:ICards) => <Card name={card.name} image={card.sprites.other.dream_world.front_default} />)}
        </div>
          <Button name="Carregar mais" loadMoreCards={() => loadMoreCardsBtn()} />
      </div>

    </main>
  )
}