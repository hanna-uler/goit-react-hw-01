import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => {
                return <li className={css.friend} key={friend.id}>
                    <img src={friend.avatar} alt="Avatar" width="48" />
                    <p>{friend.name}</p>
                    <p>
                        {friend.isOnline
                            ? "Online"
                            : "Offline"
                        }
                    </p>
                </li>;
            })}
        </ul>
    );
};

