import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { type NextRequest, NextResponse } from 'next/server';

import { logger } from '@/lib/logger';

export const config = {
  matcher: ['/:path*'],
};

export async function middleware(req: NextRequest): Promise<NextResponse> {
  if (!isBasicAuthValid(req)) {
    /**
     * @todo
     */
  }

  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  /**
   * @todo セッションの分岐を追加したい
   */
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    logger.info('session start', { id: user?.id, email: user?.email });
  } else {
    logger.info('session null');
  }

  return res;
}

/**
 * @todo Basic認証を満たしているかどうかを判定する
 */
const isBasicAuthValid = (req: NextRequest): boolean => {
  return false;
};
