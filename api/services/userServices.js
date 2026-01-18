const {ApiClient} = require("../clients/apiClient")

class UserServices{
    constructor(apiContext,tokenData){
        this.ApiClient = new ApiClient(apiContext)
        this.tokenData = tokenData
    }

async getAuthToken(){
   
   return await this.ApiClient.post(`/auth`,this.tokenData)
}

}

module.exports = {UserServices}