import React from "react";
import {
  BACKGROUND,
  PINK,
  FOREGROUND,
  CYAN,
  ORANGE,
  YELLOW,
  RED,
  PURPLE,
  GREEN,
} from "../assets/colors";

const fakeTodos = [
  {
    id: 1,
    title: "Finish Project Proposal",
    description:
      "Complete the initial draft of the project proposal and send it to the team for review.",
    dueDate: "2025-08-21",
    priority: "High",
    imageUrl: "https://picsum.photos/id/11/200/300",
  },
  {
    id: 2,
    title: "Grocery Shopping",
    description:
      "Buy vegetables, fruits, dairy products, and some snacks for the week ahead.",
    dueDate: "2025-08-18",
    priority: "Medium",
    imageUrl: "https://picsum.photos/id/12/200/300",
  },
  {
    id: 3,
    title: "Read React Documentation",
    description:
      "Go through the latest React docs to understand hooks and context API better.",
    dueDate: "2025-08-23",
    priority: "Low",
    imageUrl: "https://picsum.photos/id/13/200/300",
  },
  {
    id: 4,
    title: "Plan Weekend Trip",
    description:
      "Research locations, check accommodations, and prepare itinerary for the trip.",
    dueDate: "2025-08-24",
    priority: "Low",
    imageUrl: "https://picsum.photos/id/14/200/300",
  },
  {
    id: 5,
    title: "Workout Session",
    description:
      "Complete a 1-hour workout focusing on cardio and strength training.",
    dueDate: "2025-08-19",
    priority: "Medium",
    imageUrl: "https://picsum.photos/id/15/200/300",
  },
  {
    id: 6,
    title: "Call Parents",
    description:
      "Catch up with parents over the phone and update them about recent events.",
    dueDate: "2025-08-20",
    priority: "High",
    imageUrl: "https://picsum.photos/id/16/200/300",
  },
  {
    id: 7,
    title: "Submit Tax Documents",
    description:
      "Gather and submit all required tax documents before the deadline.",
    dueDate: "2025-08-25",
    priority: "High",
    imageUrl: "https://picsum.photos/id/17/200/300",
  },
  {
    id: 8,
    title: "Book Doctor Appointment",
    description: "Schedule annual health check-up with the family doctor.",
    dueDate: "2025-08-22",
    priority: "Medium",
    imageUrl: "https://picsum.photos/id/18/200/300",
  },
  {
    id: 9,
    title: "Organize Workspace",
    description:
      "Clean and organize desk, files, and digital workspace for better productivity.",
    dueDate: "2025-08-20",
    priority: "Low",
    imageUrl: "https://picsum.photos/id/19/200/300",
  },
  {
    id: 10,
    title: "Learn Spanish Basics",
    description: "Complete beginner lessons on Spanish language app.",
    dueDate: "2025-08-28",
    priority: "Low",
    imageUrl: "https://picsum.photos/id/20/200/300",
  },
  {
    id: 11,
    title: "Prepare Presentation",
    description: "Create slides and notes for upcoming client presentation.",
    dueDate: "2025-08-23",
    priority: "High",
    imageUrl: "https://picsum.photos/id/21/200/300",
  },
  {
    id: 12,
    title: "Fix Website Bugs",
    description:
      "Identify and resolve bugs reported in the last testing session.",
    dueDate: "2025-08-21",
    priority: "High",
    imageUrl: "https://picsum.photos/id/22/200/300",
  },
  {
    id: 13,
    title: "Attend Networking Event",
    description:
      "Participate in local business networking event to expand contacts.",
    dueDate: "2025-08-27",
    priority: "Medium",
    imageUrl: "https://picsum.photos/id/23/200/300",
  },
  {
    id: 14,
    title: "Update Resume",
    description: "Add recent work experience and skills to resume.",
    dueDate: "2025-08-30",
    priority: "Medium",
    imageUrl: "https://picsum.photos/id/24/200/300",
  },
  {
    id: 15,
    title: "Meditation Session",
    description:
      "Practice 20 minutes of mindfulness meditation to reduce stress.",
    dueDate: "2025-08-19",
    priority: "Low",
    imageUrl: "https://picsum.photos/id/25/200/300",
  },
];

const priorityColors = {
  High: RED,
  Medium: ORANGE,
  Low: YELLOW,
};

