import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { price, name, features } = option;
    return (
        <div className='bg-blue-500 text-white rounded-md p-4 flex flex-col'>
            <h2>
                <span className='md:text-7xl text-xl font-extrabold text-center'>{price}</span>
            </h2>
            <h4 className='md:text-3xl text-lg text-center my-8'>{name}</h4>
            <div className='md:pl-6 md:flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-600 w-72 md:w-full py-2 font-bold rounded-lg 
             hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;