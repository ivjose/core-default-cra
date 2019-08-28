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
  get: (obj: any, path: string, defaultValue: boolean = false) => {
    return String.prototype.split
      .call(path, /[,[\].]+?/)
      .filter(Boolean)
      .reduce((a, c) => (Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue), obj);
  },
  debounce: (func: Function, timeout: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  },

  throttle: (func: Function, timeout: number) => {
    let ready = true;
    return (...args: any[]) => {
      if (!ready) {
        return;
      }

      ready = false;
      func(...args);
      setTimeout(() => {
        ready = true;
      }, timeout);
    };
  },
};

export const delayAction = (timeout: number, callback: () => void) => {
  setTimeout((): void => {
    callback();
  }, timeout);
};

// const timer: number = setTimeout(() => '', 1000);

// export const timer: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);
