let React = require('react');
let Link = require('react-router').Link;

class HomePage extends React.Component {
    render () {
        return (
            <div className = "jumbotron">
                <h1> Pluralsight Administration </h1>
                <p> React , Redux and React Router in ES6 </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;