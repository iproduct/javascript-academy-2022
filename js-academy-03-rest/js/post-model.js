export const DEFAULT_AUTOR_ID = 2

export class Post {
    constructor(title, content,  tags, authorId = DEFAULT_AUTOR_ID,  status = "ACTIVE") {
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.authorId = authorId;
        this.status = status;
    }
}