import axios from 'axios';

export async function verifyCaptcha(token: string | null) {
  const captchaToken = '6Le6LlYoAAAAAPX4sxL9us2PTaYnbTuk58nnAcrc';

  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${captchaToken}&response=${token}`
  );
  if (res.data.success) {
    return 'success!';
  } else {
    throw new Error('Failed Captcha');
  }
}
