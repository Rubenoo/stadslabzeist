import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export const ScrollableBlock = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visible: boolean) => {
    setIsVisible(visible);
  };
  console.log("Visible:", isVisible);
  return (
    <VisibilitySensor
      className={isVisible ? "scrollable" : ""}
      onChange={onChange}
      partialVisibility="bottom"
    >
      {children}
    </VisibilitySensor>
  );
};
