import { IconTypes } from "./types/IconTypes";

export function Icon({ icon }: IconTypes) {
  const iconWrapper = document.createElement("span");

  iconWrapper.append(iconWrapper);

  return { iconWrapper }
}