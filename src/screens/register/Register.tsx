import { useEffect } from "react";
// import { RegisterArea } from "./RegisterArea";
import { useTitlePage } from "../../hooks/useTitlePage";
import { AddMeta } from "../../components/ui/meta/AddMeta";

export const Register = () => {
  const { setPageTitle } = useTitlePage();
  useEffect(() => {
    setPageTitle("Banco Azteca");
  }, []);

  return (
    <>
      <AddMeta title="Banco Azteca" description="" />
      {/* <RegisterArea /> */}
    </>
  );
};
