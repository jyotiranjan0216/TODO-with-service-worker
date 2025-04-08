function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskTime = document.getElementById("taskTime");
    const taskText = taskInput.value.trim();
    const timeValue = taskTime.value;
  
    if (!taskText || !timeValue) return;
  
    const li = document.createElement("li");
    li.innerHTML = `<strong>${taskText}</strong> at ${formatTime(timeValue)}`;
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = "";
    taskTime.value = "";
  }
  
  function formatTime(time) {
    const [hour, minute] = time.split(":");
    const h = parseInt(hour, 10);
    const suffix = h >= 12 ? "PM" : "AM";
    const displayHour = h % 12 || 12;
    return `${displayHour}:${minute} ${suffix}`;
  }
  