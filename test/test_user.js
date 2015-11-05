'use strict';

var User = require('../models/user');

var TWO_YEARS=365*2;
var DAYS=1000*60*60*24;

var assert = require('assert');


describe('User', function() {
 
  describe('#isMoreThanTwoYears()', function () {
      // under 2 year test
      it('should return false for date when under 2 years', function () {
      var user = new User({ joined : new Date(2015,1,1),
                            is_affiliate : false,
                            is_employee : false });
      assert.equal(false, user.isMoreThanTwoYears(new Date(2015,1,1)));
     });
     // over 2 year test
      it('should return true for date when under 2 years', function () {
      var user = new User({ joined : new Date(new Date(2015,1,1).getTime()-TWO_YEARS*DAYS-1),
                            is_affiliate : false,
                            is_employee : false });
      assert.equal(true, user.isMoreThanTwoYears(new Date(2015,1,1)));
     });
     
     // Leap year tests
     
   });
 
  describe('#getDiscoutPercent()', function () {
    // test employee discount
    it('should return 0.3 for employee discount', function () {
    var user = new User({ joined : new Date(),
                          is_affiliate : false,
                          is_employee : true });
    assert.equal(0.3, user.getDiscoutPercent());
    });
    // test affiliate discount
    it('should return 0.1 for affiliate discount', function () {
      var user = new User({ joined : new Date(),
                            is_affiliate : true,
                            is_employee : false });
      assert.equal(0.1, user.getDiscoutPercent());
    });
    // test time discount
    it('should return 0.05 for time discount', function () {
      var user = new User({ joined : new Date(new Date().getTime()-TWO_YEARS*DAYS-1),
                            is_affiliate : false,
                            is_employee : false });
      assert.equal(0.05, user.getDiscoutPercent());
    });
    
    // test user affiliate and employee discount
    it('should return 0.3 for affiliate and employee', function () {
      var user = new User({ joined : new Date(),
                            is_affiliate : true,
                            is_employee : true });
      assert.equal(0.3, user.getDiscoutPercent());
    });
    // test user affiliate and time discount
    it('should return 0.1 for affiliate and time discount', function () {
      var user = new User({ joined : new Date(new Date().getTime()-TWO_YEARS*DAYS-1),
                            is_affiliate : true,
                            is_employee : false });
      assert.equal(0.1, user.getDiscoutPercent());
    });    
    
    
    // test user employee and time discount
    it('should return 0.3 for employee and time discount', function () {
      var user = new User({ joined : new Date(new Date().getTime()-TWO_YEARS*DAYS-1),
                            is_affiliate : false,
                            is_employee : true });
      assert.equal(0.3, user.getDiscoutPercent());
    });
    
    // test user affiliate,employee and time discount
    it('should return 0.3 affiliate,employee and time discount', function () {
      var user = new User({ joined : new Date(new Date().getTime()-TWO_YEARS*DAYS-1),
                            is_affiliate : true,
                            is_employee : true });
      assert.equal(0.3, user.getDiscoutPercent());
    });     
    
    
    // test user no discoount
    it('should return 0.0 no discount', function () {
      var user = new User({ joined : new Date(),
                            is_affiliate : false,
                            is_employee : false });
      assert.equal(0.0, user.getDiscoutPercent());
    });
  });
});











