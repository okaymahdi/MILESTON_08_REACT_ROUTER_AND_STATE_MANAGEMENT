import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-3 px-6 hover:bg-yellow-500">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;