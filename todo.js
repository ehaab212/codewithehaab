document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskTimeInput = document.getElementById('taskTime');
  const taskList = document.getElementById('taskList');

  const taskText = taskInput.value.trim();
  const taskTime = taskTimeInput.value;

  if (taskText === '' || taskTime === '') {
    alert('Please enter both a task and a time.');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.textContent = `${taskText} - ${taskTime}`;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.style.cursor = 'pointer';
  deleteBtn.addEventListener('click', function () {
    li.remove(); // Remove task from list
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Schedule alarm
  const now = new Date();
  const [hours, minutes] = taskTime.split(':');
  const taskDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);

  const timeUntilReminder = taskDateTime.getTime() - now.getTime();

  if (timeUntilReminder > 0) {
    setTimeout(() => {
      const sound = document.getElementById('alarmSound');
      sound.play();
      setTimeout(() => {
        alert(`⏰ Reminder: It's time for your task - "${taskText}"`);
      }, 500);
    }, timeUntilReminder);
  }

  // Clear input
  taskInput.value = '';
  taskTimeInput.value = '';
});
