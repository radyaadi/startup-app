import PricingList from "../../molecules/list/pricing-list";

export default function PricingContainer() {
  return (
    <section id="pricing" className="bg-[--primary] py-20">
      <div className="box-container flex flex-col">
        <div className="text-center text-white">
          <h1 className="mb-5 text-3xl font-bold md:text-4xl">
            Our Pricing List
          </h1>
          <p className="font-medium">
            Comprehensive services with the lowest service prices in Indonesia
          </p>
        </div>
        <PricingList />
      </div>
    </section>
  );
}
