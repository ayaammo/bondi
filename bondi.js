// When the user scrolls down 20px from the top of the document, show the button (back to top 1)
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".back-to-top").classList.add("active");
  } else {
    document.querySelector(".back-to-top").classList.remove("active");
  }
};

// Scroll to the top when the button is clicked
document.querySelector(".back-to-top").addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// When the users clicks on the categories in the work li section elements
$(document).ready(function () {
  $(".category").click(function () {
    var category = $(this).data("category");
    if (category === "All") {
      $(".work-image").show();
    } else {
      $(".work-image").hide();
      $("." + category).show();
    }
  });
});
