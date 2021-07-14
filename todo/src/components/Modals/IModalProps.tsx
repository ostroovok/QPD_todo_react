
export interface IModalProps{
    title: string;
    firstbtnTitle: string;
    secondbtnTitle: string;
    isOpen: boolean;
    onCancel: { (): void };
    onSubmit: { (): void };
    children: JSX.Element;
}