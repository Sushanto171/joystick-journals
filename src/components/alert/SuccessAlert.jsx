import Swal from "sweetalert2";

export const successAlert = (text, icon = "success") => {
  Swal.fire({
    icon: icon,
    title: text,
    showConfirmButton: false,
    background: "#4d4d4d",
    color: "white",
    timer: 1500,
  });
};
