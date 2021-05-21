import { User } from "./user";

export interface Post{
    id?: number;
    title:string;
    content:string;
    userId: number;
    isNSFW: boolean;
    user: User;
}