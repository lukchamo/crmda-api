var admin = require("../firebase")

function createUser(req, res) {
	const body = req.body

	if (body.email && body.password) {
		admin.auth().createUser({
			email: body.email,
			password: body.password
		})
		.then(userRecord => res.status(200).json({ createdUser: userRecord.toJSON() }))
		.catch(err => res.status(500).json({ error: err }))
	} else {
		res.status(422).json({ error: "No se proporcionaron los datos necesarios para crear el usuario." })
	}
}

function deleteUser(req, res) {
	if (req.params.uid) {
		admin.auth().updateUser(req.params.uid, { disabled: true })
			.then(userRecord => res.status(200).send({ deletedUser: userRecord.toJSON() }))
			.catch(err => res.status(500).send({ error: err }))
	}
}

module.exports = { createUser, deleteUser }