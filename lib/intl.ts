'use server';

import { getMessages } from "next-intl/server";

export const getIntlMessages = async (cookieLocale:any) => {
  return await getMessages({locale: cookieLocale ?? 'en'});
};
