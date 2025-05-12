import { useEffect } from "react";
import { HomeArea } from "./HomeArea";
import { useTitlePage } from "../../hooks/useTitlePage";
import { AddMeta } from "../../components/ui/meta/AddMeta";
import "./home.scss";

export const Home = () => {
  const { setPageTitle } = useTitlePage();
  useEffect(() => {
    setPageTitle("Banco Azteca");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AddMeta title="Banco Azteca" description="" />
      <HomeArea />
    </>
  );
};
