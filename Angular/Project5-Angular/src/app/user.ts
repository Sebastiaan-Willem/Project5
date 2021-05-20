import { Language } from "./language";
import { Photo } from "./photo";

export interface User {
    id: number;
    name: string;
    token: string;
    language: Language[];
    photo: Photo[];
    profilePicture: string;
}