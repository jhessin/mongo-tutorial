const express = require('express')
const router = express.Router()
const Country = require('../models/Country')

router.get('/', (req, res, next) => {
	const query = req.query

	Country.find(query)
	.then(countries => {
		res.json({
			confirmation: 'success',
			data: countries 
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message 
		})
	})
})

router.get('/add', (req, res, next) => {
	const details = req.query

	Country.create(details)
	.then(country => {
		res.json({
			confirmation: 'success',
			data: country
		})	
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/update/:id', (req, res, next) => {
	const udpatedDetails = req.query
	const countryId = req.params.id

	Country.findByIdAndUpdate(countryId, udpatedDetails, {new:true})
	.then(country => {
		res.json({
			confirmation: 'success',
			data: country
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/:id', (req, res, next) => {
	Country.findById(req.params.id)
	.then(country => {
		res.json({
			confirmation: 'success',
			data: country
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'Country ' + req.params.id + ' not found' 
		})
	})
})

module.exports = router