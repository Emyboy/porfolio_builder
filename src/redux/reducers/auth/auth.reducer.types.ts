export interface AuthUserType {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
}
export interface AuthReducerType {
    user: AuthUserType | null;
    loading: boolean;
}

export interface AuthActionType {
    type: string;
    payload: AuthReducerType;
}


