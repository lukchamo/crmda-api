var admin = require("firebase-admin")
var serviceAccount = require("./serviceAccount.json")

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://crm-diagnostiautos.firebaseio.com/"
})

//https://crm-diagnostiautos.firebaseio.com/
//https://dev-crmd.firebaseio.com

module.exports = admin