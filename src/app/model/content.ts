import { Category } from './category'

export class Content {    
    id: number;
    title:String;
    content: String;
    description: String;
    categories_id: number;
    is_approved: String;
    picture_location: String;
    category: Category;
    createdAt:Date;
    updatedAt:Date;
}
