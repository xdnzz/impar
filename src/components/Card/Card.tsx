import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';
import icone from '../../assets/icone.svg';

export function Card() {
    return (
        <div className="w-56">
            <div className=" border rounded-t-md bg-white h-48 flex flex-col justify-center items-center shadow-md">
                <div className="w-44 flex flex-col justify-center">
                    <img src={icone} className="h-20" />
                    <hr />
                    <span>Nome:</span>
                    <span>Descrição:</span>
                </div>
            </div>
            <div className="flex text-slate-500  items-center w-full justify-center border rounded-b-md">
                <button className="flex items-center p-3 hover:text-red-700"> <img src={trash} className="pr-2 "/> Excluir</button>
                <button className="flex items-center p-3 hover:text-red-700"> <img src={edit} className="pr-2 "/>  Editar</button>
            </div>

        </div>
    )
}