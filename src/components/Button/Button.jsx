// component
import Spinner from "../Spinner/Spinner";

const Button = ({ text, style, type, handleClick, isLoading }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={isLoading}
      className={`px-4 py-2.5 bg-indigo-600  hover:bg-indigo-700 transition-colors duration-75 ${style}`}
    >
      {isLoading ? <Spinner text="Loading..." /> : <span>{text}</span>}
    </button>
  );
};

export default Button;
