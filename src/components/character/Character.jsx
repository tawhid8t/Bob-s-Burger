import PropTypes from 'prop-types';
const Character = ({ character }) => {
    const { name, image, gender, hair, occupation } = character

    return (
        <div className='border-2 rounded-xl px-4 pb-4'>
            <div className='w-48 h-48 mx-auto p-4'>
                <img className='w-full h-full rounded-2xl' src={image} alt="" />
            </div>
            <h3 className='text-center cartoon'>{name}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Hair: {hair}</h3>
            <h3>Occupation: {occupation}</h3>
            <div className='w-full'>
                <button className='flex justify-center border-2 mt-4 mx-auto px-4 py-2 rounded-xl bg-[#2C3E50] text-white cursor-pointer button hover:bg-[#34495E] button'>Select</button>
            </div>
        </div>
    );
};

Character.propTypes = {
    character: PropTypes.object.isRequired
}
export default Character;