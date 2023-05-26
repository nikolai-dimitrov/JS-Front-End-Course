function makeTasks(arr) {
    let numberOfTasks = Number(arr.shift());
    let tasksList = arr.splice(0, numberOfTasks);
    let asigneeTasks = {};
    let isSuccess = {
        'done':0,
        'todo':0,
        'review':0,
        'progres':0,
    }
    let commandsMapper = {
        'Add New': addNew,
        'Change Status': changeStatus,
        'Remove Task': removeTask,
    }
    let resultPoints = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done Points': 0,
    }
    for (const x of tasksList) {
        let [assigneeName, taskId, taskTitle, taskStatus, taskPoints] = x.split(':');
        asigneeTasks[assigneeName] = [];
    }
    for (const task of tasksList) {
        let [asigneeName, taskId, taskTitle, taskStatus, taskPoints] = task.split(':');
        taskId = {
            taskId,
            taskTitle,
            taskStatus,
            taskPoints
        }
        asigneeTasks[asigneeName].push(taskId);
    }
    for (const commandline of arr) {
        let splittedCommandLine = commandline.split(':');
        let command = splittedCommandLine.shift();
        commandsMapper[command](...splittedCommandLine);
    }
    for (const person in asigneeTasks) {
        let innerObj = asigneeTasks[person];
        for (const objD of innerObj) {
            if (objD.taskStatus === 'ToDo') {
                resultPoints['ToDo'] += Number(objD.taskPoints)
            }else if(objD.taskStatus === 'In Progress') {
                resultPoints['In Progress'] += Number(objD.taskPoints)
            }else if(objD.taskStatus === 'Code Review') {
                resultPoints['Code Review'] += Number(objD.taskPoints)
            }else if(objD.taskStatus === 'Done') {
                resultPoints['Done Points'] += Number(objD.taskPoints)
            }
        }
    }
    for (const taskName in resultPoints) {
        console.log(`${taskName}: ${resultPoints[taskName]}pts`)
    }
    if(resultPoints["Done Points"] >= (resultPoints["ToDo"] + resultPoints['Code Review'] + resultPoints["In Progress"])){
        console.log('Sprint was successful!');
    }else {
        console.log('Sprint was unsuccessful...');
    }

    function addNew(assignee, taskId, taskTitle, taskStatus, taskPoints) {
        if (asigneeTasks.hasOwnProperty(assignee)) {
            asigneeTasks[assignee].push({taskId, taskTitle, taskStatus, taskPoints});
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function changeStatus(assignee, taskId, newStatus) {
        let isFound = false;
        if (asigneeTasks.hasOwnProperty(assignee)) {
            for (const currentTask of asigneeTasks[assignee]) {
                if (currentTask.taskId === taskId) {
                    currentTask.taskStatus = newStatus;
                    isFound = true;
                }
            }
            if (isFound === false) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function removeTask(assignee, index) {
        if (asigneeTasks.hasOwnProperty(assignee)) {
            if (index < 0 || index >= asigneeTasks[assignee].length) {
                console.log('Index is out of range!');
            } else {
                asigneeTasks[assignee].splice(index, 1);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }


}
//
// makeTasks([
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
// ])
makeTasks([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
])
