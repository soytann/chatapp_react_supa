import translate from "deepl"
 

export async function translator(input) {
const api_key = "3962092e-b570-4396-8ac1-adaf6f5baa04:fx"
const url = import.meta.env.VITE_DEEPL_URL;

  const translated = await translate({
    free_api: true,
    text: input,
    target_lang: 'EN',
    auth_key: api_key,
  })
  return translated.data.translations[0];
  
}


