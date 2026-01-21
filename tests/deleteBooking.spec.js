const{test,expect,request} = require("@playwright/test")
const {UserServices} = require("../api/services/userServices")
const tokenData = require("../api/test-data/tokenData.json")


test("Validate Delete Booking",async()=>{
    const authApiHeader = {
        "Content-Type": "application/json"
    }
    const authapiContext =await request.newContext({baseURL:process.env.BASE_URL,extraHTTPHeaders:authApiHeader})
    const authUserService = new UserServices(authapiContext,tokenData)
    const tokenResponse = await authUserService.getAuthToken()
    const tokenJson =await tokenResponse.json()
    const token = tokenJson.token

    await authapiContext.dispose()

    console.log(token)

    const deleteBookingHeaders = {
        "Cookie": `token=${token}`
    }

    const apiContext =await request.newContext({baseURL:process.env.BASE_URL,extraHTTPHeaders:deleteBookingHeaders})

    const userService = new UserServices(apiContext)
    const deleteBookingResponse =await userService.deleteBooking(1)
    const deleteStatus = await deleteBookingResponse.status()
    console.log(deleteStatus)
    console.log(await deleteBookingResponse.text())

})