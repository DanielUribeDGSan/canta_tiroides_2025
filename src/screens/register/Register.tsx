import { useEffect } from "react";
import { RegisterArea } from "./RegisterArea";
import { useTitlePage } from "../../hooks/useTitlePage";
import { AddMeta } from "../../components/ui/meta/AddMeta";

export const Register = () => {
  const { setPageTitle } = useTitlePage();
  useEffect(() => {
    setPageTitle("Canta Tiroides 2025");
  }, []);

  return (
    <>
      <AddMeta title="Canta Tiroides 2025" description="" />
      <RegisterArea />
    </>
  );
};
