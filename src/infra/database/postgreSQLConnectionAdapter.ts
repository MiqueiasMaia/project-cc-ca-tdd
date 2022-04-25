import Connection from "./connection";
import pgPromise from "pg-promise";

export default class PostgreSQLConnectionAdapter implements Connection {
    connection: any;
    constructor() {
        this.connection = pgPromise()("postgres://postgres:root@localhost:5432/app");
    }
    async connect(): Promise<void> {
        return await this.connection.$pool.connect();
    }
    async disconnect(): Promise<void> {
        return await this.connection.$pool.end();
    }
    // async isConnected():  Promise<boolean> {
    //     return await this.connection.$pool.isConnected();
    // }
    query(query: string, values?: any): Promise<any> {
        return this.connection.query(query, values);
    }

}