'use strict';

var Bill = require('../models/bill');
var Lineitem = require('../models/lineitem');

var assert = require('assert');


describe('Bill', function() {
 
  describe('#discountHundreds(total)', function () {
      // test hundred discount
      it('test multi hundreds (990 expect 45)', function () {
      var bill = new Bill([]);
      assert.equal(45, bill.discountHundreds(990));
     });
       // test hundred discount
       it('test multi hundreds (99 expect 0)', function () {
       var bill = new Bill([]);
       assert.equal(0, bill.discountHundreds(99));
     });
        // test hundred discount
        it('test multi hundreds (100 expect 5)', function () {
        var bill = new Bill([]);
        assert.equal(5, bill.discountHundreds(100));
     });
  }); 
     
     
  describe('#totalWithDiscount(discount)', function () {
       it('test percent discount total should be 65', function () {
       var lineitem1 = new Lineitem({ is_grocery : false, price : 10 });
       var lineitem2 = new Lineitem({ is_grocery : true, price : 20 });
       var lineitem3 = new Lineitem({ is_grocery : false, price : 40 });
       var bill = new Bill([lineitem1,lineitem2,lineitem3]);         
       assert.equal(65, bill.totalWithDiscount(0.1));
      });  
       it('test hundreds discount total should be 105', function () {
       var lineitem1 = new Lineitem({ is_grocery : false, price : 10 });
       var lineitem2 = new Lineitem({ is_grocery : true, price : 100 });
       var bill = new Bill([lineitem1,lineitem2]);         
       assert.equal(105, bill.totalWithDiscount(0.0));
      });   
       it('test hundreds and percentage discount (% goes under 99) total should be 100', function () {
       var lineitem1 = new Lineitem({ is_grocery : false, price : 10 });
       var lineitem2 = new Lineitem({ is_grocery : false, price : 100 });
       var bill = new Bill([lineitem1,lineitem2]);         
       assert.equal(99, bill.totalWithDiscount(0.1));
      });
       it('test hundreds and percentage discount (% goes over 117) total should be 100', function () {
       var lineitem1 = new Lineitem({ is_grocery : false, price : 30 });
       var lineitem2 = new Lineitem({ is_grocery : false, price : 100 });
       var bill = new Bill([lineitem1,lineitem2]);         
       assert.equal(112, bill.totalWithDiscount(0.1));
      });
       it('test no discout', function () {
       var lineitem1 = new Lineitem({ is_grocery : false, price : 30 });
       var lineitem2 = new Lineitem({ is_grocery : false, price : 30 });
       var bill = new Bill([lineitem1,lineitem2]);         
       assert.equal(60, bill.totalWithDiscount(0.0));
      });
  });
      
   
});



// test percentage discount
//var discount = user.getDiscount();





// test hundred discount and percentage


