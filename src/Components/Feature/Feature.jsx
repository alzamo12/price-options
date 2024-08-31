import PropTypes from 'prop-types'
import { IoIosCheckmarkCircle } from "react-icons/io";


const Feature = ({feature}) => {
    return (
        <div className='flex md:items-center justify-start md:justify-center '>
            <IoIosCheckmarkCircle className='mr-2'></IoIosCheckmarkCircle>
            <p className='text-sm md:text-xl w-64'>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired
}

export default Feature;