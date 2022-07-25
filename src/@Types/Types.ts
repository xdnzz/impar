
export interface ICards {
    name?: string;
    url?: string;
    image? : string;
    sprites?: any;
    handleDeleteCard: ()=>void;
    id: number;
}

export interface IButton {
    name?: string;
    hidden?:string;
    loadMoreCards?: ()=> void;
}

export interface ISideModal {
    valueSideModal?: boolean;
    setValueSideModal: (value: boolean) => void;
}