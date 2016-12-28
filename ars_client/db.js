const db = require('monk')('localhost/ars')


function logTrans(service,wsdl, stamp) {
  var trans = db.get('trans')
  const transaction = {}
  transaction.servie = service
  transaction.wsdl = wsdl
  transaction.stamp = stamp

  trans.insert(transaction, (err,data) => {
    trans.count({}, (e,count) => {
      console.log(count);
      db.close()
    })
  })
}
//
// var trans = db.get('trans')
//
// trans.find({}, (err, data) => {
//   console.log(data);
// })
//
// var trans = db.get('trans')
//
// trans.count({}, function (error, count) {
//   console.log(error, count);
// });
//
// db.close()


module.exports = logTrans;
