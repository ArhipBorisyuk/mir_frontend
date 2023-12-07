import './style.css'

export const Menu = ({onExitClick, onSettingsClick}) => {
    return(
        <div className='menu-wrapper'>
            <div className='menu-container'>
                <div className='menu-button-exit-container'>
                    <button onClick={onExitClick} className='menu-button'>···</button>
                </div>
                <div className='menu-content'>
                    <button onClick={onSettingsClick} className='menu-button'>Настройки</button>
                </div>
                <div className='menu-content'>
                    <button className='menu-button'>Lorem</button>
                </div>
                <div className='menu-content'>
                    <button className='menu-button'>Upsum</button>
                </div>
            </div>
        </div>
    );
};