export default class OrderCode {
    code: string;

    constructor(date: Date, sequence: number) {
        this.code = this.generateCode(date, sequence);
    }

    getCode(): string {
        return this.code;
    }

    private generateCode(date: Date, sequence: number): string {
        return `${date.getFullYear()}${new String(sequence).padStart(8, '0')}`;
    }
}
