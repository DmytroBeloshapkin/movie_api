import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.UserInfo}>
            <img src="https://avatars.githubusercontent.com/u/97446822?v=4" alt="userPhoto"/>
            <p>Beloshapkin Dmytro</p>

        </div>
    );
};

export {UserInfo};