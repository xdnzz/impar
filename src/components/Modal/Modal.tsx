import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';

interface IModal {
    modalOpenState: boolean;
    callModalOpenFunction: ()=>void;

}


export function Modal({modalOpenState, callModalOpenFunction}:IModal) {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

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
                  <div className="mt-2 w-[438px] h-[434px] bg-white mt-10">
                    <p className="text-sm text-gray-500">
                     
                    </p>
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
