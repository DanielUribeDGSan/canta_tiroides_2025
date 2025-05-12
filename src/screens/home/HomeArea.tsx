import { MenuTop } from "../../components/menu/MenuTop";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { DividerTop } from "../../components/divider/DividerTop";
import { CardInformation } from "./_components/CardInformation";

export const HomeArea = () => {
  const { userData, isLoadingUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingUser && !userData?.email) {
      return;
      handleClickOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingUser]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseClick = () => {
    setOpen(false);
    navigate("/iniciar-sesion");
  };

  return (
    <>
      <section className="home_main">
        <MenuTop />
        <DividerTop />

        <div className="row m-0 p-0 h-100 d-flex align-items-center justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-5 m-0 p-0 h-100 ">
            <CardInformation />
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 m-0 p-0 h-100 d-flex align-items-center">
            <img
              className="img-fluid h-100 w-100"
              src="./assets/img/home/Imagen_Inicio.png"
              alt="danone"
            />
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{ fontSize: "1.2rem;" }}>
            {"Ingresa al evento"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ fontSize: "1.2rem;" }}
            >
              Los invitamos a sumarse a la transmisión en vivo- Seminario
              Perspectivas económicas, banca popular y futuro digital.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ color: "var(--tp-theme-1)" }}
              onClick={handleCloseClick}
            >
              Ingresa aquí
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    </>
  );
};
