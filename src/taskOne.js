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

const main = () => {

    
    const markTaskAsDone = (item) => {
        tasks[1]. status = 'done';
        
    };
    markTaskAsDone();
    console.log(tasks);

};
