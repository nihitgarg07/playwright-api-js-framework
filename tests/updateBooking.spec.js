const{test,expect,request} = require("@playwright/test")
const {UserServices} = require("../api/services/userServices")
const tokenData = require("../api/test-data/tokenData.json")
const bookingData = require("../api/test-data/createBooking.json")

test("Validate full Booking Update", async()=>{

    //Below code is for Creation of token

     const tokenheaders = {
        "Content-Type": "application/json"
    }
    const tokenapiContext = await request.newContext({baseURL:process.env.BASE_URL,extraHTTPHeaders:tokenheaders})

    const userService = new UserServices(tokenapiContext,tokenData)

    const tokenResponse = await userService.getAuthToken()
    const tokenDataResponse = await tokenResponse.json()
    const token = tokenDataResponse.token

    await tokenapiContext.dispose()
    // Below code is for updating the token in headers and then pass in in the headers of post

    const headers = {
        "Content-Type": "application/json",
        "Accept": `application/json`,
        "Cookie": `token=${token}`
    }

    const apiContext = await request.newContext({baseURL:process.env.BASE_URL,extraHTTPHeaders:headers})
    const bookingUserService = new UserServices(apiContext,bookingData)
    const bookingResponse =await bookingUserService.updateBookingData(692)
    const bookingDataResponse = await bookingResponse.json()
    expect(bookingResponse.status()).toBe(200)
    expect(bookingDataResponse.firstname).toBe('NG')


    //below code is for patch

    const PatchService = new UserServices(apiContext,{"firstname" : "UN","lastname" : "Brown"})
    const putResponse = await PatchService.partialUpdateBookindData(692)
    const putResponseData = await putResponse.json()
    expect(putResponse.status()).toBe(200)
    expect(putResponseData.firstname).toContain("UN")
    expect(putResponseData.lastname).toContain("Br")

    })