import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { usePkmData } from "../hooks/usePkm";
import { SideModal } from '../components/SideModal/SideModal';
import { useState, useContext } from "react";
import { ICards } from '../@types/Types';
import { Modal } from "../components/Modal/Modal";
import { PkmContextData } from '../contexts/GetAllPkm';



export function MainContentPage() {


  const [openSideModalState, setOpenSideModalState] = useState(false);

  const { pkmData, loadMoreCardsBtn } = useContext(PkmContextData);

  const [modal, setModal] = useState(false);

  

  function openAndCloseSideModal() {
    setOpenSideModalState(content => !content)
  }

  function openModal() {
    setModal(!modal)

  }

  return (
    <main className="w-full flex flex-col items-center ">
      <SideModal valueSideModal={openSideModalState} setValueSideModal={setOpenSideModalState} />
      <Modal modalOpenState={modal} callModalOpenFunction={openModal} />
      <div className="w-[1050px] py-7 flex flex-col">
        <div className="flex space-x-[600px]">
          <span className="text-darkPurple text-[32px]">
            Resultado de busca
          </span>
          <Button name="Novo Card" loadMoreCards={() => openAndCloseSideModal()} />
        </div>

        <div className="flex flex-wrap justify-center pt-2">
          {pkmData.map((card: ICards) => <Card handleDeleteCard={openModal} name={card.name} image={card.sprites.other.dream_world.front_default} />)}
        </div>
        <Button name="Carregar mais" loadMoreCards={() => loadMoreCardsBtn()} />
      </div>

    </main>
  )
}