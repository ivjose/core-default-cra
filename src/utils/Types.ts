export interface IPageChecker {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  path?: string;
  exact?: boolean;
}

// export interface IGetLocalStorage

export interface ISaveLocalStorage<T> {
  name: string;
  value: T;
}
