import Swal from "sweetalert2";

export const successAlert = (text) => {
  Swal.fire({
    title: text,
    showConfirmButton: false,
    background: "#4d4d4d",
    color: "white",
    backdrop: "#b8f0c858",
    timer: 1500,
  });
};
