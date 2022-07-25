import {IButton} from '../../@types/Types';

export function Button({name, hidden, loadMoreCards}: IButton){
    return (
        <button className={`bg-btnOrangeColor text-white w-40 rounded-lg mx-auto h-10 ${hidden}`} onClick={loadMoreCards}>
           {name}
        </button>
    )   
}