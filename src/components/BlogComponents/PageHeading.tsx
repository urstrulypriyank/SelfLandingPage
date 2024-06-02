export default function PageHeading(props: {
  title: string;
  className?: string;
  author?: string;
  date?: string;
}) {
  return (
    <>
      <header className="w-screen h-32 flex   pt-10 flex-col  mb-6  px-6 ">
        <h1
          className={`md:text-4xl text-3xl font-bold tracking-widest  my-0 ${props?.className}`}
        >
          {props?.title || "Article"}
        </h1>
        {/* Author and Date */}
        <span className="ml-">
          <span className="font-medium">Author</span>: {props?.author}{" "}
          <span className="font-medium">Date</span>: {props?.date}
        </span>
      </header>
    </>
  );
}