const priorityOrder = { High: 1, Medium: 2, Low: 3 };

const Todo = () => {
  const [todos, setTodos] = React.useState(
    fakeTodos.map((todo) => ({ ...todo, completed: false }))
  );
  const [showCompleted, setShowCompleted] = React.useState(false);

  const handleDone = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changePriority = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const priorities = ["High", "Medium", "Low"];
          const currentIndex = priorities.indexOf(todo.priority);
          const newPriority =
            priorities[(currentIndex + 1) % priorities.length];
          return { ...todo, priority: newPriority };
        }
        return todo;
      })
    );
  };

  const filteredTodos = showCompleted
    ? todos
    : todos.filter((todo) => !todo.completed);

  const sortedTodos = [...filteredTodos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  // Create a lighter version of PURPLE for backgrounds
  const lightPurple = PURPLE + "22";

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: BACKGROUND,
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <button
          onClick={() => setShowCompleted(!showCompleted)}
          style={{
            backgroundColor: showCompleted ? PURPLE : BACKGROUND,
            color: FOREGROUND,
            padding: "10px 20px",
            borderRadius: "8px",
            border: `2px solid ${PURPLE}`,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {showCompleted ? "Show All" : "Show Uncompleted Only"}
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {sortedTodos.map((todo) => (
          <div
            key={todo.id}
            style={{
              backgroundColor: BACKGROUND,
              boxShadow: `0 6px 15px ${
                todo.completed ? GREEN + "88" : PINK + "88"
              }`,
              borderRadius: "12px",
              width: "calc(50% - 20px)",
              display: "flex",
              overflow: "hidden",
              color: FOREGROUND,
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              gap: "20px",
              minWidth: 300,
              boxSizing: "border-box",
              position: "relative",
              opacity: todo.completed ? 0.8 : 1,
              border: todo.completed ? `2px solid ${GREEN}` : "none",
            }}
          >
            <div
              style={{
                flex: 3,
                padding: "30px 40px",
                borderRight: `5px solid ${todo.completed ? GREEN : PURPLE}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                  style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                />
                <h3
                  style={{
                    color: todo.completed ? GREEN : ORANGE,
                    fontWeight: "700",
                    fontSize: "28px",
                    textDecoration: todo.completed ? "line-through" : "none",
                    margin: 0,
                  }}
                >
                  {todo.title}
                </h3>
              </div>

              <p
                style={{
                  marginBottom: 25,
                  lineHeight: 1.6,
                  color: todo.completed ? FOREGROUND + "aa" : YELLOW,
                  fontSize: 16,
                  whiteSpace: "normal",
                }}
              >
                {todo.description}
              </p>

              <div
                onClick={() => changePriority(todo.id)}
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: priorityColors[todo.priority],
                  backgroundColor: lightPurple,
                  padding: "8px 15px",
                  borderRadius: "8px",
                  width: "fit-content",
                  boxShadow: `0 0 10px ${priorityColors[todo.priority]}88`,
                  alignSelf: "flex-start",
                  marginBottom: 10,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Priority: {todo.priority}
              </div>

              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: todo.completed ? FOREGROUND + "aa" : ORANGE,
                }}
              >
                Due: {todo.dueDate}
              </div>

              <button
                onClick={() => handleDone(todo.id)}
                style={{
                  backgroundColor: GREEN,
                  color: BACKGROUND,
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginTop: "15px",
                  alignSelf: "flex-start",
                  transition: "all 0.3s ease",
                  boxShadow: `0 0 10px ${GREEN}88`,
                  ":hover": {
                    transform: "scale(1.05)",
                    boxShadow: `0 0 15px ${GREEN}`,
                  },
                }}
              >
                Delete
              </button>
            </div>

            <div
              style={{
                flex: 2,
                overflow: "hidden",
                maxHeight: 300,
                boxSizing: "border-box",
                position: "relative",
              }}
            >
              {todo.completed && (
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: GREEN,
                    color: BACKGROUND,
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    zIndex: 2,
                    fontSize: "14px",
                  }}
                >
                  Completed
                </div>
              )}
              <img
                src={todo.imageUrl}
                alt={todo.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: todo.completed
                    ? "grayscale(50%)"
                    : `drop-shadow(0 0 5px ${CYAN})`,
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  borderRadius: "0 12px 12px 0",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
