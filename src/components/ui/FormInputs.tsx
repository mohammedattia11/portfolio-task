import { Button } from "./button";

export default function FormInputs() {
  return (
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
  );
}
