
export interface ICards {
    name: string;
    image? : string;
    sprites?: any;
    handleDeleteCard: ()=>void;
    id: number;
    openModal?: ()=>void;
    callUnderConstructionFunction: ()=>void;
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