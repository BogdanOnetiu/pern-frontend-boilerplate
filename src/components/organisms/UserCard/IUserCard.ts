export interface User {
  name: string;
  avatarUrl: string;
  bio: string;
}

export interface UserCardProps {
  user: User;
  onFollow: (user: User) => void;
}
