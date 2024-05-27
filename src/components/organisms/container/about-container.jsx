import ServiceList from "../../molecules/list/service-list";
import aboutLogo from "../../../assets/about.svg";

export default function AboutContainer() {
  return (
    <section id="about" className="flex items-center justify-center py-20">
      <div className="box-container flex flex-col">
        <div className="flex lg:gap-x-12 xl:gap-x-24">
          <div className="hidden min-w-[20rem] lg:block xl:min-w-[25rem]">
            <img src={aboutLogo} alt="Logo" className="h-full w-full" />
          </div>
          <div>
            <h1 className="mb-5 text-3xl font-bold text-[--primary] md:text-4xl">
              About Us
            </h1>
            <p className="text-justify indent-12 text-lg">
              Welcome to our innovative solution tailored for your business
              needs. At the heart of our endeavor lies a commitment to
              streamline operations, empower entrepreneurs, and foster growth.
              We aim to be the catalyst for your business success, ensuring
              efficiency and profitability with every transaction. In our
              journey, we embarked on a mission to revolutionize business
              management. Our startup endeavors to craft a web application akin
              to an ERP system, facilitating entrepreneurs in meticulously
              tracking every inbound and outbound item while diligently
              recording daily profits earned.
            </p>
          </div>
        </div>
        <ServiceList />
      </div>
    </section>
  );
}
