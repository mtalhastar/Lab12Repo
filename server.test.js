const request = require("jest")
const app = require("./routes/User")
//const mongoose = require("mongoose")

//const request = require('supertest');
// app is supposed to point to the app.js file

test.todo("It should response the Get method "),()=>{
    const response = request(app).post("http://localhost:5000/User/add").json({
        "Name":"fAIZAN",
        "Email":"Age",
        "Age":12,
        "Contact":123
    })
    expect(response.statusCode).toBe(200)

}


test.todo("It should response the Get method "),()=>{
        const response = request(app).delete("http://localhost:5000/User/:id").json({
            "Name":"Obaid",
            "Email":"obaid ", 
            "Age":12, 
            "Contact":123
        })
        expect(response.statusCode).toBe(2000000)
    
 }

                                                                         
    



