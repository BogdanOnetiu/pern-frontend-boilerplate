import { ITitleProps } from '@atoms/Title/ITitle';
import { FC } from 'react';
import '@atoms/Title/Title.css';

const Title: FC<ITitleProps> = ({ label }) => {
  return <h1 className="title">{label}</h1>;
};

export default Title;
