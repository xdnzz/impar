import {IButton} from '../../@types/Types';

export function Button({name, loadMoreCards}: IButton){
    return (
        <button className="bg-btnOrangeColor text-white w-40 rounded-lg mx-auto h-10" onClick={loadMoreCards}>
           {name}
        </button>
    )   
}