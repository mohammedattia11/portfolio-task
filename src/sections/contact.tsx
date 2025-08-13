import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-32" id="contact">
      <div className="bg-form-color flex flex-col rounded-xl p-10">
        <div>
          <p className="font-Barlow text-secondary-color text-xl font-semibold">
            Don't be shy
          </p>
          <h2 className="font-Barlow pt-1 pb-3 text-3xl font-semibold">
            Drop Me a Line
          </h2>
          <form className="mx-auto flex w-[100%] flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md bg-stone-100 px-4 py-3 text-stone-900 placeholder:text-stone-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md bg-stone-100 px-4 py-3 text-stone-900 placeholder:text-stone-500"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="w-full rounded-md bg-stone-100 px-4 py-3 text-stone-900 placeholder:text-stone-500"
            />
            <Button
              className="bg-secondary-color w-full rounded-sm px-4 py-6 capitalize hover:bg-stone-100 hover:text-stone-800"
              type="submit"
            >
              submit message
            </Button>
          </form>
        </div>
        <div className="py-10 flex flex-col gap-6">
          <div className="flex flex-row items-center gap-3  text-sm">
            <div className="bg-icon-color p-5 rounded-full">
              <MapPin />
            </div>
            <div>
              <p className="font-Barlow text-xl font-semibold">Address</p>
              <p className="text-lg font-light text-text-color">20, London, United Kingdom</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3  text-sm">
            <div className="bg-icon-color p-5 rounded-full">
              <Mail />
            </div>
            <div>
              <p className="font-Barlow text-xl font-semibold">Email</p>
              <a className="text-lg font-light text-text-color">hello@ethan.com</a>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3  text-sm">
            <div className="bg-icon-color p-5 rounded-full">
              <Phone />
            </div>
            <div>
              <p className="font-Barlow text-xl font-semibold">Phone</p>
              <p className="text-lg font-light text-text-color">+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
