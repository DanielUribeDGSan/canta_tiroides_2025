import { RotateVerticalPhone } from "../../components/ui/rotatePhone/RotateVerticalPhone";
import { useTokenValidator } from "../../hooks/useTokenValidator";
import { useUser } from "../../hooks/useUser";

export const LiveArea = () => {
  const { userData, isLoadingUser } = useUser();
  useTokenValidator();

  return (
    <>
      <RotateVerticalPhone />
      {/* <MenuTop
        styleMenu={{
          top: "1%",
          zIndex: 999,
          left: "0%",
        }}
      /> */}

      <div className="container-iframe">
        {!isLoadingUser && (
          <iframe
            className="responsive-iframe"
            allowFullScreen
            src={`https://canta-tiroides-2025.netlify.app/players/index.html?user=${
              userData.fullName ?? userData?.email
            }&email=${userData?.email}`}
          ></iframe>
        )}
      </div>
    </>
  );
};
