document.addEventListener("DOMContentLoaded", () => {
  // Simulated API response
  const stats = {
    students: 1450,
    teachers: 62,
    courses: 15,
    revenue: 60000,
  };

  // Update DOM elements with fetched data
  document.getElementById("studentCount").textContent =
    stats.students.toLocaleString();
  document.getElementById("teacherCount").textContent =
    stats.teachers.toLocaleString();
  document.getElementById("courseCount").textContent =
    stats.courses.toLocaleString();
  document.getElementById(
    "revenue"
  ).textContent = `₹${stats.revenue.toLocaleString()}`;
});
