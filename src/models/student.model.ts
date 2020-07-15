import { Address } from "cluster";

import {Address} from './address.model';

export interface Student {
    sid: number;
    firstName: string;
    lastName: string;
    address: Address;
}