type InmateRecord = {
    name: string;
    age?: number;
    totalBail?: string;
    courtDate?: string;
    mugshotUrl?: string;
    charges: {
        description: string;
        status: string;
    }[];
};