import styled from 'styled-components';
export const FriendListContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
  border-radius: 5px;
  margin-bottom: 50px;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const FriendListItem = styled.li`
  position: relative;
  width: calc((100% - 120px) / 2);
  display: flex;
  align-items: center;
  padding: 50px;
  gap: 30px;
  background-color: beige;
  border: 1px solid rgba(95, 103, 117, 0.25);
  box-shadow: 0px 5px 5px rgba(95, 103, 117, 0.25);
`;

export const FriendListAvatar = styled.img`
  border: 1px solid rgba(95, 103, 117, 0.25);
  border-radius: 30%;
  padding: 10px;
`;

export const FriendListNameOnLine = styled.span`
  position: absolute;
  left: 10px;
  display: block;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: green;
`;

export const FriendListNameIsNotOnLine = styled.span`
  position: absolute;
  left: 10px;
  display: block;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: red;
`;
export const FriendListName = styled.p``;
