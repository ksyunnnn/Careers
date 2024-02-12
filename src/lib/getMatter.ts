import matter from 'gray-matter';

const getMatter = (content: string) => {
  const { content: body, data: frontMatter } = matter(content || '');
  return {
    body,
    frontMatter,
  };
};

export { getMatter };
