
export const BLOGS_API_BASE_URL = 'http://localhost:8080/api';

class BlogsApiClient {
    constructor(baserApiUrl) {
        this.baserApiUrl = baserApiUrl;
    }

    async fetchPosts() {
        return this.handleResponse(async () => fetch(BLOGS_API_BASE_URL + '/posts'));
    }

    async postNewPost(post) {
        return this.handleResponse(async () => fetch(BLOGS_API_BASE_URL + '/posts',{
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(post)
        }));
    }
    
    async deletePost(postId) {
        return this.handleResponse(async () => fetch(`${BLOGS_API_BASE_URL}/posts/${postId}`, {
            method: 'DELETE',
        }));
    }
    
    async handleResponse(asyncRequestFunc){
        try {
            const resp = await asyncRequestFunc();
            const content = await resp.json();
            if( resp.status < 400) {
                return content;
            } else {
                console.log(`HTTP Error ${resp.status}: ${resp}\n${content}`);
                return Promise.reject(`Error performing HTTP request: ${resp.status}: ${resp}`);
            }
        } catch(err){
            console.log(`HTTP Error performing request: ${err}`);
            return Promise.reject(`Error performing HTTP request: ${err}`);
        }
    }  
}

export default new BlogsApiClient(BLOGS_API_BASE_URL);