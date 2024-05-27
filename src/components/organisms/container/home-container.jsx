import logo from "../../../assets/home.svg";

export default function HomeContainer() {
  return (
    <section
      id="home"
      className="to-99% flex min-h-[40rem] items-center justify-center bg-gradient-to-b from-[--primary] from-5% via-[--second] via-50% to-white pt-36 md:min-h-[43rem] md:pt-20 "
    >
      <div className="box-container flex flex-col items-center gap-16 md:flex-row md:items-start lg:gap-24">
        <div className="flex flex-col gap-y-5 text-white">
          <h2 className="text-center text-3xl font-bold md:text-start md:text-4xl">
            Integrating Excellence, Empowering Growth
          </h2>
          <p className="text-center text-sm font-medium italic md:text-justify">
            Discover the power of seamless integration and cutting-edge
            innovation on our ERP platform, where every click propels your
            business towards greater efficiency and growth.
          </p>
        </div>
        <div className="max-w-[25rem] md:min-w-[20rem] lg:min-w-[30rem]">
          <img src={logo} alt="Logo" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
