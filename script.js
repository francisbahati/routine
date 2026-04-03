document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        section.addEventListener('drop', (e) => {
            e.preventDefault();
            const taskId = e.dataTransfer.getData('text/plain');
            const task = document.getElementById(taskId);
            section.appendChild(task);
        });
    });

    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', task.id);
        });
    });
});
