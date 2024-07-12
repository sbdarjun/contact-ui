import { Employee } from "./employee.model";

export interface Institution {
    institution_id: number;
    institutionName: string;
    institutionAddress: string;
    institutionEmail: string;
    website: string;
    institutionPhone: string;
    employees: Employee[];
}
