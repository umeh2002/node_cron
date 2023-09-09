import cron from "node-cron";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const GOOGLE_ID =
  "72356347044-vs8ga77m4qst0fs7lc5f79gdvfetp1vc.apps.googleusercontent.com";
const GOOGLE_SECRET = "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";
const GOOGLE_REFRESH_TOKEN =
  "1//04ZQR_BiG66nCCgYIARAAGAQSNwF-L9IrNDfuohRJ2jtgGzkfvdJR7ltObtZcl0xlWu_XU6zH8XGBVFL-jBn1axyz5RaaN0RUBH8";
const GOOGLE_URL = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL);
oAuth.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

// const url: string = "http://localhost:3467";



export const mail = async (user:any) => {
  try {
    const getAccess: any = (((await oAuth.getAccessToken()).token));

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "umehemmanuel978@gmail.com",
        type: "OAuth2",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESH_TOKEN,
        accessToken: getAccess,
      },
    });
    const mailer = {
      from: " please read ohh!! <umehemmanuel978@gmail.com>",
      to: user.email,
      subject: "Presentation Presentation!!",
      html: "pleaase dont forget our presentation on monday",
    };

    transport.sendMail(mailer);
  } catch (error) {
    console.log(error);
  }
};

cron.schedule("0 7 11 9 mon", mail);
