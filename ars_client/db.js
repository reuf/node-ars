const db = require('monk')('localhost/ars')


function logTrans(service,wsdl) {
  var trans = db.get('trans')
  const transaction = {}
  transaction.servie = service
  transaction.wsdl = wsdl
  transaction.stamp = new Date().getTime()

  trans.insert(transaction, (err,data) => {
  })
  db.close()
}

var trans = db.get('trans')

trans.find({}, (err, data) => {
  console.log(data);
})

var trans = db.get('trans')

trans.count({}, function (error, count) {
  console.log(error, count);
});

db.close()


module.exports = logTrans;
