import PropTypes from "prop-types";

export default function InputFieldItem({ title, item, type, placeholder }) {
  return (
    <div>
      <label htmlFor={item} className="font-medium leading-8 text-black">
        {title}
      </label>
      {type === "textarea" ? (
        <textarea
          id={item}
          name={item}
          rows={5}
          className="w-full rounded-md px-3 py-2 leading-none text-black placeholder-zinc-400 ring-1 ring-[--primary] focus:outline-none focus:ring-2 focus:ring-[--primary] disabled:border-slate-200 disabled:bg-zinc-300 disabled:text-zinc-600 disabled:shadow-none"
          placeholder={placeholder}
        />
      ) : (
        <input
          id={item}
          name={item}
          type={type}
          className="w-full rounded-md px-3 py-2 leading-none text-black placeholder-zinc-400 ring-1 ring-[--primary] focus:outline-none focus:ring-2 focus:ring-[--primary] disabled:border-slate-200 disabled:bg-zinc-300 disabled:text-zinc-600 disabled:shadow-none"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

InputFieldItem.propTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
