import FormDetails from "@/components/ui/FormDetails";
import FormInputs from "@/components/ui/FormInputs";
import Section from "@/components/ui/Section";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="bg-form-color flex flex-col rounded-xl p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-5 lg:py-30">
        <div className="lg:w-7/12">
          <p className="font-Barlow text-secondary-color text-xl font-semibold">
            Don't be shy
          </p>
          <h2 className="font-Barlow pt-1 pb-3 text-3xl font-semibold">
            Drop Me a Line
          </h2>
          <FormInputs />
        </div>
        <div className="flex flex-col gap-6 py-10">
          <FormDetails
            icon={<MapPin />}
            header="Address"
            content="20, London, United Kingdom"
          />
          <FormDetails
            icon={<Mail />}
            header="Email"
            content="hello@ethan.com"
          />
          <FormDetails
            icon={<Phone />}
            header="Phone"
            content="+123 456 7890"
          />
        </div>
      </div>
    </Section>
  );
}
