document.getElementById("bioForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const interests = document.getElementById("interests").value.trim().split(",");
  const tone = document.getElementById("tone").value;

  let bio = "";

  if (tone === "funny") {
    bio = `${name} here. I like ${interests.join(", ")}, making bad decisions look fun, and pretending I know how to flirt. Swipe if you're brave.`;
  } else if (tone === "confident") {
    bio = `Name's ${name}. I don’t chase—I attract. If you're into ${interests.join(", ")}, we might just be a savage match.`;
  }

  document.getElementById("result").innerText = bio;
});
