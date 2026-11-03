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
     * Forgets the sign in kept in the browser: the bearer token and the flag of a
     * cookie session. The session cookie itself is HttpOnly, so only the server
     * can end it.
     */
    static clearSession(): void;
    /**
     * Logs in the user
     *
     * @async
     * @param { any } payload
     * @return { Promise<any> }
     */
    login(payload: any): Promise<unknown>;
    /**
     * Keeps the sign in of a response: a bearer token when the server sends
     * one, otherwise the server has started a cookie session.
     */
    protected startSession(payload: any): void;
    loggedIn(_payload: any): void;
    loginError(_er: any): void;
    /**
     * Whether the browser holds a sign in. With cookie sessions this is a flag
     * only: the session may have expired on the server, which answers 401.
     */
    isAuthenticated(): boolean;
    logout(): Promise<unknown>;
    loggedOut(_payload: any): void;
    logoutError(_er: any): void;
    forgotPassword(email: string): Promise<unknown>;
    resetPassword(payload: any): Promise<unknown>;
}
