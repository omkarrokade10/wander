const express = require('express');
const router=express.Router({mergeParams:true});
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const { reviewSchema } = require('../schema.js');
const Review = require('../models/review.js');
const Listing = require('../models/listing');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware.js');
const { createNewReview, deleteReview } = require('../controllers/reviews.js');


// Reviews post route
router.post("/",isLoggedIn, validateReview ,wrapAsync(createNewReview));

//Delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(deleteReview));

module.exports = router;