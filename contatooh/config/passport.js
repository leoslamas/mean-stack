var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function () {

    passport.use(new GitHubStrategy({
        clientID: '***REMOVED***',
        clientSecret: '***REMOVED***',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function (accessToken, refreshToken, profile, done) {
    }));

};