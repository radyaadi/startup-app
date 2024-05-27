import { Database } from "lucide-react";

import FooterNavList from "../../molecules/list/footer-nav-list";
import FooterContactList from "../../molecules/list/footer-contact-list";

export default function BottomBar() {
  return (
    <section className="bg-[--primary]">
      <div className="box-container text-white">
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 py-12 sm:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-x-1 text-xl font-bold leading-none transition-all duration-75 ease-in-out">
              <Database size={30} strokeWidth={2.2} />
              <p>ERD App</p>
            </div>
            <p className="text-sm">Integrating Excellence, Empowering Growth</p>
            <h3>@2024</h3>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-semibold">Content</h2>
            <FooterNavList />
          </div>
          <div>
            <h2 className="mb-3 text-lg font-semibold">Get in Touch</h2>
            <FooterContactList />
          </div>
        </div>
        <p className="py-4 text-center text-sm">
          ©2024 ERP App. Created by Radya Adi Anggara
        </p>
      </div>
    </section>
  );
}
