import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { createSelectCareersQuery } from '@/query/createCareersQuery';
import matter from 'gray-matter';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const ListCareer = async () => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await createSelectCareersQuery({ client: supabase });

  if (error) {
    throw error;
  }

  if (!data) {
    return 'Loading...';
  }

  const getMatter = (content: string) => {
    const { content: body, data: frontMatter } = matter(content || '');
    return {
      body,
      frontMatter,
    };
  };

  return (
    <>
      {data.map((career) => {
        const { body, frontMatter } = getMatter(career.contents);
        return (
          <Card key={career.id} className="w-64">
            <CardHeader>
              <CardTitle>{frontMatter.title || '--'}</CardTitle>
              <CardDescription>{`${career.updated_at} updated.`}</CardDescription>
            </CardHeader>
            <CardContent>{`${body.substring(0, 80)}${body.length > 80 && '...'}`}</CardContent>
            <CardFooter>
              <Button>
                {/** @todo open palallel modal */}
                <Link href="/">Edit</Link>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};
