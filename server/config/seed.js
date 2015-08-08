/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'StoreFront',
    info : 'Awning Cleaning $2.00 per foot one Customer a per day only!'
  }, {
    name : 'Restaurant',
    info : '.10 per foot Standard Wash Includes: Exterior Wash + Windows one Customer a per day only!'
  }, {
    name : 'Residential',
    info : '.10 per sqft flat rate fee any type/size exterior house one Customer a per day only!'
  },  {
    name : 'Auto',
    info : 'First complete detail $90 one Customer a per day only!'
  },  {
    name : 'Roof',
    info : '$25 off low pressure roof cleaning package one Customer a per day only!'
  },{
    name : 'Active Military Discount',
    info : '%10 off always with current active military ID'
  });
});




User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'shauncfranks1124@gmail.com',
    password: 'shaun'
  }, function() {
      console.log('finished populating users');
    }
  );
});
