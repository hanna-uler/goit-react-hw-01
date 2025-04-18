import css from "./Profile.module.css";

export default function Profile({ image, name, tag, location, stats }) {
    return (
        <div className={css.profile}>
            <div>
                <img
                    src={image}
                    alt={name}
                />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}