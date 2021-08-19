


function checksession(req,res){


    if (! req.session.loginemail) {
        return res.redirect('/login');

    }


}

exports.index = (req, res, next) => {
    checksession(req,res);
    //  console.log(req.session);

    res.render('voting/index', { title: 'Hey', message: 'Hello there!' })
};

exports.create = (req, res, next) => {
    checksession(req,res);
    //  console.log(req.session);

    res.render('voting/create', { title: 'Hey', message: 'Hello there!' })
};