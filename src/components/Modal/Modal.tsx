import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';


interface IModal {
  modalOpenState: boolean;
  callModalOpenFunction: () => void;

}


export function Modal({ modalOpenState, callModalOpenFunction }: IModal) {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>


      <Transition appear show={modalOpenState} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[550px] transform overflow-hidden h-[500px] flex flex-col items-center text-left align-middle transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 "
                  >
                  </Dialog.Title>
                  <div className=" w-[438px] h-[434px] bg-white mt-10 flex items-center justify-center flex-col">
                    <div className="w-44 h-44 rounded-[100%] mt-5  bg-bgLightPink border-[6px] flex flex-col justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-[100px] w-[100px] text-btnError" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                    <span className="text-3xl font-medium text-btnError mt-5">Excluir</span>
                    <span>Certeza que deseja excluir?</span>
                    <div className="h-[1px] bg-slate-200 w-72 my-2 mx-auto my-5" />
                    <div>
                      <button className="text-white bg-btnError py-2 px-9 rounded rounded-md m-3">Excluir</button>
                      <button className="text-btnError bg-white border-btnError border py-2 px-9 rounded rounded-md m-3">Cancelar</button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="absolute justify-center rounded-[100%] border border-transparent bg-btnOrangeColor top-6 right-11 p-1  text-sm font-medium text-white"
                      onClick={callModalOpenFunction}
                    >
                      <XIcon className="h-6 w-6" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
