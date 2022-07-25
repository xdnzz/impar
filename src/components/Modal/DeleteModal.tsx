import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';


interface IModal {
  modalOpenState: boolean;
  callModalOpenFunction: () => void;

}


export function DeleteModal({ modalOpenState, callModalOpenFunction }: IModal) {
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
                  <div className=" w-[438px] h-[284px] bg-white mt-10 flex items-center justify-center flex-col rounded-md">
                    <div className="w-44 h-44 mt-5  flex flex-col justify-center items-center">
                      <img src="https://pa1.narvii.com/6849/a24733a2eb676de083dd5851b44483cb79f9fc55_hq.gif"/>
                    </div>
                <div className="flex items-center justify-center mb-3">
                    <span className="text-center text-xl">
                        As funcionalidades ainda estão em desenvolvimento. <br/> Obrigado pela compreenção!
                    </span>
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
