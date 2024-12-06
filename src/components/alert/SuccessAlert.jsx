import Swal from "sweetalert2";

export const successAlert = (text, icon = "success") => {
  Swal.fire({
    icon: icon,
    title: text,
    showConfirmButton: false,
    background: "#4d4d4d",
    backdrop: "#b8f0c858",
    color: "white",
    timer: 1500,
  });
};
