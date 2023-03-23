import styled from 'styled-components';

export const ProfileBody = styled.div`
  margin: 0 auto;
  background-color: beige;
  padding: 20px;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
  border: 1px solid #010101;
  border-radius: 5px;
  margin-bottom: 40px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ProfileAvatar = styled.img`
  width: 100%;
  height: auto;
`;

export const ProfileName = styled.p``;
export const ProfileTag = styled.p``;
export const ProfileLocation = styled.p``;
export const ProfileStats = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProfileItem = styled.li`
  width: 175px;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid #010101;
  background-color: #fff;
`;

export const ProfileLabel = styled.span`
  font-weight: 300;
`;

export const ProfileQuantity = styled.span`
  font-weight: 700;
`;
