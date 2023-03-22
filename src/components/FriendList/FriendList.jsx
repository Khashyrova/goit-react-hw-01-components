import ProtoType from 'prop-types';
import './FriendList.modules.css';

const FriendList = ({ friends }) => {
  return (
    <div className="friend-container">
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li className="friend-item" key={id}>
              {isOnline ? (
                <span className="status-on-line">{isOnline}</span>
              ) : (
                <span className="status">{isOnline}</span>
              )}
              <img
                className="friend-avatar"
                src={avatar}
                alt="User avatar"
                width="58"
              />
              <p className="friend-name">{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.ProtoType = {
  avatar: ProtoType.string.isRequired,
  name: ProtoType.string.isRequired,
  isOnline: ProtoType.bool.isRequired,
  id: ProtoType.number.isRequired,
};

export default FriendList;
