import { useEffect } from "react";
import { LoginArea } from "./LoginArea";
import { useTitlePage } from "../../hooks/useTitlePage";
import { AddMeta } from "../../components/ui/meta/AddMeta";

export const Login = () => {
  const { setPageTitle } = useTitlePage();
  useEffect(() => {
    setPageTitle("Banco Azteca");
  }, []);

  return (
    <>
      <AddMeta title="Banco Azteca" description="" />
      <LoginArea />
    </>
  );
};
