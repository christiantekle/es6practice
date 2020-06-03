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
    tasks.push({
        id: 22,
        name: 'gardening',
        status: 'pending'
    });
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


console.log(tasks);









