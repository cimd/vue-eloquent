export default class Auth {
    protected urls: {
        login: string;
        logout: string;
        forgotPassword: string;
        resetPassword: string;
    };
    /**
     * @param config
     */
    constructor(config?: {
        login?: string;
        logout?: string;
        forgotPassword?: string;
        resetPassword?: string;
    });
    get token(): string | null;
    set token(token: string);
    /**
     * Logs in the user
     *
     * @async
     * @param { any } payload
     * @return { Promise<any> }
     */
    login(payload: any): Promise<unknown>;
    loggedIn(_payload: any): void;
    loginError(_er: any): void;
    isAuthenticated(): boolean;
    logout(): Promise<unknown>;
    loggedOut(_payload: any): void;
    logoutError(_er: any): void;
    forgotPassword(email: string): Promise<unknown>;
    resetPassword(payload: any): Promise<unknown>;
}
