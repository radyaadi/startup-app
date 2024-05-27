import PropTypes from "prop-types";

export default function ServiceItem({ label, value, icon: Icon }) {
  return (
    <div className="inline-flex flex-col items-center justify-center text-center text-[--primary] md:basis-56">
      <Icon size={80} strokeWidth={1.6} />
      <div>
        <h5 className="text-3xl font-bold">{value}</h5>
        <p className="fond-semibold text-lg">{label}</p>
      </div>
    </div>
  );
}

ServiceItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
