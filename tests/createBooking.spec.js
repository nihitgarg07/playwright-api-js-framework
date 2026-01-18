const {test,expec,request, expect} = require("@playwright/test")
const { UserServices } = require("../api/services/userServices")
const bookingData = require("../api/test-data/createBooking.json")

test("Validate Create Bookings",async ()=>{
    const headers = {
        "Content-Type": "application/json"
    }
    const apiContext = await request.newContext({baseURL:process.env.BASE_URL,extraHTTPHeaders:headers})
    const UserService = new UserServices(apiContext,bookingData)
    const bookingResponse = await UserService.createBookingData()
    const bookingDataResponse = await bookingResponse.json()
    expect(bookingDataResponse.bookingid).not.toBeNull()
    expect(bookingResponse.status()).toBe(200)
    
})