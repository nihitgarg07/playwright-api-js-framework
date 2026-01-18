const{test,expect,request} = require("@playwright/test")
const{UserServices} = require("../api/services/userServices")
const tokenData = require("../api/test-data/tokenData.json")

test("Validate Auth Token",async()=>{
    const headers = {
        "Content-Type": "application/json"
    }
    const apiContext = await request.newContext({baseURL:process.env.BASE_URL,extraHTTPHeaders:headers})
    
    const UserService = new UserServices(apiContext,tokenData)

  const authResponse =   await UserService.getAuthToken()
  const tokenResponseData = await authResponse.json()
  expect(authResponse.status()).toBe(200)
  expect(tokenResponseData.token).not.toBeNull()

})