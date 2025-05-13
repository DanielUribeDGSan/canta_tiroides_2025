import { useEffect } from "react";
import { HomeArea } from "./HomeArea";
import { useTitlePage } from "../../hooks/useTitlePage";
import { AddMeta } from "../../components/ui/meta/AddMeta";
import "./home.scss";

export const Home = () => {
  const { setPageTitle } = useTitlePage();
  useEffect(() => {
    setPageTitle("Canta Tiroides 2025");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AddMeta title="Canta Tiroides 2025" description="" />
      <HomeArea />
    </>
  );
};
