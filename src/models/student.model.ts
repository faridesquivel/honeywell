import { Address } from './address.model';

export class Student {
    constructor(
    public sid: string,
    public firstName: string,
    public lastName: string,
    public address: Address,
    public phoneNumber: number,
    public GPA: number
    ) {}
}