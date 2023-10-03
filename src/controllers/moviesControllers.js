class moviesControllers {
    createMovies(request, response){
        const { title, description, rating } = request.body;
        response.json({title, description, rating});
    };
};

module.exports = moviesControllers;