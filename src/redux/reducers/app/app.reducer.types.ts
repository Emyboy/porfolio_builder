export interface AppReducerTypes {
  toolsIndex: number;
  showToolbar: boolean;
}

export interface AppActionTypes {
  type: string;
  payload: AppReducerTypes;
}
