import { User } from "./user";

export interface Post{
    id?: number;
    title:string;
    content:string;
    createdAt?: Date;
    lastModified?: Date,
    userId: number;
    isNSFW: boolean;
    user: User;
}