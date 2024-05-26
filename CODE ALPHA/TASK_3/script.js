let workoutData = [];

document.addEventListener("DOMContentLoaded", function() {
    const workoutTable = document.getElementById("workout-table");
    const goalForm = document.getElementById("goal-form");
    const setGoalBtn = document.getElementById("set-goal-btn");

    setGoalBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const exercise = document.getElementById("goal-exercise").value;
        const duration = document.getElementById("goal-duration").value;
        const goal = document.getElementById("goal-goal").value;

        const workout = {
            date: new Date(),
            exercise: exercise,
            duration: duration,
            goal: goal,
            progress: 0
        };

        workoutData.push(workout);
        renderWorkoutData();
    });

    function renderWorkoutData() {
        const workoutDataHtml = workoutData.map(function(workout, index) {
            return `
                <tr>
                    <td>${workout.date.toLocaleDateString()}</td>
                    <td>${workout.exercise}</td>
                    <td>${workout.duration} minutes</td>
                    <td>${workout.goal}</td>
                    <td>${workout.progress}%</td>
                </tr>
            `;
        }).join("");

        document.getElementById("workout-data").innerHTML = workoutDataHtml;
    }
});