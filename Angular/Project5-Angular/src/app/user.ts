import { Language } from "./language";
import { Photo } from "./photo";
import { Post } from "./post";

export interface User {
    id: number;
    name: string;
    country: string;
    city: string;
    languages: Language[];
    photos: Photo[];
    profilePicture: string;
    posts: Post[];
    city?: string;
    country?: string;
    createdAt?: Date;
}