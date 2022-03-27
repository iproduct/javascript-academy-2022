/**
 * THIS HEADER SHOULD BE KEPT INTACT IN ALL CODE DERIVATIVES AND MODIFICATIONS.
 * 
 * This file provided by IPT is for non-commercial testing and evaluation
 * purposes only. IPT reserves all rights not expressly granted.
 *  
 * The security implementation provided is DEMO only and is NOT intended for production purposes.
 * It is exclusively your responsisbility to seek advice from security professionals 
 * in order to secure the REST API implementation properly.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * IPT BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { PostRepository } from '../dao/repository';
import MOCK_POSTS from '../model/mock-posts';
import { Post } from '../model/post.model';
import { IdType } from '../shared/shared-types';

export const API_BASE = 'http://localhost:9000/api';

class PostService {
    private repo = new PostRepository();
    constructor(private apiUrl: string) {
        MOCK_POSTS.forEach(post => this.repo.add(post as Post)); 
    }

    async getAllPosts() {
        const resp = await fetch(`${API_BASE}/posts`);
        const posts = await resp.json();
        return posts;
    }

    async getPostById(postId: IdType) {
        const resp = await fetch(`${API_BASE}/posts/${postId}`);
        const post = await resp.json();
        return post;
    }

    async createNewPost(post: Post) {
        const resp = await fetch(`${API_BASE}/posts`, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post),
        });
        const created = await resp.json();
        return created;
    }

    async updatePost(post: Post) {
        const resp = await fetch(`${API_BASE}/posts/${post.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post),
        });
        const updated = await resp.json();
        return updated;
    }

    async deletePost(postId: IdType) {
        const resp = await fetch(`${API_BASE}/posts/${postId}`, {
            method: 'DELETE',
            mode: 'cors'
        });
        const deleted = await resp.json();
        return deleted;
    }

 
    // async loadPosts(searchTerms: string[]): Promise<Post[]> {
    //     console.log(searchTerms);
    //     const searchText = searchTerms.join(' ');
    //     const result = await fetch(GOOGLE_BOOKS_API + encodeURIComponent(searchText));
    //     const postsFound = await result.json() as RootObject;
    //     // console.log(postsFound);
    //     return postsFound.items.map(item => new Post(
    //         item.id,
    //         item.volumeInfo.title, 
    //         item.volumeInfo.authors,
    //         item.volumeInfo.imageLinks?.thumbnail,
    //         item.volumeInfo.subtitle,
    //         item.volumeInfo.categories,
    //         searchTerms,
    //         item.volumeInfo.description
    //     ));
    // }
}

export default new PostService(API_BASE);

