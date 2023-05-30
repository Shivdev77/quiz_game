# Quiz Game

In this quiz game, 5 random numbers will be generated to the users. They have to sort them in ascending order.

## Components

The Quiz Game consists of only a single component:

### QuizGame

The main component that renders the Quiz Game.

#### State

- `numbers`: An array of size 5 that consists of random numbers.
- `userInput`: An array to store the user's input.
- `isCorrect`: A boolean value indicating whether the user's input is correct or not.
- `isChecking`: A boolean value indicating whether the user is currently checking their answer.

#### Functions

- `generateRandomNumbers()`: Generates an array of 5 unique random numbers.
- `handleDragStart(event, value)`: Handles the drag start event when a number option is dragged.
- `handleDragOver(event)`: Handles the drag over event that allows the users to drop a number.
- `handleDrop(event, index)`: Handles the drop event when a number option is dropped into an input field.
- `handleReset()`: Resets the game and generates another set of random numbers.
- `handleCheck()`: To check if it is matching or not
- `checkArraysEqual(arr1, arr2)`: Utility function to check if two arrays are equal.

#### Rendered Content

- Number options: Rendered as draggable elements representing the numbers the user can sort.
- Input fields: Rendered as droppable elements where the user can drop the number options to sort them.
- Result: Displayed as "Correct!" or "Wrong!" based on the correctness of the user's input.
- Check button: Enabled when the user has filled all input fields and can be clicked to check the answer.
- Reset button: Can be clicked to reset the game and start with new random numbers.

## How It Works

1. When the Quiz Game component mounts, it generates a set of 5 random numbers using the `generateRandomNumbers` function and sets it in the `numbers` state.

2. The user can drag the number options and drop them into the input fields.

3. As the user drops a number option, the `handleDrop` function is called. It is to make sure that no repetition is done in dragging.

4. The user needs to drag all the 5 numbers.

5. Once the user has filled all input fields, the check button becomes enabled. Clicking the check button triggers the `handleCheck` function.

6. The `handleCheck` function compares the sorted `numbers` array with the sorted `userInput` array. If they are equal, it sets the `isCorrect` state to `true`, otherwise `false`.

7. The result is displayed as "Correct!" or "Wrong!" based on the `isCorrect` state.

8. The user can click the reset button to generate new random numbers and clear the input, allowing them to play the game again.


