import { APIRequestContext, request  } from "@playwright/test";


class APIcontroller{

    private fakerApi: APIRequestContext;  

    async init(){
        this.fakerApi = await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });

    }               

    async getUser() {
        const response = await this.fakerApi.get('users')
        const responseBody = await response.json();
        return responseBody[0];
    }

    async createUserTodo(){

        const response = await this.fakerApi
            .post('/users/1/todos',{
                data:{
                    "title": "Learn Playwright",
                    "completed": "false"
                }
            })
        
  
        return await response.json()

    }

                
}

export default new APIcontroller();