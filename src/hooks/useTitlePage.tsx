export const useTitlePage = () => {
  const setPageTitle = (title: string) => {
    document.title = title;
  };

  return { setPageTitle };
};
