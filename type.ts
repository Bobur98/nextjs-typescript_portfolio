import { SvgIconProps } from '@mui/material';

export interface IService {
  title: string;
  about: string;
  Icon: (props: SvgIconProps) => JSX.Element;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: (props: SvgIconProps) => JSX.Element;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = 'react' | 'node' | 'express' | 'django' | 'mongo';
