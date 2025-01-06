import Swal from "sweetalert2";

export const deleteAlert = (id, data, condition) => {
  const { myReviewList, setMyReviewList, watchListIDs, setWatchListIDs, user } =
    data;
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success text-white m-2",
      cancelButton: "btn btn-error text-white",
      cancelButtonColor: "",
      background: "#4d4d4d",
      backdrop: "#b8f0c858",
      color: "white",
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
      background: "#4d4d4d",
      backdrop: "#b8f0c858",
      color: "white",
    })
    .then((result) => {
      if (result.isConfirmed) {
        if (condition === "formReview") {
          fetch("http://localhost:4000", {
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
                  background: "#4d4d4d",
                  backdrop: "#b8f0c858",
                  color: "white",
                });
              }
            });
        }
        if (condition === "formWatch") {
          const remainReviews = watchListIDs.filter((list) => list._id !== id);
          const remainIds = remainReviews.map((id) => id._id);
          const updateWatchListData = {
            email: user.email,
            user: user.name,
            ids: remainIds,
            isComplete: false,
          };

          fetch(`http://localhost:4000/updateWatchList/${user.email}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateWatchListData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                setWatchListIDs(remainReviews);
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                  background: "#4d4d4d",
                  backdrop: "#b8f0c858",
                  color: "white",
                });
              }
            });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
          background: "#4d4d4d",
          backdrop: "#b8f0c858",
          color: "white",
        });
      }
    });
};
