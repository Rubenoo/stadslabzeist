import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, className }: SvgIconProps) => (
  <img
    loading="eager"
    src={process.env.PUBLIC_URL + `/img/svg/${src}`}
    alt={src}
    width={width}
    height={height}
    className={className}
  />
);
