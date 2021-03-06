export class PostService {

    url = 'https://jsonplaceholder.typicode.com/posts'

    async getAllPosts() {
        return await fetch(this.url)
            .then(value => value.json())
    }

    async getPostById(id){
        return await  fetch(this.url + `/${id}`)
            .then(value => value.json())
    }

    getPostForUser(userId){
        return fetch(this.url+`?userId=${userId}`)
            .then(value => value.json())
    }

}