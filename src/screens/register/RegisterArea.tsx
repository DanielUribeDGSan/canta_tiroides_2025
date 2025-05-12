import { MenuTop } from "../../components/menu/MenuTop";
import { BannerTitle } from "../../components/register/BannerTitle";

import { RegisterForm } from "../../components/ui/forms/RegisterForm";

export const RegisterArea = () => {
  return (
    <>
      <section className="section__register d-flex align-items-center justify-content-center">
        <MenuTop styleMenu={{ top: "2%", left: "2%" }} />

        <div className="row m-0 p-0 h-100 d-flex align-items-center justify-content-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 m-0 p-0 h-100 d-flex align-items-center">
            <BannerTitle />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 m-0 p-0 h-100 ">
            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  );
};
