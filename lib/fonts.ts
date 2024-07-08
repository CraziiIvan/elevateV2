import { Instrument_Sans } from "next/font/google";
import LocalFont from "next/font/local";

export const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
  });

export const helvetica = LocalFont({
    src: "../public/fonts/Helvetica.woff",
  });