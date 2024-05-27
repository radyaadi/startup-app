import PropTypes from "prop-types";
import { Check, X } from "lucide-react";

export default function PricingItem({ tier, price, features }) {
  return (
    <div className="rounded-md bg-white p-9 shadow-md transition-transform hover:-translate-y-4 hover:scale-105 hover:cursor-pointer">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[--primary]">{tier}</h1>
        <p className="my-5 font-semibold text-[--second]">
          Rp<span className="text-2xl font-bold">{price}</span>
        </p>
      </div>
      <div className="py3 grid grid-cols-1 gap-y-5">
        {features.map((feature, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-x-2 leading-none"
          >
            {feature.available ? (
              <Check size={19} strokeWidth={4} className="text-emerald-500" />
            ) : (
              <X size={19} strokeWidth={4} className="text-red-500" />
            )}

            <p className="text-zinc-500">{feature.label}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

PricingItem.propTypes = {
  tier: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
