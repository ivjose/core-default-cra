import { SaveLocalStorage } from './Types';

export const localStorage = {
  save: function<T>({ value, name }: SaveLocalStorage<T>): void {
    window.localStorage.setItem(name, JSON.stringify(value));
  },
  get: function(name: string): string | null {
    const localAuthUser: string | null = window.localStorage.getItem(name);
    if (typeof localAuthUser === 'string') {
      return localAuthUser;
    }
    return null;
  },
  remove: function(name: string): void {
    window.localStorage.removeItem(name);
  },
  clear: function(): void {
    window.localStorage.clear();
  },
};

export const loadDash = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get: (obj: any, path: string, defaultValue: boolean = false) => {
    return String.prototype.split
      .call(path, /[,[\].]+?/)
      .filter(Boolean)
      .reduce((a, c) => (Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue), obj);
  },
};
