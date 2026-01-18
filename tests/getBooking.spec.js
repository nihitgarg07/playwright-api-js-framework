const{test,expect,request} = require("@playwright/test")
const {UserServices} = require("../api/services/userServices")
test("Validate get booking",async()=>{
    const id = 692 // id here is hardcoded which is not right approach currently using this for practice
    const apiContext = await request.newContext({baseURL:process.env.BASE_URL})
    const userService = new UserServices(apiContext)
    const bookingResponse = await userService.getBooking(id)
    const jsonBookingData = await bookingResponse.json()
    console.log(jsonBookingData)
    expect(jsonBookingData.additionalneeds).toBe("super bowls")
    expect(bookingResponse.status()).toBe(200)




})