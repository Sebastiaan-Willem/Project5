import { Language } from "./language";
import { Photo } from "./photo";

export interface User {
    id: number;
    name: string;
    country: string;
    city: string;
    languages: Language[];
    photos: Photo[];
    profilePicture: string;
}