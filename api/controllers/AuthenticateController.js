/**
 * AuthenticateController
 * 
 * @description :: Server-side logic for managing authenticates
 * @help :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
		authenticate : function(req, res) {
			var username = req.param('username');
			//var user = {};
			//user.username = username;
			//user.id  = 4;
			//return res.json({success: true, user: user, token: tokenAuth.issueToken(user)});
			if (!username) {
				return res.send({
					success: false, 
					message: 'Informe o identificador'
				}, 401);
			}

			User.findOneByUsername(username, function(err, user) {
				if (!user) {
					return res.send({
						success: false, 
						message: 'Identificador inexistente'
					}, 403);
				} else {
					return res.json({success: true, user: user, token: tokenAuth.issueToken(user)});
					//return res.send({
					//	success: true,
					//	token: tokenAuth.issueToken(user)
					//	}, 200);
					//return res.send({
					//	success: true 
					//}, 200);					
				}
				/*
				User.validPassword(password, user, function(err, valid) {
					if (err) {
						return res.json(403, {
							err : 'forbidden'
						});
					}

					if (!valid) {
						return res.json(401, {
							err : 'invalid email or password'
						});
					} else {
						res.json({
							user : user,
							token : sailsTokenAuth.issueToken(user.id)
						});
					}
				});
				*/
			})
			
			//return res.send({ success: true }, 200);
		}
};
