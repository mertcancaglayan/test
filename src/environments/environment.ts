export const environment = {
  production: true,
  supabase: {
    apiUrl: process.env['NG_APP_API_URL'] || '',
  },
};
