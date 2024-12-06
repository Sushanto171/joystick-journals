import Swal from "sweetalert2";

export const successAlert = (text, icon = "success") => {
  Swal.fire({
    icon: icon,
    title: text,
    showConfirmButton: false,
    background: "#4d4d4d",
    color: "white",
    backdrop: "#b8f0c858",
    timer: 1500,
  });
};
