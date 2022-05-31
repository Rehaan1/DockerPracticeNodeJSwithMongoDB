const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/userModel')

const app = express()

mongoose.connect('mongodb://mongodb:27017/test-db', //alias used for ip if mongodb 
	{useNewUrlParser:true})
	.then(()=>{
		console.log('MongoDB Connected')
	})
	.catch( (err) => {
		console.log(err)
	})

app.get('/',(req,res)=>{
res.status(200).json({
		message: "Good Job"
	})
})

app.get('/addItem',(req,res)=>{
	new UserModel({
		age: 20,
		gender: "male"
	})
	.save()
	.then((newUserModel) => {
		return res.status(200).json({
			status: 200,
			message: 'Data Entered succesfully'
		  })
	})
	.catch((error) => {
		return res.status(400).json({
		  status: 400,
		  success: false,
		  error: error
		})
	  })
})

app.get('/getItem',(req,res)=>{
	UserModel.find()
	.then((users) =>{
		return res.status(200).json({
			status: 200,
			message: users
		  })
	})
	.catch((err) => {
		return res.status(400).json({
		  status: 400,
		  success: false,
		  error: err
		})
	  })
})

app.listen(3000, () =>{
console.log("SERVER UP AND RUNNING AT PORT 3000")
})
