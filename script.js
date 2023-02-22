let previousId, currentId;
let projectVideo = document.getElementById("projectVideo");
let videoSource = document.getElementById("video-source");
let videoTitle = document.getElementById("videoTitle");

previousId = document.getElementById("canvasSlideshow");

function displayVideo(projectId) {
  setActiveState(projectId);
  setButtonLinks(projectId);

  projectVideo.classList.remove("reveal");
  videoTitle.classList.remove("reveal");

  setTimeout(() => {
    projectVideo.classList.add("reveal");
    videoTitle.classList.add("reveal");
    videoSource.src = `/videos/${projectId}.mp4`;
    projectVideo.load();
    projectVideo.play();

    setVideoTitle(projectId);
  }, 300);
}

function setActiveState(projectId) {
  currentId = document.getElementById(projectId);

  previousId.classList.remove("select");
  currentId.classList.add("select");

  previousId = currentId;
}

function setVideoTitle(projectId) {
  let firstWord = "",
    secondWord = "";
  let breakPoint;

  for (let i = 0; i < projectId.length; i++) {
    let char = projectId[i];
    if (char === char.toUpperCase() && isNaN(char)) {
      breakPoint = i;
    }
  }

  firstWord = projectId.slice(0, breakPoint);
  secondWord = projectId.slice(breakPoint, projectId.length);

  videoTitle.innerHTML = firstWord + " " + secondWord;
}

// set button links for projects

let projectVisitLink = document.getElementById("project-visit-link");
let projectCodeLink = document.getElementById("project-code-link");
let projectDescriptionLink = document.getElementById(
  "project-description-link"
);

function setButtonLinks(projectId) {
  projectVisitLink.href = `/projects/${projectId}/${projectId}.html`;
  projectCodeLink.href = `https://github.com/Ritika-Agrawal811/everyday-js-projects/blob/main/${projectId}.html`;

  setDescriptionClickEvent(projectId);
}

let projectDescriptionContainer = document.querySelector(
  ".project-description-container"
);
let previousProjectNotes = document.getElementById("canvasSlideshowNotes");
let currentProjectNotes;

function setDescriptionClickEvent(projectId) {
  projectDescriptionLink.addEventListener("click", () => {
    currentProjectNotes = document.getElementById(`${projectId}Notes`);

    projectDescriptionContainer.classList.add("show-description");

    previousProjectNotes.classList.add("hide");
    currentProjectNotes.classList.remove("hide");

    previousProjectNotes = currentProjectNotes;
  });
}

function closeNotes(projectId) {
  let projectNotes = document.getElementById(projectId);
  projectDescriptionContainer.classList.remove("show-description");

  setTimeout(() => {
    projectNotes.classList.add("hide");
  }, 1500);
}

setDescriptionClickEvent("canvasSlideshow");

function clickVisit() {
  projectVisitLink.click();
}

function clickCode() {
  projectCodeLink.click();
}

// dropdown menu function
let projects = document.getElementsByClassName("project-card");
let projectList = document.querySelector(".projects-list");

function showProject(projectId) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i] != projects[projectId]) {
      projects[i].classList.add("hide");
    }
    if (projects[i] == projects[projectId]) {
      projects[i].classList.remove("hide");

      if (projects[i].classList.contains("select")) {
        projects[i].classList.remove("select");
      }
    }
  }

  projectList.removeAttribute("open");
}

function displayAllProjects() {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("hide"))
      projects[i].classList.remove("hide");
  }

  projectList.removeAttribute("open");
}
