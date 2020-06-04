const tasks = [
    {
        id: 1,
        name: 'shopping',
        status: 'pending'
    },
    {
        id: 2,
        name: 'washing dishes',
        status: 'pending'
    },
    {
        id: 3,
        name: 'going to the gym',
        status: 'pending'
    }

];

const markTaskAsDone = (task) => {
    task.status = 'done';
};

markTaskAsDone(tasks[1]);


const markTaskAsPending = (task) => {
    task.status = 'pending';
}

markTaskAsPending(tasks[1]);
markTaskAsDone(tasks[0]);


const addNewTask = (task) => {
    tasks.push(task);
};
const gardening = {
    id: 4,
    name: 'gardening',
    status: 'pending'
};
const writingProject = {
    id: 5,
    name: 'Start writing project',
    status: 'pending'
}
addNewTask(gardening);
addNewTask(writingProject);


/*const deleteTask = (dltTsk) => {
    tasks.pop(dltTsk);
};*/
const deleteTask = (taskId) => {
    return tasks.filter((task) => {
        return task.id !== taskId;
    })
}
const newTasks = deleteTask(tasks[4].id);
console.log(newTasks);


const getCompletedTasks = (task) => {
    return task.filter(item => item.status === 'done');
};
const completedTasks = getCompletedTasks(tasks);
console.log(completedTasks);

const getPendingTasks = (task) => {
    return task.filter(item => item.status === 'pending');
}
const pendingTasks = getPendingTasks(tasks);
console.log(pendingTasks);

const isAllDone = (task) => {
    return task.every(item => item.status == 'done');
};

const isDone = isAllDone(tasks);
console.log(isDone);


const isSomePending = (task) => {
    return task.some(item => item.status === 'pending');
}
const isPending = isSomePending(tasks);
console.log(isPending);


console.log(tasks);




const getTaskById = (taskId) => {
    const taskIds = tasks.map((task) => { return task.id });

    if (taskIds.includes(taskId)) {
        return tasks.filter((task) => task.id === taskId);   
    }
    else {
        return "Not Found";
    }
}
const getTask = getTaskById(2);
console.log(getTask);



