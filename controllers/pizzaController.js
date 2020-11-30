exports.index =  (req, res, next) => {
    res.render('pizza/list');
};

exports.details = (req, res, next) => {
    res.render('pizza/detail');
}