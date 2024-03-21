import PropTypes from 'prop-types';
import Feature from '../Features/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='flex flex-col bg-blue-600 rounded-lg p-4 text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>

            {/* features */}
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 w-full py-2 bg-green-600 font-bold rounded-lg hover:bg-green-900'>Bay Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;