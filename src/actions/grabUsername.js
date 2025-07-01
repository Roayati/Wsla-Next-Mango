'use server';
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import supabase from "@/libs/supabaseClient";
import {getServerSession} from "next-auth";

export default async function grabUsername(formData) {
  const username = formData.get('username');
  const { data: existingPage } = await supabase
    .from('pages')
    .select()
    .eq('uri', username)
    .maybeSingle();
  if (existingPage) {
    return false;
  } else {
    const session = await getServerSession(authOptions);
    const { data } = await supabase.from('pages').insert({
      uri: username,
      owner: session?.user?.email,
    }).select().single();
    return data;
  }
}
