import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ISideModal } from '../../@types/Types';
import create from '../../assets/create.svg';
import { Button } from '../Button/Button';

export function SideModal({ valueSideModal, setValueSideModal }: ISideModal) {

  return (
    <Transition.Root show={valueSideModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setValueSideModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden outline-none">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setValueSideModal(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg text-gray-900">
                        <div className="flex w-38 flex-col">
                          <div className="flex items-center ">
                            <img src={create} alt="create new card" />
                            <span className="text-2xl pl-4">Criar card</span>
                          </div>
                          <div className="h-[1px] bg-slate-200 w-96 my-5 mx-auto" />


                        </div>
                        <div className="flex flex-col text-base">
                          <span className="font-medium">DIGITE UM NOME PARA O CARD</span>
                          <input type="text" className="outline-none rounded-l-md text-sm border-2 p-3 focus: pl-7" placeholder="Digite o título" />
                          <span className="pt-8 font-medium">INCLUA UMA IMAGEM PARA APARECER NO CARD</span>
                          <input type="file" className="border-solid border-2 p-2 rounded-md" />
                          {/* <button className="border-2  border-btnOrangeColor p-1 text-btnOrangeColor mt-32 ml-[235px] rounded-md w-36 absolute bg-white cursor-pointer">Escolher arquivo</button> */}
                          <div className="text-right pt-7">
                          <div className="h-[3px] bg-slate-200 w-96 my-5 mx-auto" />
                          <Button name="Criar card"/>
                          </div>
                      
                    
                        </div>

                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">

                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full  border-gray-200" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}