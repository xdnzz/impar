export interface ICards {
    name?: string;
    url?: string;
    image? : string;
    sprites?: any
    handleDeleteCard: ()=>void;
}

export interface IButton {
    name?: string;
    loadMoreCards?: ()=> void;
}

export interface ISideModal {
    valueSideModal?: boolean;
    setValueSideModal: (value: boolean) => void;
}