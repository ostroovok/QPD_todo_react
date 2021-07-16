
export interface IModalProps{
    modalTitle: string;
    firstbtnTitle: string;
    secondbtnTitle: string;
    isOpen: boolean;
    onCancel: { (): void };
    onSubmit: { (): void };
    children: JSX.Element;
}