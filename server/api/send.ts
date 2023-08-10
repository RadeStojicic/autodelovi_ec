import { Resend } from "resend";
export const config = {
  runtime: "edge",
};
const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const data = await resend.emails.send(body);
    return data;
  } catch (error) {
    return { error };
  }
});
