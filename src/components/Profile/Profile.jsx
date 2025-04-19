import css from "./Profile.module.css";

export default function Profile({ image, name, tag, location, stats }) {
    return (
        <div className={css.profile}>
            <div className={css.user}>
                <img className={css.avatar}
                    src={image}
                    alt={name}
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.statItem}>
                    <span className={css.span}>Followers</span>
                    <span className={css.span}>{stats.followers}</span>
                </li>
                <li className={css.statItem}>
                    <span className={css.span}>Views</span>
                    <span className={css.span}>{stats.views}</span>
                </li>
                <li className={css.statItem}>
                    <span className={css.span}>Likes</span>
                    <span className={css.span}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}