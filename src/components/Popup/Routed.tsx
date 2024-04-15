import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { Popup } from ".";

export const PopupRoute = ({ children }: PropsWithChildren<object>) => {
  const navigate = useNavigate();

  return (
    <Popup open handleClose={() => navigate(-1)}>
      {children}
    </Popup>
  );
};
