export default interface Connection {
    query(query: string, values?: any): Promise<any>;
    disconnect(): Promise<void>;
    connect(): Promise<void>;
    // isConnected(): Promise<boolean>;
}