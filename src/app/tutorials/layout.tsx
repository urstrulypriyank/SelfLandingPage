
const currDate = new Date().toISOString().slice(0, 10);

export const metadata = {
  title: "List Of All Tutorial and guides",
  description:
    "We discuss about software development methodologies and guides which help in understanding setup or debug code",
  date: currDate,
  author: "Priyank Rai",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Priyank Rai", url: "https:priyankrai.in" }],
  creator: "Priyank Rai",
  publisher: "urstrulypriyankrai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" w-full min-h-[95vh] md:px-6 overflow-x-hidden overflow-y-scroll max-h-[98vh]  mx-auto pb-8">
        <article className="md:mx-20 border-x border-x-border pb-32 px-2 markdown ">
          {children}
        </article>
      </div>
    </>
  );
}
