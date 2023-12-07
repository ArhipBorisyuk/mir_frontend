import './styles.css'
import exampleImage from './ExampleImage.png';

export const ProfilePhoto = () => {
    return (
        <div className='image-wrapper'>
            <div className='image-container'>
                <img src={exampleImage} alt=''/>
            </div>
        </div>
    );
};