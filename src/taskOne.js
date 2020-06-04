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
const markTaskAsDone = (item) => {
    tasks[1].status = 'done';
};

markTaskAsDone();

//****  TASK 2 B: *****
const markTaskAsPending = (item) => {
    tasks[1].status = 'progress';
    tasks[0].status = 'done';
}
markTaskAsPending();

// ****  TASK 2 C: *****
// add a task with name "Gardening"
const addNewTask = () => {
    const gardening = tasks.push({
        id: 22,
        name: 'gardening',
        status: 'pending'
    });
    const writingProject = tasks.push({ id: 22, name: 'Start writing project', status: 'pending' });
};


addNewTask();
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

const deleteTask = () => {
    tasks.pop();
};
deleteTask();


// ****  TASK 2 E: *****
// list all of the tasks that are marked as done
const getCompletedTasks = () => {
    return tasks.filter(item => item.status === 'done');
};     
const completedTasks = getCompletedTasks();
console.log(completedTasks);

// list all the tasks that are pending
const getPendingTasks = () => {
    return tasks.filter(item => item.status === 'pending');
}
const pendingTasks = getPendingTasks();
console.log(pendingTasks);

//Check if all the tasks are done
const isAllDone = () => {
    return tasks.every(item => item.status == 'done');
};

const isDone = isAllDone();
console.log(isDone);

//Check if there is at least one pending task

const isSomePending = () => {
    return tasks.some(item => item.status === 'pending');
}
const isPending = isSomePending();
console.log(isPending);


console.log(tasks);









