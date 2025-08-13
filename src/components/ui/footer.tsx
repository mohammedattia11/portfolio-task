export default function Footer() {
  return (
    <footer className="bg-footer-color mt-5 p-20 text-center text-stone-100 lg:mt-10">
      <div className="mx-auto flex w-10/12 flex-col gap-5 lg:flex-row lg:justify-between">
        <p>© 2022 codewithsadee. All Rights Reseverd</p>
        <div className="flex justify-between">
          <p>Terms & Condition</p>
          <p> Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
