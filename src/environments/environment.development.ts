export const environment = {
  production: false,
  supabase: {
    apiUrl: process.env['NG_APP_API_URL'] || '',
  },
};
