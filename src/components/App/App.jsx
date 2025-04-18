import Profile from "../Profile/Profile";
import userData from "../../userData.json";

const {username, tag, location, avatar, stats} = userData;

export default function App() {
  return (
    <div>
      <Profile
        image={avatar}
        name={username}
        tag={tag}
        location={location}
        stats={stats}
      />
    </div>
  )
};