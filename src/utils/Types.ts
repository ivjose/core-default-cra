export interface PageChecker {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  path?: string;
  exact?: boolean;
}

// export interface IGetLocalStorage

export interface SaveLocalStorage<T> {
  name: string;
  value: T;
}
