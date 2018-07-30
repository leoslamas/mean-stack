var Logar = new require('./passwords');
var l = new Logar();

exports.config = {
    specs: ['../test/e2e/**/*.js'],
    onPrepare: function () {
        browser.driver.get('http://localhost:3000/#/auth');
        browser.driver.findElement(by.id('entrar')).click();
        browser.driver.findElement(by.id('login_field'))
            .sendKeys(l.login());
        browser.driver.findElement(by.id('password'))
            .sendKeys(l.pass());
        browser.driver.findElement(by.name('commit')).click();
    }
};