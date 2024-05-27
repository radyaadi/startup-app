import InputFieldItem from "../../atoms/item/input-field-item";

export default function ContactForm() {
  return (
    <div className="max-w-lg basis-full rounded-md border bg-white px-12 py-8 shadow">
      <form className="grid grid-cols-1 gap-5">
        <InputFieldItem title="Email" item="email" type="email" />
        <InputFieldItem title="Company Name" item="companyName" type="text" />
        <InputFieldItem title="Client Name" item="name" type="text" />
        <InputFieldItem title="Phone Number" item="phone" type="text" />
        <InputFieldItem title="Message" item="message" type="textarea" />
        <button
          type="submit"
          className="mx-auto w-28 rounded-lg bg-[--second] p-3 font-medium text-white duration-100 ease-in-out hover:bg-[--third] hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
