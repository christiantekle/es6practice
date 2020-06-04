const tasks = [
    {
        id: 25,
        name: 'shopping',
        status: 'pending'
    },
    {
        id: 15,
        name: 'washing dishes',
        status: 'pending'
    },
    {
        id: 10,
        name: 'going to the gym',
        status: 'pending'
    }

];
// ****  TASK 2 A: *****
const markTaskAsDone = (task) => {
    task.status = 'done';
};

markTaskAsDone(tasks[1]);

//****  TASK 2 B: *****
const markTaskAsPending = (task) => {
    tasks[1].status = 'progress';
    //tasks[0].status = 'done';
}

markTaskAsPending(tasks[1]);
markTaskAsDone(tasks[0]);
// ****  TASK 2 C: *****
// add a task with name "Gardening"
const addNewTask = (task) => {
    const gardening = tasks.push({
        id: 22,
        name: 'gardening',
        status: 'pending'
    });
    const writingProject = tasks.push({ id: 22, name: 'Start writing project', status: 'pending' });
};

addNewTask(tasks);
/*
const deleteTask = () => {
    tasks.filter((item) => {
    return item.status === 'pending' || item.status === 'progress';
})
}
deleteTask();
*/

// ****  TASK 2 D: *****
// remove one of the sample tasks

const deleteTask = (task) => {
    task.pop();
};
deleteTask(tasks);


// ****  TASK 2 E: *****
// list all of the tasks that are marked as done
const getCompletedTasks = (task) => {
    return task.filter(item => item.status === 'done');
};     
const completedTasks = getCompletedTasks(tasks);
console.log(completedTasks);

// list all the tasks that are pending
const getPendingTasks = (task) => {
    return task.filter(item => item.status === 'pending');
}
const pendingTasks = getPendingTasks(tasks);
console.log(pendingTasks);

//Check if all the tasks are done
const isAllDone = (task) => {
    return task.every(item => item.status == 'done');
};

const isDone = isAllDone(tasks);
console.log(isDone);

//Check if there is at least one pending task

const isSomePending = (task) => {
    return task.some(item => item.status === 'pending');
}
const isPending = isSomePending(tasks);
console.log(isPending);


console.log(tasks);







