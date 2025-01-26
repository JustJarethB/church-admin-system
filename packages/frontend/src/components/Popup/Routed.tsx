import { useNavigate } from "react-router-dom";
import { Popup, PopupProps } from ".";

type RoutedPopupProps = Omit<PopupProps, "open" | "handleClose">;

export const RoutedPopup = (props: RoutedPopupProps) => {
  const navigate = useNavigate();

  return <Popup {...props} open handleClose={() => navigate(-1)} />;
};
