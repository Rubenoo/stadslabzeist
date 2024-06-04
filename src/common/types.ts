export interface ContainerProps {
  border?: boolean;
  backgroundsvg?: string;
  backgroundcolor?: string;
  children: React.ReactNode;
}

export interface Project {
  title: string;
  titleColor: string;
  introText: string;
  mainText: string;
  images?: Array<ProjectImage>;
  links?: Array<ProjectLink>;
  logo?: string;
  logoText?: string;
  color: string;
}

export interface ProjectImage {
  title: string;
  src: string;
}
export interface ProjectLink {
  src: string;
  text: string;
}

export interface ButtonProps {
  backgroundcolor?: string;
  textcolor?: string;
  fixedWidth?: boolean;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
  linkTo?: string;
}

declare global {
  interface Window {
    fullpage_api: any;
  }
}
export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
  className?: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

export interface validateProps {
  naam: string;
  bericht: string;
  onderwerp: string;
  email: string;
}
