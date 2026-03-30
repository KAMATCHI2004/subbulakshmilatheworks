window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.style.background = window.scrollY > 50 ? "#000" : "#222";
});
<script>
  document.addEventListener("contextmenu", event = event.preventDefault());
</script>;
