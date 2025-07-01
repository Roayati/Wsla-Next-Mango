'use server';
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import supabase from "@/libs/supabaseClient";
import {getServerSession} from "next-auth";

export async function savePageSettings(formData) {
  const session = await getServerSession(authOptions);
  if (session) {
    const dataKeys = [
      'displayName','location',
      'bio', 'bgType', 'bgColor', 'bgImage',
    ];

    const dataToUpdate = {};
    for (const key of dataKeys) {
      if (formData.has(key)) {
        dataToUpdate[key] = formData.get(key);
      }
    }

    await supabase
      .from('pages')
      .update(dataToUpdate)
      .eq('owner', session?.user?.email);

    if (formData.has('avatar')) {
      const avatarLink = formData.get('avatar');
      await supabase
        .from('users')
        .update({ image: avatarLink })
        .eq('email', session.user?.email);
    }

    return true;
  }

  return false;
}

export async function savePageButtons(formData) {
  const session = await getServerSession(authOptions);
  if (session) {
    const buttonsValues = {};
    formData.forEach((value, key) => {
      buttonsValues[key] = value;
    });
    const dataToUpdate = { buttons: buttonsValues };
    await supabase
      .from('pages')
      .update(dataToUpdate)
      .eq('owner', session?.user?.email);
    return true;
  }
  return false;
}

export async function savePageLinks(links) {
  const session = await getServerSession(authOptions);
  if (session) {
    await supabase
      .from('pages')
      .update({ links })
      .eq('owner', session?.user?.email);
  } else {
    return false;
  }
}
