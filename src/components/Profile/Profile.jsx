import ProtoType from 'prop-types';
import {
  ProfileBody,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileItem,
  ProfileLabel,
  ProfileQuantity,
} from './Profile.module.jsx';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileBody>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>
      <ProfileStats>
        <ProfileItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{followers}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{views}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{likes}</ProfileQuantity>
        </ProfileItem>
      </ProfileStats>
    </ProfileBody>
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
