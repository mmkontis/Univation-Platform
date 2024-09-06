'use server';

import { deleteProductById } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { signOut } from '@/lib/auth';

export async function deleteProduct(formData: FormData) {
  // let id = Number(formData.get('id'));
  // await deleteProductById(id);
  // revalidatePath('/');
}


export async function handleSignOut() {
  await signOut();
}