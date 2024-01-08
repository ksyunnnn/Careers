import { MDXRemote } from 'next-mdx-remote/rsc';
import './index.css';
import matter from 'gray-matter';

export const EditCareerForm = async () => {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const res = await fetch('https://...');
  const markdown = `---
title: Hello, frontmatter!
slug: home, hello
---
  # Hello, world!
  this is a test paragraph.
  `;

  const { content, data } = matter(markdown);

  return (
    <>
      <div>Title is {data.title}</div>
      <div>Slug is {data.slug}</div>
      <MDXRemote source={content} />
    </>
  );
};
