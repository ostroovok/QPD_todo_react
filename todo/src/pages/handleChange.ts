
export const handleInputChange =
  (fn: (value: React.SetStateAction<string>) => void) =>
  (event: React.FormEvent<HTMLInputElement>) =>
    fn(event.currentTarget.value);

export const handleSelectChange =
  (fn: (value: React.SetStateAction<string>) => void) =>
  (event: React.FormEvent<HTMLSelectElement>) =>
    fn(event.currentTarget.options[event.currentTarget.options.selectedIndex].text);
