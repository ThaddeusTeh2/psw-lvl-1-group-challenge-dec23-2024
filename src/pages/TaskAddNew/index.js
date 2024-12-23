import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { nanoid } from "nanoid";

function TaskAddNew(props) {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");
  const [taskDueDate, setTaskDueDate] = useState("");

  const handleFormSubmit = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
      tasks = [];
    }

    const newTask = {
      id: nanoid(),
      name: taskName,
      priority: taskPriority,
      dueDate: taskDueDate,
    };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    navigate("/");
  };

  return (
    <Container>
      <Header />
      <Card elevation={5} sx={{ boxShadow: 0 }}>
        <CardContent>
          <Typography variant="h4" align="center" mb={4}>
            New Task
          </Typography>
          <Box mb={2}>
            <TextField
              label="Task"
              fullWidth
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Priority"
              fullWidth
              value={taskPriority}
              onChange={(event) => setTaskPriority(event.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Due Date"
              fullWidth
              value={taskDueDate}
              onChange={(event) => setTaskDueDate(event.target.value)}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={!taskName || !taskPriority || !taskDueDate ? true : false}
            onClick={handleFormSubmit}
          >
            Add
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default TaskAddNew;
