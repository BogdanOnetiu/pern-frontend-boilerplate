'use client';
import { FC } from 'react';
import ProfileTemplate from '@templates/ProfileTemplate/ProfileTemplate';
import { User } from '@organisms/UserCard/IUserCard';
import '@pages/ProfilePage/ProfilePage.css';
import Title from '@atoms/Title/Title';

const ProfilePage: FC = () => {
  const users: User[] = [
    {
      name: 'Jane Doe',
      avatarUrl: 'https://i.pravatar.cc/100?img=5',
      bio: 'Frontend Developer from Berlin.',
    },
    {
      name: 'Donna Joe',
      avatarUrl: 'https://i.pravatar.cc/100?img=5',
      bio: 'Frontend Developer from Berlin.',
    },
    {
      name: 'Janie Doe',
      avatarUrl: 'https://i.pravatar.cc/100?img=5',
      bio: 'Frontend Developer from Berlin.',
    },
    {
      name: 'Dorrothy Doe',
      avatarUrl: 'https://i.pravatar.cc/100?img=5',
      bio: 'Frontend Developer from Berlin.',
    },
  ];

  const handleFollow = (user: User) => {
    alert(`You followed ${user.name}`);
  };

  return (
    <div className="Container">
      <Title label="Users list" />
      <div className="profileList">
        {users.map((user: User) => (
          <ProfileTemplate
            user={user}
            onFollow={() => handleFollow(user)}
            key={`${user.name}-${user.bio}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
