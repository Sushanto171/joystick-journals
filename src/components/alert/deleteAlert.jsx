import Swal from "sweetalert2";

export const deleteAlert = (id, data) => {
  const { myReviewList, setMyReviewList } = data;
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success text-white m-2",
      cancelButton: "btn btn-error text-white",
      cancelButtonColor: "",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        console.log("delete");

        fetch("http://localhost:4000/reviews", {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id: id }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remain = myReviewList.filter((list) => list._id !== id);
              setMyReviewList(remain);
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("cancel");
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
        });
      }
    });
};
