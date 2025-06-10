document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  if (document.querySelector("#blog-posts")) {
    const posts = [
      {
        title: "地域イベントに参加しました",
        date: "2025-05-25",
        summary: "地域の清掃活動に貢献しました。"
      },
      {
        title: "新メンバー加入",
        date: "2025-05-20",
        summary: "新しい仲間が加わりました！"
      }
    ];

    const postContainer = document.getElementById("blog-posts");
    posts.forEach(post => {
      const postEl = document.createElement("div");
      postEl.className = "post";
      postEl.innerHTML = `<h3>${post.title}</h3><small>${post.date}</small><p>${post.summary}</p>`;
      postContainer.appendChild(postEl);
    });
  }
});
