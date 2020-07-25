import { Content } from '../model/content'
export class Category {
    id: number;
    title: string;
    description: Boolean;
    contents:Content[];
    createdAt:Date;
    updatedAt:Date;
}
