import { pricingData } from "../../../libs/constants/pricing-data";
import PricingItem from "../../atoms/item/pricing-item";

export default function PricingList() {
  return (
    <div className="grid-col-1 mt-10 grid gap-7 lg:grid-cols-3">
      {pricingData.map((data, index) => (
        <PricingItem key={index} {...data} />
      ))}
    </div>
  );
}
