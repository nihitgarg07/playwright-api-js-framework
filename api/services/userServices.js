const {ApiClient} = require("../clients/apiClient")

class UserServices{
    constructor(apiContext,tokenData){
        this.ApiClient = new ApiClient(apiContext)
        this.tokenData = tokenData
       
    }

async getAuthToken(){
   
   return await this.ApiClient.post(`/auth`,this.tokenData)
}

async createBookingData(){
    return await this.ApiClient.post("/booking",this.tokenData)
}

async getBooking(id){
    return await this.ApiClient.get(`/booking/${id}`)
}

}

module.exports = {UserServices}