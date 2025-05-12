import { RotateVerticalPhone } from "../../components/ui/rotatePhone/RotateVerticalPhone";
import { useUser } from "../../hooks/useUser";

export const LiveArea = () => {
  const { userData, isLoadingUser } = useUser();

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
            src={`https://mastertalkbancoazteca.com/players/index.html?user=${userData.fullName}&email=${userData?.email}`}
          ></iframe>
        )}
      </div>
    </>
  );
};
