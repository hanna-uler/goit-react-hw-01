import Profile from "../Profile/Profile";
import userData from "../../userData.json";

export default function App() {
  return (
    <div>
      <Profile
        image={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
    </div>
  )
};