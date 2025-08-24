// Navbar Toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Countdown Timer (Set your registration deadline here)
const countdown = document.getElementById("countdown");
const deadline = new Date("2025-09-12 23:59:59").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = deadline - now;

  if (diff <= 0) {
    countdown.innerHTML = "Registration Closed";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

const boxes = document.querySelectorAll('.about-box');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // show once
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => {
    observer.observe(box);
  });