import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxDataList } from "@/lib/mdx";
import fs from "node:fs/promises";
import path from "path";
import PageHeading from "@/components/BlogComponents/PageHeading";
import "../md.css";

type Props = {
  params: {
    slug: string[];
  };
};

export default async function Page(props: Props) {
  try {
    const slugArray = props.params.slug;
    const slugPath = slugArray.join("/");
    const filePath = path.join(process.cwd(), "content", `${slugPath}.mdx`);

    await fs.access(filePath); // Check if file exists
    const { metadata } = await import(
      "../../../../content/" + slugPath + ".mdx"
    );

    const fileHandler = await fs.open(filePath, "r");
    const data = await fileHandler.readFile("utf-8");

    await fileHandler.close();

    return (
      <article className="markdown prose dark:prose-invert dark:prose-pre:prose-zinc w-full">
        <PageHeading {...metadata} />
        <MDXRemote source={data} />
      </article>
    );
  } catch (error) {
    console.error("Error loading MDX file:", error);
    return <div>Failed to load content</div>;
  }
}

export async function generateStaticParams() {
  const postsList = await getMdxDataList();

  return postsList.map((post) => {
    return {
      slug: [post.slug],
    };
  });
}
