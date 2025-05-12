import { DividerTop } from "../../components/divider/DividerTop";
import { MenuTop } from "../../components/menu/MenuTop";
import { BannerTitle } from "../../components/register/BannerTitle";
import { LoginForm } from "../../components/ui/forms/LoginForm";

export const LoginArea = () => {
  return (
    <>
      <section className="section__register d-flex align-items-center justify-content-center">
        <MenuTop styleMenu={{ top: "2%", left: "2%" }} />
        <DividerTop />

        <div className="row m-0 p-0 h-100 d-flex align-items-center justify-content-center">
          <div className="col-xxl-7 col-xl-7 col-lg-7 m-0 p-0 h-100 d-flex align-items-center">
            <BannerTitle />
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 m-0 p-0 h-100 ">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};
