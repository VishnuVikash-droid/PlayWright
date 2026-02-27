import{test,request}from '@playwright/test'
import postData from '../data/Create.json'
import token from '../data/token.json'
import putData from '../data/update.json'

let barierToken="";
let B_id="";
// test('Get Booking id',async({request})=>{
// const response=await request.get('https://restful-booker.herokuapp.com/booking')
// const body=await response.json()
// console.log(body)
// })

test.describe.serial('API',async()=>{
// test('Get Booking id Details',async({request})=>{
// const response=await request.get(`https://restful-booker.herokuapp.com/booking/${B_id}`)
// const body=await response.json()
// console.log(body)
// })

test('Create Booking id',async({request})=>{
const response=await request.post('https://restful-booker.herokuapp.com/booking',
    {
        data:postData
    }
)
const body=await response.json()
B_id=body.bookingid
console.log(body)
})

test('Create Token',async({request})=>{
    const response=await request.post('https://restful-booker.herokuapp.com/auth',
        {
            data:token
        }
    )
const statuscode=await response.status()
const body=await response.json()
barierToken=await body.token;
console.log(body)
console.log(statuscode)
})

test('Update api',async({request})=>{
const response=await request.put(`https://restful-booker.herokuapp.com/booking/${B_id}`,{
    headers:{
        cookie:`token=${barierToken}`,
        "content-type":"application/json"
    },
    data:putData
})
const body=await response.json();
const code=await response.status()
console.log(body)
console.log(code)
})
})