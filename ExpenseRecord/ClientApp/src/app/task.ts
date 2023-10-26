export type CategoryType = "shopping" | "health" | "work" | "bills" | "cleaning" | "other";

export interface Task {
    id?: number;
    description: string;
    category?: CategoryType | null;
    isUrgent: boolean;
    doneDate: Date | null;
}


export interface NewTask{
    description: string,
    type: string,
    amount: number
}

export interface returnTask extends NewTask{
    createTime: string,
    id: string

}
