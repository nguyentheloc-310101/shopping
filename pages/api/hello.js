// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import supabase from '@/ultis/supabaseClient';

export default function handler(req, res) {
  supabase.auth.api.setAuthCookie(req, res);
}
