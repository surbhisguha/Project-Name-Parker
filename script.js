// sample data
const classes = [
  {
    name: "Digital Product Design Section A",
    students: 32,
    progress: 65,
    next: "Names you missed last time"
  },
  {
    name: "Marketing Fundamentals",
    students: 26,
    progress: 82,
    next: "Quick refresh of 5 remaining"
  },
  {
    name: "Business Ethics",
    students: 30,
    progress: 43,
    next: "Start with this course to raise recall"
  }
];

const classList = document.getElementById("classList");
const aiRec = document.getElementById("aiRec");
const personalList = document.getElementById("personalList");
const helloText = document.getElementById("helloText");

// render class cards
classes.forEach(course => {
  const row = document.createElement("div");
  row.className = "class-row";
  row.innerHTML = `
    <div class="class-info">
      <h3 class="class-title">${course.name}</h3>
      <p class="class-meta">${course.students} students in course</p>
      <div class="progress-wrapper">
        <div class="progress-fill" style="width:${course.progress}%;"></div>
      </div>
      <p class="class-meta">${course.progress}% of names mastered</p>
    </div>
    <button class="select-btn">Practice this class</button>
  `;
  classList.appendChild(row);
});

// pick lowest progress class for AI card
const lowest = classes.reduce((min, c) => c.progress < min.progress ? c : min, classes[0]);
aiRec.innerHTML = `
  <p class="ai-title">Practice ${lowest.name} first</p>
  <p class="ai-progress">Current recall ${lowest.progress}%. ${lowest.next}</p>
  <button class="ai-cta">Start recommended session</button>
`;

// greeting
const now = new Date();
const hour = now.getHours();
if (hour < 12) {
  helloText.textContent = "Good morning Professor Chris";
} else if (hour < 18) {
  helloText.textContent = "Good afternoon Professor Chris";
} else {
  helloText.textContent = "Good evening Professor Chris";
}

// personal suggestions
const totalClasses = classes.length;
const masteredClasses = classes.filter(c => c.progress >= 80).length;
const ideas = [
  `You have ${totalClasses} classes in this view.`,
  `${masteredClasses} of them are close to mastered.`,
  `${lowest.name} will benefit most from a short practice today.`,
  "Aim for one short session before the next class."
];

ideas.forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  personalList.appendChild(li);
});

