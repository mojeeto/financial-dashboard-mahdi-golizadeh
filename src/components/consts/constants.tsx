import { AnalysIcon, ChartBarIcon } from "components/utils/Icons/ChartIcons";
import HomeIcon from "components/utils/Icons/HomeIcon";
import LogoutIcon from "components/utils/Icons/LogoutIcon";
import NotifyIcon from "components/utils/Icons/NotifyIcon";
import SettingIcon from "components/utils/Icons/SettingIcon";
import ShoppingIcon from "components/utils/Icons/ShoppingIcon";
import WalletIcon from "components/utils/Icons/WalletIcon";

export const MenuItems = {
  ids: [
    "home",
    "shopping",
    "notify",
    "analys",
    "chartbar",
    "wallet",
    "logout",
    "setting",
    "user",
  ] as const,
  top: [
    {
      id: "home",
      title: "Home",
      outline: <HomeIcon />,
      solid: <HomeIcon type="solid" />,
    },
    {
      id: "shopping",
      title: "Shopping",
      outline: <ShoppingIcon />,
      solid: <ShoppingIcon type="solid" />,
    },
    {
      id: "notify",
      title: "Notify",
      outline: <NotifyIcon />,
      solid: <NotifyIcon type="solid" />,
    },
    {
      id: "analys",
      title: "Analys of Sells",
      outline: <AnalysIcon />,
      solid: <AnalysIcon type="solid" />,
    },
    {
      id: "chartbar",
      title: "Chart of Sells",
      outline: <ChartBarIcon />,
      solid: <ChartBarIcon type="solid" />,
    },
    {
      id: "wallet",
      title: "Wallet",
      outline: <WalletIcon />,
      solid: <WalletIcon type="solid" />,
    },
  ],
  bottom: [
    {
      id: "logout",
      title: "Logout",
      outline: <LogoutIcon />,
      solid: <LogoutIcon />,
    },
    {
      id: "setting",
      title: "Setting",
      outline: <SettingIcon />,
      solid: <SettingIcon type="solid" />,
    },
  ],
};
