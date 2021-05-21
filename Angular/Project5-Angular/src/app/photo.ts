import { User } from "./user";

export interface Photo{
    id: number;
    imgUrl: string;
    userId: number;
    user: User;
    isProfilePicture: boolean;
}