export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  fixedWidth?: boolean;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
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
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
}
