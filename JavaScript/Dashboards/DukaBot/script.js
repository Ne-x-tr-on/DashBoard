document.querySelector("aside").addEventListener("click", function() {
  this.classList.toggle("collapsed");
});
document.getElementById("date").valueAsDate = new Date();


<script>
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('theme-light');
  body.classList.toggle('theme-dark');
  themeToggle.querySelector('i').classList.toggle('fa-moon');
  themeToggle.querySelector('i').classList.toggle('fa-sun');
});
</script>