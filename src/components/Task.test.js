import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Task from "../components/Task";
test("displays the task text", () => {
  const task = { id: 1, text: "text!", category: "category!" };
  const mockDeleteTask = jest.fn();
  render(<Task task={task} onDeleteTask={mockDeleteTask} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  const task = { id: 1, text: "text!", category: "category!" };
  const mockDeleteTask = jest.fn();
  render(<Task task={task} onDeleteTask={mockDeleteTask} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", async () => {
  render(<App />);

  const taskText = "Buy rice";
  const deleteButton = await waitFor(() =>
    screen.getByRole("button", { name: /Delete/i })
  );

  userEvent.click(deleteButton);

  expect(screen.queryByText(taskText)).not.toBeInTheDocument();
});
