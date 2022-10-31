
document.querySelector('#push').onclick=function(){
    // checking if there is no input by user
    if(document.querySelector('#newtask input').value.length==0){
        alert('please enter task');
    }

    else{
        // adding entered task by user
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        // deleting the tasks

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        
    }
}