import { ReactFunctionComponent, MenuItemsIds } from "components/consts/types";
import { MenuItems } from "components/consts/constants";
import { useState } from "react";

const Menu: ReactFunctionComponent = () => {
  const [activeItemId, setActiveItemId] = useState<MenuItemsIds>("home");

  const onClick = (item: MenuItemsIds) => {
    setActiveItemId(item);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col items-center">
        <h4 className="text-gray-500 my-4 text-xs">Menu</h4>
        <div className="flex flex-col gap-2">
          {MenuItems.top.map((item, index) => {
            return (
              <div
                className={`text-gray-500 cursor-pointer p-2 rounded-lg transition-colors ${activeItemId === item.id
                  ? "bg-[#3D4845] text-emerald-500"
                  : ""
                  }`}
                key={index}
                onClick={() => onClick(item.id as MenuItemsIds)}
              >
                {activeItemId === item.id ? item.solid : item.outline}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        {MenuItems.bottom.map((item, index) => {
          return (
            <div
              className={`text-gray-500 cursor-pointer p-2 rounded-lg transition-colors ${activeItemId === item.id ? "bg-[#3D4845] text-emerald-500" : ""
                }`}
              key={index}
              onClick={() => onClick(item.id as MenuItemsIds)}
            >
              {activeItemId === item.id ? item.solid : item.outline}
            </div>
          );
        })}
        <div className="cursor-pointer" onClick={() => onClick("user")}>
          <img
            src="assets/images/mojeeto.JPG"
            alt="mojeeto"
            className={`rounded-full w-8 h-8 trasition-colors ${activeItemId === "user" ? "border-[1px] border-emerald-500" : ""
              }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
