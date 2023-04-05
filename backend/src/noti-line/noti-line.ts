import { HttpService } from '@nestjs/axios';

export async function sendLineNotify(message: string, token: string) {
  try {
    const httpService = new HttpService();
    await httpService
      .post(
        process.env.Line_Token,
        { message: `เวรทำความสะอาดวันนี้ ${message}` },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `bearer${token}`,
          },
        },
      )
      .toPromise();
    return true;
  } catch (error) {
    throw error;
  }
}
