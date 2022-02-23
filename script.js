let previousId, currentId;
previousId = document.getElementById('canvasSlideshow');


function displayVideo(projectId){
  currentId = document.getElementById(projectId);

  previousId.classList.remove('select');
  currentId.classList.add('select');

  previousId = currentId;

}


// dropdown menu function
let projects = document.getElementsByClassName('project-card');

function showProject(projectId){
    console.log(projects);

    for(let i = 0 ; i<projects.length ; i++){       
        if(projects[i] != projects[projectId]){
            projects[i].classList.add('hide');
        }
        if(projects[i] == projects[projectId]){
            projects[i].classList.remove('hide');

             if(projects[i].classList.contains('select')){
                 projects[i].classList.remove('select');
             }
        }
    }

}

function displayAllProjects(){
    for(let i=0 ; i<projects.length;i++){
        if(projects[i].classList.contains('hide'))
        projects[i].classList.remove('hide');
    }
}