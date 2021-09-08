export interface AppReducerTypes {
  toolsIndex: number;
  showToolbar: boolean;
  isLoading: boolean;
}

export interface AppActionTypes {
  type: string;
  payload: AppReducerTypes;
}
