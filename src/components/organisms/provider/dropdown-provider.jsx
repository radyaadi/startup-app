import { useState, useRef, useEffect, createContext, useContext } from "react";
import PropTypes from "prop-types";

const DropdownContext = createContext();

function DropDownProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown }}>
      <div className="relative inline-block text-left" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

function DropDownTrigger({ children }) {
  const { toggleDropdown } = useContext(DropdownContext);

  return (
    <button
      className="w-fit rounded-lg p-1 text-sm font-medium text-black duration-100 ease-in-out"
      onClick={toggleDropdown}
      aria-haspopup="true"
    >
      {children}
    </button>
  );
}

function DropDownContainer({ children }) {
  const { isOpen } = useContext(DropdownContext);

  return (
    isOpen && (
      <div
        className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
      >
        <div className="py-1" role="none">
          {children}
        </div>
      </div>
    )
  );
}

export { DropDownProvider, DropDownTrigger, DropDownContainer };

DropDownProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
DropDownTrigger.propTypes = {
  children: PropTypes.node.isRequired,
};
DropDownContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
