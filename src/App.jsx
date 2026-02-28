import { RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import router from "./routes/router.jsx";

export default function App() {
  const { i18n } = useTranslation();
  // const {t} = useTranslation("auth") // لازم تحدد لو مقسمين ملفات الترجمة

  // change dir with language at the same time.
  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return <RouterProvider router={router} />;
}
