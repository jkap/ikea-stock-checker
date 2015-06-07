'use strict';

var config = require('./config'),
  xml2js = require('xml2js'),
  request = require('request'),
  _ = require('lodash');

var stockChecker = {},
  parser = new xml2js.Parser();

function boolFromString(str) {
  return str === 'true';
}


stockChecker.forProduct = function forProduct(productId, storeId, cb) {
  function xmlToStockObject(err, result) {
    if (err) {
      return cb(err);
    }

    var availability = result['ir:ikea-rest'].availability[0].localStore;

    var stock = _(availability).indexBy('$.buCode').get(storeId).stock[0];
    var returned = {};
    _.assign(returned, {
      partNumber: stock.partNumber[0],
      isMultiProduct: boolFromString(stock.isMultiProduct[0]),
      isSoldInStore: boolFromString(stock.isSoldInStore[0]),
      availableStock: +stock.availableStock[0],
      inStockProbabilityCode: stock.inStockProbabilityCode[0],
      validDate: new Date(stock.validDate[0])
    });

    returned.forecasts = _.map(stock.forecasts[0].forcast, function (forecast) {
      return {
        validDate: new Date(forecast.validDate[0]),
        dayOffset: +forecast.dayOffset[0],
        availableStock: +forecast.availableStock[0],
        inStockProbabilityCode: forecast.inStockProbabilityCode[0]
      };
    });

    returned.findItList = _.map(stock.findItList[0].findIt, function (findIt) {
      var obj = {
        partNumber: findIt.partNumber[0],
        quantity: findIt.quantity[0],
        type: findIt.type[0]
      };

      if (findIt.box && findIt.shelf) {
        obj.box = findIt.box[0];
        obj.shelf = findIt.shelf[0];
      }

      return obj;
    });

    cb(null, returned);
  }

  var url = `${config.baseAvailabilityUrl}${productId}`;

  request.get(url, function (err, resp, body) {
    if (err) {
      return cb(err);
    }

    parser.parseString(body, xmlToStockObject);
  });
};

module.exports = exports = stockChecker;
