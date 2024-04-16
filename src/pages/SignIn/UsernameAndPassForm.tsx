import { useState } from "react";
import { Input, Button, Popup } from "@/components";

export const UsernameAndPassForm = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const redirectToGoogle = () => setOpen(true);
  return (
    <>
      <form className="mt-10 space-y-2 px-10 py-10 text-center">
        <Input type="text" id="Username" required />
        <Input type="text" id="Password" required />
        <div className="mb-2"></div>
        <Button style="primary">Login</Button>

        <a
          onClick={redirectToGoogle}
          href="#"
          className="inline-flex !w-auto justify-center font-medium"
        >
          Forgot password?
        </a>
      </form>
      <p className="text-center">
        New here?{" "}
        <a
          onClick={redirectToGoogle}
          href="#"
          className="font-semibold text-primary-light hover:text-primary"
        >
          Sign up
        </a>
      </p>
      <Popup open={open} handleClose={close}>
        Please use Google to Login
      </Popup>
    </>
  );
};
