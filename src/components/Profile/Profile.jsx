import ProtoType from 'prop-types';
import './Profile.modules.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="item-prof">
          <span className="label-prof ">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="item-prof">
          <span className="label-prof ">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="item-prof">
          <span className="label-prof ">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.ProtoType = {
  username: ProtoType.string.isRequired,
  tag: ProtoType.string.isRequired,
  location: ProtoType.string.isRequired,
  followers: ProtoType.number.isRequired,
  views: ProtoType.number.isRequired,
  likes: ProtoType.number.isRequired,
};

export default Profile;
