# Sliding Puzzle project with React JS

The project includes 2 basic components, which are:

- **The Form Component**:
    This component displays a number input to enter the dimensions of the sliding puzzle. By pressing the button you can submit the form and start the game.

- **The Puzzle Component**
    The main component, which is a sliding puzzle game. The component includes the puzzle itself and a shuffle button.
    The tiles are shuffled on the first render, and can be re-shuffled any time. The shuffling algorithm ensures that the puzzle is alway solvable, by checking the number of inversions. According to the Sliding Puzzle documentation, given that the gap(empty tile) is in the last row, it is always solvable if the number of inversions is even. After solving the puzzle, the user will see a feedback of how long it took them to save the puzzle.

## The Approach

   I have used basic MUI styles for the form input and the button, and `styled-components` for styling the Puzzle components. The main logic is stored in the `hooks` to separate the logic from the component and ensure the scalability. Basic helper methods as `shuffleTiles` or `isPuzzleSolvable` are stored in `utils`.
    I chose not to use an app state (Redux/Context), as the app is quite lightweight and includes a single screen with two different components. However, the logic can be extended to store the previous results or previous games in the state if required.

### Testing
   Unit text coverage was added for the `utils` and `hooks`, and `snapshot` testing was added for the styled components.

## Available Scripts

   In the project directory, you can run:

### `yarn start`

   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

   Runs the Storybook and Jest test suites.
   `yarn test:jest` and `yarn test:storybook` can be used for running only unit or Snapshot tests respectively.


 
 


