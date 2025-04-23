import { render, screen, fireEvent, act } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const mockSubmit = jest.fn();
  render(
    <NewTaskForm
      categories={["Work", "Personal"]}
      onTaskFormSubmit={mockSubmit}
    />
  );

  act(() => {
    fireEvent.change(screen.getByLabelText(/Details/), {
      target: { value: "Pass the tests" },
    });
    fireEvent.change(screen.getByLabelText(/Category/), {
      target: { value: "Work" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /Add Task/i }));
  });

  expect(mockSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Work",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  const mockSubmit = jest.fn();
  render(
    <NewTaskForm
      categories={["Work", "Personal"]}
      onTaskFormSubmit={mockSubmit}
    />
  );

  act(() => {
    fireEvent.change(screen.getByLabelText(/Details/), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByLabelText(/Category/), {
      target: { value: "Personal" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /Add Task/i }));
  });

  expect(mockSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "New Task",
      category: "Personal",
    })
  );
});
