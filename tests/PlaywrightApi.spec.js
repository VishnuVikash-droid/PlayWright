import {test,request} from '@playwright/test'
import PostData from '../TestAPI/CreateAPI.json'
import Token from '../TestAPI/Token.json'
import PutData from '../TestAPI/Update.json'

let barierToken="";
let B_id="";

test.describe.serial('PlayWrightApi', async()=>{
// test('Get Book ID', async({request})=>{
//     const response = await request.get('https://restful-booker.herokuapp.com/booking')
//     const body = await response.json()
//     console.log(body)
// })

// test('Get BookID Details', async({request})=>{
//     const response = await request.get('https://restful-booker.herokuapp.com/booking/792')
//     const body = await response.json()
//     console.log(body)
// })

test('Create BookID',async({request})=>{
    const response = await request.post('https://restful-booker.herokuapp.com/booking',
        {
            data:PostData
        }
        )
    const body = await response.json()
    B_id=body.bookingid
    console.log(B_id)
    console.log(body)
})

test('Create Token', async({request})=>{
    const response = await request.post('https://restful-booker.herokuapp.com/auth',
        {
            data:Token
        }
    )
    const statuscode = await response.status()
    const body = await response.json()
    barierToken = await body.token
    console.log(body)
    console.log(barierToken)
    console.log(statuscode)
})

test('Update BookID',async({request})=>{
    const response = await request.put(`https://restful-booker.herokuapp.com/booking/${B_id}`,
        {
        headers:{
            Cookie:`token=${barierToken}`,
            "content-Type":"application/json"
        },
        data:PutData
        }
        )
    const body = await response.json()
    console.log(body)
})
})


