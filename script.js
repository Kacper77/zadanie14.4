/*var GalleryItem = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h2', {}, this.props.image.name),
                React.createElement('img', { src: this.props.image.src })
            )
        )
    },
});

var element = React.createElement(GalleryItem);
ReactDOM.render(element, document.getElementById('app'));
*/

var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        actor: 'Daniel Radcliffe',
        image: 'https://static.posters.cz/image/3d/6328.gif'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o lwie',
        actor: 'lew',
        image: 'http://www.gify.net/data/media/1321/krol-lew-ruchomy-obrazek-0162.gif'
    },
    {
        id: 3,
        title: 'Predator',
        desc: 'Komandosi kontra obcy',
        actor: 'Arnold Schwarzenegger',
        image: 'https://media.giphy.com/media/xQvTA5AZ9CFpe/giphy.gif'
    },
    {
        id: 4,
        title: 'Szeregowiec Ryan',
        desc: 'Lądowanie w Normandii',
        actor: 'Tom Hanks',
        image: 'http://education-copyright.org/img/saving-private-ryan-gif-funny.gif'
    },
    {
        id: 5,
        title: 'Obcy-8 pasażer Nostromo',
        desc: 'Sieczka w kosmosie',
        actor: 'Sigourney Weaver',
        image: 'http://www.gifmania.pl/Animowane-Gify-Filmy/Obrazki-Animowane-Film-Fantastycznonaukowy/Animacje-Obcy/Obcy-81665.gif'
    }
];



var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: movie.title }),
                React.createElement(MovieDescription, { desc: movie.desc }),
                React.createElement(MovieActor, { actor: movie.actor }),
                React.createElement(MovieImage, { img: movie.image })
            )
        )
    },
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title),
        )
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc),
        )
    }
});

var MovieActor = React.createClass({
    propTypes: {
        actor: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.actor),
        )
    }
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('img', { src: this.props.image }),
        )
    }
});

var moviesElements = movies.map(function(movie) {
    return (
        React.createElement('Movie', { key: movie.id, movie: movie })
    )
});




ReactDOM.render(element, document.getElementById('app'));