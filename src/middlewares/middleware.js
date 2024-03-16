module.exports = (req, res, next) => {
    console.log();
    console.log('Paseei no middleware global');
    console.log();

    next();
}