import React, {createContext, ReactNode, useContext} from 'react';
import {IconBundle} from "./IconBundle";

export const IconContext = createContext<IconBundle|undefined>(undefined);
export const useIcons = () => {
  const icons = useContext(IconContext) as IconBundle;
  return icons ? icons : {icons:{}};
}

type Props = {
  icons?:IconBundle;
  children:ReactNode;
}

export const IconProvider = (props:Props) => {
  const {icons = {icons:{}}, children} = props;
  return (
    <IconContext.Provider value={icons}>
      {icons.linkUrl && <link rel={"stylesheet"} href={icons.linkUrl} />}
      {children}
    </IconContext.Provider>
  )
}