
export interface IModalProps{
    title: string;
    isOpen: boolean;
    onCancel: { (): void};
    onSubmit: { (): void };
    children: JSX.Element;
}