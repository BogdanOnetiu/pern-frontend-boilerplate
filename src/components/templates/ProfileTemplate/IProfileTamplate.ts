import { User } from '@organisms/UserCard/IUserCard';
import { ButtonHTMLAttributes } from 'react';

export interface IProfileTemplateProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  user: User;
  onFollow: (user: User) => void;
}
