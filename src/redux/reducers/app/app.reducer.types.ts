export interface AppReducerTypes {
  toolsIndex: number | null;
  // isDragging: boolean;
}

export interface AppActionTypes {
  type: string;
  payload: AppReducerTypes;
}
