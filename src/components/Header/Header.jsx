import React from "react";

const CustomPill = ({status}) => {

    console.log("custon status "+status)
    let style = "";
  
    switch (status) {
      case "open":
        style = "green";
        break;

      case "closed":
        style = "red";
        break;
  
      default:
        style = "gray";
        break;
    }

  
    return (
      <>
        <span className={`text-xs font-medium me-2 px-3 py-1 rounded-full bg-${style}-900 text-${style}-300 hover:cursor-pointer`}>
          {status}
        </span>
      </>
    );
  };

const Header = ({ title, status }) => {
  return (
    <header className="flex items-center justify-between border-b pb-2 border-b-dark-20 mb-4">
      <div className="block">
        <h2 className="text-xl mb-1">{title}</h2>
      </div>

      
        <CustomPill status={status}/>
      
    </header>
  );
};

export default Header;
