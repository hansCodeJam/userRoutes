const moment = require('moment')

const myMoment = (req, res, next) => { 
     console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
     //console.log('Hello')
     next();
}

module.exports = {
    myMoment
};