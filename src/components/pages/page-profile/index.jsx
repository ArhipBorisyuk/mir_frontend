import './styles.css'
import {ProfilePhoto} from './Profile-elements/ProfilePhoto'
import { ProfileFio } from './Profile-elements/ProfileFio';
import { PageAboutMe } from './Profile-elements/ProfileAboutMe';
import { Headertop } from '../../header/header';

export const PageProfile = () => {
    return (
        <div>
            <Headertop/>

            <div className='PageWrapper'>

                <div className='col-3'>
                    <ProfileFio/>
                </div>

                <div className='col-1 change_button-container'>
                    <button className='change_button'>⌯</button>
                </div>
                
                <ProfilePhoto/>

                <div className='col-10'>
                    <PageAboutMe/>
                </div>
                
            </div>
            
        </div>
    );
};
