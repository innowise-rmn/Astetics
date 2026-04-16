import "./globals.css";
import { AuthProvider } from "./components/AuthProvider";

export const metadata = {
  title: "Beso Aesthetics | Best Med Spa NYC",
  description: "Non-surgical aesthetic services in New York City.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
