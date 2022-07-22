import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';
import {ICards} from '../../@types/Types';

export function Card({name, image}: ICards) {
    return (
        <div className="p-6">
            <div className="border rounded-t-md bg-white h-44 flex flex-col justify-center items-center shadow-md">
                <div className="w-52 flex flex-col justify-center items-center">
                    <img src={image} className="h-20" />
                    <div className="h-[1px] bg-slate-200 w-[140px] my-2 mx-auto"> </div>
                    <span className="font-medium text-gray-600 py-2">{name}</span>
                </div>
            </div>

            <div className="flex text-slate-500  items-center w-full justify-center border rounded-b-md">
                <button className="flex items-center p-3 hover:text-red-700"> <img src={trash} className="pr-2 "/>Excluir</button>
                <button className="flex items-center p-3 hover:text-red-700"> <img src={edit} className="pr-2 "/>Editar</button>
            </div>

        </div>
    )
}