export type Props = {
  onAdd(text: string): void;
  onAddText: string;
  close(): void;
};

export type HookProps = {
  onAdd: (value: string) => void;
};
