/* Student Placement Portal Foundation - app.js
   Vanilla JavaScript, no libraries, no build step.

   DATA DECISION (important):
   - The 12 fictional students are EMBEDDED below in FALLBACK_STUDENTS, so the page
     works when you double-click index.html (file:// URL). Browsers often block
     fetch() of local files from file://, so we cannot depend on it.
   - data/students.json holds the same records. If the page is served over
     http:// or https:// (for example: python -m http.server), app.js tries to
     load that file and uses it. If that fails, it silently uses the embedded data.
   - Keep the two copies in sync when you edit records.
*/

const FALLBACK_STUDENTS = [
  {
    "id": "S001",
    "name": "Aarav Menon",
    "course": "B.Tech CSE",
    "year": 3,
    "skills": [
      "Python",
      "SQL",
      "Git"
    ]
  },
  {
    "id": "S002",
    "name": "Meera Iyer",
    "course": "B.Tech CSE",
    "year": 4,
    "skills": [
      "Azure",
      "Linux",
      "PowerShell"
    ]
  },
  {
    "id": "S003",
    "name": "Kabir Shah",
    "course": "B.Tech ECE",
    "year": 3,
    "skills": [
      "C",
      "Embedded Systems",
      "Networking"
    ]
  },
  {
    "id": "S004",
    "name": "Diya Nair",
    "course": "BCA",
    "year": 2,
    "skills": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
  {
    "id": "S005",
    "name": "Rohan Das",
    "course": "B.Tech IT",
    "year": 4,
    "skills": [
      "Django",
      "PostgreSQL",
      "Docker"
    ]
  },
  {
    "id": "S006",
    "name": "Ananya Rao",
    "course": "MBA Analytics",
    "year": 1,
    "skills": [
      "Excel",
      "Power BI",
      "SQL"
    ]
  },
  {
    "id": "S007",
    "name": "Vikram Joshi",
    "course": "B.Tech CSE",
    "year": 2,
    "skills": [
      "Java",
      "Git",
      "Linux"
    ]
  },
  {
    "id": "S008",
    "name": "Isha Kapoor",
    "course": "BCA",
    "year": 3,
    "skills": [
      "Python",
      "Testing",
      "GitHub"
    ]
  },
  {
    "id": "S009",
    "name": "Arjun Pillai",
    "course": "B.Tech IT",
    "year": 3,
    "skills": [
      "Networking",
      "Linux",
      "Azure"
    ]
  },
  {
    "id": "S010",
    "name": "Sara Thomas",
    "course": "B.Tech ECE",
    "year": 4,
    "skills": [
      "MATLAB",
      "Python",
      "Networking"
    ]
  },
  {
    "id": "S011",
    "name": "Neel Bhatt",
    "course": "MBA Analytics",
    "year": 2,
    "skills": [
      "Tableau",
      "Python",
      "Statistics"
    ]
  },
  {
    "id": "S012",
    "name": "Tara Menon",
    "course": "B.Tech CSE",
    "year": 1,
    "skills": [
      "C",
      "Git",
      "Problem Solving"
    ]
  }
];

/* ---------- Pure logic (easy to test) ---------- */

/** Lower-case and trim a value so comparisons ignore case and extra spaces. */
function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

/**
 * Return the students that match BOTH filters.
 * query  - text matched against name and skills (partial match is fine)
 * course - exact course name, or "" for all courses
 */
function filterStudents(students, query, course) {
  const q = normalize(query);
  const c = normalize(course);
  return students.filter(function (student) {
    const courseOk = c === "" || normalize(student.course) === c;
    const haystack = [student.name].concat(student.skills).map(normalize);
    const textOk = q === "" || haystack.some(function (item) { return item.includes(q); });
    return courseOk && textOk;
  });
}

/** Return the sorted list of unique course names. */
function uniqueCourses(students) {
  const set = new Set(students.map(function (s) { return s.course; }));
  return Array.from(set).sort();
}

/** Build the text shown above the results. */
function statusMessage(count, total, query, course) {
  if (count === 0) {
    return "No students match your search. Try a different name, skill or course, or clear the filters.";
  }
  const filtered = normalize(query) !== "" || normalize(course) !== "";
  return filtered
    ? "Showing " + count + " of " + total + " students."
    : "Showing all " + total + " students.";
}

/* ---------- Page code (needs a browser) ---------- */

/** Create one student card using textContent, which keeps the page safe from HTML injection. */
function createCard(student) {
  const li = document.createElement("li");
  li.className = "card";

  const name = document.createElement("h3");
  name.textContent = student.name;

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = student.course + " - Year " + student.year;

  const skills = document.createElement("ul");
  skills.className = "skills";
  skills.setAttribute("aria-label", "Skills of " + student.name);
  student.skills.forEach(function (skill) {
    const item = document.createElement("li");
    item.textContent = skill;
    skills.appendChild(item);
  });

  li.appendChild(name);
  li.appendChild(meta);
  li.appendChild(skills);
  return li;
}

/** Re-draw the results list and status line from the current filter values. */
function render(students) {
  const query = document.getElementById("search-input").value;
  const course = document.getElementById("course-select").value;
  const results = document.getElementById("results");
  const status = document.getElementById("status");

  const matches = filterStudents(students, query, course);
  results.innerHTML = "";
  matches.forEach(function (student) { results.appendChild(createCard(student)); });

  status.textContent = statusMessage(matches.length, students.length, query, course);
  status.className = matches.length === 0 ? "empty" : "";
}

/** Fill the course drop-down from the data. */
function fillCourses(students) {
  const select = document.getElementById("course-select");
  uniqueCourses(students).forEach(function (course) {
    const option = document.createElement("option");
    option.value = course;
    option.textContent = course;
    select.appendChild(option);
  });
}

/** Try data/students.json only when served over http(s); otherwise use embedded data. */
function loadStudents() {
  const sourceLabel = document.getElementById("data-source");
  const served = window.location.protocol === "http:" || window.location.protocol === "https:";
  if (!served) {
    return Promise.resolve({ students: FALLBACK_STUDENTS, source: "embedded sample data" });
  }
  return fetch("data/students.json")
    .then(function (response) {
      if (!response.ok) { throw new Error("HTTP " + response.status); }
      return response.json();
    })
    .then(function (students) { return { students: students, source: "data/students.json" }; })
    .catch(function () { return { students: FALLBACK_STUDENTS, source: "embedded sample data (JSON load failed)" }; })
    .then(function (result) { sourceLabel.textContent = result.source; return result; });
}

function start() {
  loadStudents().then(function (loaded) {
    const students = loaded.students;
    fillCourses(students);
    const form = document.getElementById("filter-form");
    form.addEventListener("input", function () { render(students); });
    form.addEventListener("change", function () { render(students); });
    form.addEventListener("reset", function () {
      // Wait one tick so the form fields are cleared before re-drawing.
      window.setTimeout(function () { render(students); }, 0);
    });
    form.addEventListener("submit", function (event) { event.preventDefault(); });
    render(students);
  });
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", start);
}

/* Allow tests in Node.js to import the pure functions. Ignored in browsers. */
if (typeof module !== "undefined" && module.exports) {
  module.exports = { filterStudents, uniqueCourses, statusMessage, FALLBACK_STUDENTS };
}
