
import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('omenterprisesrevalidationsecret');
  
  // Verify the secret token
  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const { paths } = await request.json();
    
    // Revalidate each path
    paths.forEach((path: string) => {
      revalidatePath(path);
    });

    return Response.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return Response.json({ message: 'Error revalidating' }, { status: 500 });
  }
}