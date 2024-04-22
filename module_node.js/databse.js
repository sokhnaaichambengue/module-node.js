let tasklist=[];
function addTask(task){
    tasklist.push(task);
}
function getTasklist(){
    return tasklist;
}
nodemon.exports={
    addTask,
    getTasklist
};