function Navbar() {
  return (
    // <header className="fixed top-0 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3">
    //   <nav className=" space-x-7 text-body-3 sm:block">
    //     <a className="group relative hidden md:inline-block">
    //       <span>about</span>
    //       <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
    //     </a>
    //     <a className="group relative hidden md:inline-block">
    //       <span>services</span>
    //       <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
    //     </a>
    //     <a className="group relative hidden md:inline-block">
    //       <span>projects</span>
    //       <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
    //     </a>
    //     <a className="button group relative hover:bg-transparent">
    //       <span className="relative w-fit">
    //         <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
    //         <span>Let&apos;s Talk.</span>
    //       </span>
    //     </a>
    //   </nav>
    // </header>

    <div className="items-center justify-end border border-red-500 ">
      <nav className="flex flex-col gap-2 text-Charcoal(Text)-Normal text-2xl font-normal">
        <a href="" className=" hover:text-Green-Normal-hover ">
          <span>Who Am I?</span>
        </a>
        <a href="" className=" hover:text-Green-Normal-hover ">
          <span>Who Am I?</span>
        </a>
        <a href="" className=" hover:text-Green-Normal-hover ">
          <span>Who Am I?</span>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
