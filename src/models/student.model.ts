import { Address } from "cluster";

export class Student {
    constructor(
    public sid: number,
    public firstName: string,
    public lastName: string,
    public add: Address,
    ) {}
}