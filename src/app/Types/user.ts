export interface User{
    clientId: number;
     usuario: string;
     email: string;
     password: string;
}

export interface UserContextState {
    currentUser: User;
    loginUser: (user: User) => void;

}
