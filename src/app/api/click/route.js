import supabase from '@/libs/supabaseClient';
export async function POST(req) {
  const url = new URL(req.url);
  const clickedLink = atob(url.searchParams.get('url'));
  const page = url.searchParams.get('page');
  await supabase.from('events').insert({ type: 'click', uri: clickedLink, page });
  return Response.json(true);
}
