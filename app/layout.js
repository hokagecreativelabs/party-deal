import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Party Deal ...mouth watering food",
  description:
    "Top-rated catering service in Nigeria offering delicious Nigerian dishes for events, parties, and corporate gatherings. We provide quality food and excellent service to make your event unforgettable.",
  openGraph: {
    title: "Party Deal",
    description: "Mouth watering food for your special events.",
    url: "https://partyng.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dzoy4argi/image/upload/t_Thumbnail/v1735741777/Logo_partydeal_il0jiu.jpg",
        width: 1200,
        height: 630,
        alt: "Party Deal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Party Deal",
    description: "Mouth watering food for your special events.",
    images: [
      "https://res.cloudinary.com/dzoy4argi/image/upload/t_Thumbnail/v1735741777/Logo_partydeal_il0jiu.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/public/assets/img/party.jpg"
        />
        <title>Party Deal Catering</title>
        <link href="https://db.onlinewebfonts.com/c/82346df2075cf90ed44a8e36099a87a8?family=Satoshi+Variable" rel="stylesheet" type="text/css"/>
        <link href="https://db.onlinewebfonts.com/c/1aa6e195f3dfb7c4f9542d13c6c8e52f?family=Coolvetica+Rg" rel="stylesheet" type="text/css"/>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
