import { useNavigate } from "react-router-dom";
import { Popup, PopupProps } from ".";

type RoutedPopupProps = Omit<PopupProps, "open" | "handleClose">;

export const RoutedPopup = ({ children }: RoutedPopupProps) => {
  const navigate = useNavigate();

  return (
    <Popup open handleClose={() => navigate(-1)}>
      {children}
    </Popup>
  );
};
