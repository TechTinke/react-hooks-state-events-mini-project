import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";

test("clicking the category button adds a class of 'selected' to the button", () => {
  const mockSelectCategory = jest.fn();
  render(
    <CategoryFilter
      categories={["All", "Work", "Personal"]}
      selectedCategory="All"
      onSelectCategory={mockSelectCategory}
    />
  );

  const workButton = screen.getByRole("button", { name: "Work" });
  fireEvent.click(workButton);

  expect(workButton).toHaveClass("selected");
  expect(mockSelectCategory).toHaveBeenCalledWith("Work");
});

test("clicking the category button filters the task list", () => {
  const mockSelectCategory = jest.fn();
  render(
    <CategoryFilter
      categories={["All", "Work", "Personal"]}
      selectedCategory="All"
      onSelectCategory={mockSelectCategory}
    />
  );

  const personalButton = screen.getByRole("button", { name: "Personal" });
  fireEvent.click(personalButton);

  expect(mockSelectCategory).toHaveBeenCalledWith("Personal");
});

test("displays all tasks when the 'All' button is clicked", () => {
  const mockSelectCategory = jest.fn();
  render(
    <CategoryFilter
      categories={["All", "Work", "Personal"]}
      selectedCategory="Work"
      onSelectCategory={mockSelectCategory}
    />
  );

  const allButton = screen.getByRole("button", { name: "All" });
  fireEvent.click(allButton);

  expect(mockSelectCategory).toHaveBeenCalledWith("All");
});
