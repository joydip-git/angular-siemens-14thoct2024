export interface Manager<T, TValue> {
    add(e: T): void;
    generateSalaryAmount(): void;
    filterRecords(value: TValue): Readonly<T[]>;
    getAll(): Readonly<T[]>;
}