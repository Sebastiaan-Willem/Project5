import { Language } from "./language";
import { Photo } from "./photo";
import { Post } from "./post";

export interface User {
    id: number;
    name: string;
    languages: Language[];
    photos: Photo[];
    profilePicture: string;
    posts: Post[];
}