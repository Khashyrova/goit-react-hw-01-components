import ProtoType from 'prop-types';
import {
  FriendListContainer,
  FriendsList,
  FriendListItem,
  FriendListNameOnLine,
  FriendListNameIsNotOnLine,
  FriendListAvatar,
  FriendListName,
} from './FriendList.module.jsx';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      <FriendsList>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem key={id}>
              {isOnline ? (
                <FriendListNameOnLine>{isOnline}</FriendListNameOnLine>
              ) : (
                <FriendListNameIsNotOnLine>
                  {isOnline}
                </FriendListNameIsNotOnLine>
              )}
              <FriendListAvatar src={avatar} alt="User avatar" width="58" />
              <FriendListName>{name}</FriendListName>
            </FriendListItem>
          );
        })}
      </FriendsList>
    </FriendListContainer>
  );
};

FriendList.ProtoType = {
  avatar: ProtoType.string.isRequired,
  name: ProtoType.string.isRequired,
  isOnline: ProtoType.bool.isRequired,
  id: ProtoType.number.isRequired,
};

export default FriendList;
