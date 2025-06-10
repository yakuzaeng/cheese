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
        title: "やっていく事件簿",
        date: "2025-06-10",
        summary: "ローソン 西宮愛宕山店の駐車場において物損事故発生。"
      },
      {
        title: "報告",
        date: "2026-05-10",
        summary: "佐藤隊員、自家用車の使用を一時的に停止。"
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
