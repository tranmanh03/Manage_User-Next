"use server";

import { cookies } from "next/headers";

export default async function setLanguageValue(value: string) {
  (await cookies()).set("language", value);
}
