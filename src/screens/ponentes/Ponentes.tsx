/* eslint-disable @typescript-eslint/no-unused-vars */
import Grid from "@mui/material/Grid";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Dialog, DialogContent } from "@mui/material";
import { MenuTop } from "../../components/menu/MenuTop";
import { BannerTitle } from "../../components/ui/titles/BannerTitle";
import { DividerTop } from "../../components/divider/DividerTop";

import "./ponentes.scss";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    margin: "6px",
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#006341",
    },
    secondary: {
      main: "#006341",
    },
  },
});

const itemData = [
  {
    id: 1,
    img: "/assets/img/ponentes/AlejandroValenzuela.png",
    name: "Jeanette Leyva",
    author: "Periodista",
    linkX: "https://twitter.com/",
    linkLin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    imgDescription: "/assets/img/ponentes/description1.png",
  },
  {
    id: 2,
    img: "/assets/img/ponentes/VinicusCovas.png",
    name: "Vinicius Covas",
    author: "Comunicador, mercadólogo, investigador de cultura digital",
    linkX: "https://twitter.com/",
    linkLin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    imgDescription: "/assets/img/ponentes/description2.png",
  },
  {
    id: 3,
    img: "/assets/img/ponentes/JeanetteLeyva.png",
    name: "Luis Hernández",
    author: "Periodista, abogado, escritor",
    linkX: "https://twitter.com/",
    linkLin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    imgDescription: "/assets/img/ponentes/description3.png",
  },
  {
    id: 4,
    img: "/assets/img/ponentes/LuisHernandez.png",
    name: "Rafael Alvarado",
    author: "Psicólogo, investigador social",
    linkX: "https://twitter.com/",
    linkLin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    imgDescription: "/assets/img/ponentes/description4.png",
  },
  {
    id: 5,
    img: "/assets/img/ponentes/RafaelAlvarado.png",
    name: "Alejandro Valenzuela",
    author: "Presidente del Consejo",
    linkX: "https://twitter.com/",
    linkLin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    imgDescription: "/assets/img/ponentes/description5.png",
  },
];

export const Ponentes = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (image: string) => {
    setImagePerson(image);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [imagePerson, setImagePerson] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div className="ponentes_main">
        <MenuTop styleMenu={{ position: "relative" }} />
        <DividerTop className="dividerTop-small" />
        <BannerTitle title="Ponentes" />
        <div className="content-ponentes">
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {itemData.map(
              ({ img, id, linkX, linkLin, instagram, imgDescription }) => (
                <Grid
                  item
                  xl={2}
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                  style={{
                    gap: "1rem",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  key={id}
                >
                  <CardMedia
                    component="img"
                    height="auto"
                    image={img}
                    alt="Paella dish"
                  />
                  <div className="w-100 d-flex justify-content-center align-items-center flex-column">
                    <div className="container d-flex justify-content-center align-items-center gap-2">
                      {linkX && (
                        <a
                          aria-label="add to favorites"
                          href={linkX}
                          target="_blank"
                        >
                          <XIcon sx={{ color: "var(--tp-theme-8)" }} />
                        </a>
                      )}
                      {linkLin && (
                        <a aria-label="share" href={linkLin} target="_blank">
                          <LinkedInIcon sx={{ color: "var(--tp-theme-8)" }} />
                        </a>
                      )}
                      {instagram && (
                        <a aria-label="share" href={linkLin} target="_blank">
                          <InstagramIcon sx={{ color: "var(--tp-theme-8)" }} />
                        </a>
                      )}
                    </div>
                    <button
                      className="btn-profile mt-20"
                      type="button"
                      onClick={() => handleOpen(imgDescription)}
                    >
                      Perfil
                    </button>
                  </div>
                </Grid>
              )
            )}
          </Grid>
        </div>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <img
            className="img-fluid"
            src={imagePerson}
            alt="paella"
            width="100%"
          />
        </DialogContent>
      </BootstrapDialog>
    </ThemeProvider>
  );
};
