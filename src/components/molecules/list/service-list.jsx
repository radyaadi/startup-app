import { serviceData } from "../../../libs/constants/service-data";
import ServiceItem from "../../atoms/item/service-item";

export default function ServiceList() {
  return (
    <div className="mt-14 flex flex-col justify-center gap-x-5 gap-y-10 md:mt-28 md:flex-row">
      {serviceData.map((data, index) => (
        <ServiceItem key={index} {...data} />
      ))}
    </div>
  );
}
