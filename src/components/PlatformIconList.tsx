import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
import type { Platform } from "../hooks/usePlatforms";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    // means the keys are strings and the values are of type IconType
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <div className="flex items-center gap-2">
      {platforms.map((platform) => {
        {
          /* If the platform slug doesn't match any key in the iconMap, it will default to BsGlobe */
        }
        const IconComponent = iconMap[platform.slug] ?? BsGlobe;
        {
          /* Convert Icon to built-in React component */
        }
        return (
          <IconComponent
            key={platform.slug}
            className="w-6 h-6 text-blue-500 hover:text-blue-700"
          />
        );
      })}
    </div>
  );
};

export default PlatformIconList;
