class moviesTagsController{
    createTags (request, response){
        const { id, name} = request.body;
        response.json({id, name});
    };
};

module.exports = moviesTagsController;