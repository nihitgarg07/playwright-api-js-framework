class ApiClient{
    constructor(apiContext){
        this.apiContext = apiContext
    }

async get(endPoint){
    return await this.apiContext.get(endPoint)
}

async post(endPoint,body=null){
    if(body){
        return await this.apiContext.post(endPoint,{data:body})
    }
    else{
        return await this.apiContext.post(endPoint)
    }
    
}

async put(endPoint,body=null){
    if(body){
            return await this.apiContext.put(endPoint,{data:body})
    }
    else{
        return await this.apiContext.put(endPoint)
    }
    
}

async patch(endPoint,body=null){
    if(body){
        return await this.apiContext.patch(endPoint,{data:body})
    }
    else{
        return await this.apiContext.patch(endPoint)
    }
    
}

}

module.exports = {ApiClient}