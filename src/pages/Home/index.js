import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Chip from "@mui/material/Chip";

function Home() {
  const [tasks, setTasks] = useState([]);
  const priorities = ["Low", "High"];

  useEffect(() => {
    const stringTasks = localStorage.getItem("tasks");
    const parsedTasks = JSON.parse(stringTasks) || [];
    setTasks(parsedTasks);
  }, []);

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <Container maxWidth="xl">
      <Header />
      <Stack
        flexDirection={"row"}
        justifyContent={"end"}
        gap={"10px"}
        sx={{ mb: 3 }}
      >
        <Button
          LinkComponent={Link}
          to="/new"
          variant="contained"
          color="success"
        >
          <AddIcon /> Add New Task
        </Button>
      </Stack>
      {tasks.length !== 0 ? (
        priorities.map((it) => (
          <>
            <Typography variant="h6">Priority: {it}</Typography>
            <Grid
              container
              spacing={2}
              sx={{ marginBottom: 10 }}
              display={"flex"}
              justifyContent={"center"}
            >
              {tasks
                .filter((task) => task.priority === it)
                .map((task) => (
                  <Grid size={12} key={task.id}>
                    <Card sx={{ minWidth: 275 }}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        padding={2}
                      >
                        <Typography variant="h6" component="div">
                          {task.name}
                        </Typography>

                        <CardContent>
                          <Box display="flex" gap={1}>
                            <Chip
                              label={`Priority: ${task.priority}`}
                              color={
                                task.priority === "High" ? "error" : "primary"
                              }
                              variant="outlined"
                              size="small"
                            />
                            <Chip
                              label={`Due: ${task.dueDate}`}
                              color="error"
                              variant="outlined"
                              size="small"
                            />
                          </Box>
                        </CardContent>

                        <CardActions>
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleTaskDelete(task.id)}
                          >
                            Delete
                          </Button>
                        </CardActions>
                      </Box>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </>
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingY: 10,
          }}
        >
          <Typography variant="h6">No task added yet</Typography>
        </Box>
      )}
    </Container>
  );
}

export default Home;
