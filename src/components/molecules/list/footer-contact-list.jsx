import { contactData } from "../../../libs/constants/contact-data";

export default function FooterContactList() {
  return (
    <div className="ml-2 grid grid-cols-1 gap-3 text-sm">
      {contactData.map((data, index) => (
        <a key={index} href="#" className="inline-flex items-center gap-x-2">
          <data.icon />
          {data.value}
        </a>
      ))}
    </div>
  );
}
