class usersControllers {
    createUsers(request, response){
        const { name, email, password } = request.body;
        response.json({name, email, password});
    };
};

module.exports = usersControllers;