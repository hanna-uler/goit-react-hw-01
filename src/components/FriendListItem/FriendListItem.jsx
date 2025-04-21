import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
    <div>
        <img className={clsx(css.avatar, css[isOnline ? "online" : "offline"])} src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={clsx(css[isOnline ? "online" : "offline"])}>
            {isOnline
                ? "Online"
                : "Offline"
            }
        </p>
        </div>
    )
};
                    
                    
                    