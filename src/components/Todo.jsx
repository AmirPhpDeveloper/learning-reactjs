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
  const sortedTodos = [...fakeTodos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

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
              boxShadow: `0 6px 15px ${PINK}88`,
              borderRadius: "12px",
              width: "calc(50% - 20px)",
              display: "flex",
              overflow: "hidden",
              color: FOREGROUND,
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              gap: "20px",
              minWidth: 300,
              boxSizing: "border-box",
              flexBasis: "calc(50% - 20px)",
            }}
          >
            <div
              style={{
                flex: 3,
                padding: "30px 40px",
                borderRight: `5px solid ${PURPLE}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  marginBottom: 15,
                  color: ORANGE,
                  fontWeight: "700",
                  fontSize: "28px",
                }}
              >
                {todo.title}
              </h3>
              <p
                style={{
                  marginBottom: 25,
                  lineHeight: 1.6,
                  color: YELLOW,
                  fontSize: 16,
                  whiteSpace: "normal",
                }}
              >
                {todo.description}
              </p>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: priorityColors[todo.priority],
                  backgroundColor: PURPLE + "22",
                  padding: "8px 15px",
                  borderRadius: "8px",
                  width: "fit-content",
                  boxShadow: `0 0 10px ${priorityColors[todo.priority]}88`,
                  alignSelf: "flex-start",
                  marginBottom: 10,
                }}
              >
                Priority: {todo.priority}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: ORANGE,
                }}
              >
                Due: {todo.dueDate}
              </div>
            </div>

            <div
              style={{
                flex: 2,
                overflow: "hidden",
                maxHeight: 300,
                boxSizing: "border-box",
              }}
            >
              <img
                src={todo.imageUrl}
                alt={todo.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: `drop-shadow(0 0 5px ${CYAN})`,
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
