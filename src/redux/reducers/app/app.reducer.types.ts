export interface AppReducerTypes {
  toolsIndex: number | null;
}

export interface AppActionTypes {
  type: string;
  payload: AppReducerTypes;
}
