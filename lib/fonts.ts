import { Instrument_Sans } from "next/font/google";
import LocalFont from "next/font/local";

export const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
  });

export const helvetica = LocalFont({
    src: "../public/fonts/Helvetica.woff",
  });

export const inter = LocalFont({
    src: [
      {
        path: "../public/fonts/InterDisplay-Regular.woff2",
        weight: "400",
        style: "normal",
      },
      {
        path: "../public/fonts/InterDisplay-Medium.woff2",
        weight: "500",
        style: "normal",
      },
      {
        path: "../public/fonts/InterDisplay-SemiBold.woff2",
        weight: "600",
        style: "normal",
      },
      {
        path: "../public/fonts/InterDisplay-Bold.woff2",
        weight: "700",
        style: "normal",
      },
    ]

  });
