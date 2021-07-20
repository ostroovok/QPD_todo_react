export interface IModalProps {
  modalTitle: string;
  firstbtnTitle: string;
  secondbtnTitle: string;
  onCancel: { (): void };
  onSubmit: { (): void };
  children: JSX.Element;
}
