import { useEffect } from "react";
import { LoginArea } from "./LoginArea";
import { useTitlePage } from "../../hooks/useTitlePage";
import { AddMeta } from "../../components/ui/meta/AddMeta";

export const Login = () => {
  const { setPageTitle } = useTitlePage();
  useEffect(() => {
    setPageTitle("Canta Tiroides 2025");
  }, []);

  return (
    <>
      <div className="bubbles b-top" />
      <AddMeta title="Canta Tiroides 2025" description="" />
      <LoginArea />
      <div className="bubbles b-bottom" />
    </>
  );
};
