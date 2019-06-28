import { ISaveLocalStorage } from './Types';

export const localStorage = {
  save: function<T>({ value, name }: ISaveLocalStorage<T>): void {
    window.localStorage.setItem(name, JSON.stringify(value));
  },
  get: function(name: string): string | null {
    let localAuthUser: string | null = window.localStorage.getItem(name);
    if (typeof localAuthUser === 'string') {
      return localAuthUser;
    } else {
      return null;
    }
  },
  remove: function(name: string): void {
    window.localStorage.removeItem(name);
  },
  clear: function(): void {
    window.localStorage.clear();
  },
};
