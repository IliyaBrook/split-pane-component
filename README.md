# Split Pane Component

A powerful and flexible React component for creating resizable split panes. Compatible with React 18 and built with Vite.

## Installation

You can install the package via npm or yarn:

```sh
npm install split-pane-component
```

```sh
yarn add split-pane-component
```

## Usage

### Here is an example of how to use the component:

```jsx
import React from 'react';
import SplitPane from 'split-pane-component';

const App = () => (
  <SplitPane
    split="vertical"
    minSize={50}
    defaultSize={100}
    maxSize={200}
    onDragStarted={() => console.log('Drag started')}
    onDragFinished={(newSize) => console.log('Drag finished, new size:', newSize)}
    className="custom-split-pane"
    style={{ border: '1px solid black' }}
    disableHoverEffect={false}
  >
    <div>Pane 1</div>
    <div>Pane 2</div>
  </SplitPane>
);

export default App;
```

### Props
* **children: ReactNode[]** - The child elements to be displayed in the split panes.
* **className: string (optional)** - Additional CSS class for the component.
* **split: SplitPaneSplitType (optional)** - Determines whether the split is "vertical" or "horizontal".
* **onDragStarted: () => void (optional)** - Callback function called when dragging starts.
* **onDragFinished: (newSize: number) => void (optional)** - Callback function called when dragging finishes with the new size.
* **style: CSSProperties (optional)** - Additional inline styles for the component.
* **onResize: onResizeSplitPane (optional)** - Callback function called on resizing the pane.
* **disableHoverEffect: boolean (optional)** - Disables the hover effect if set to true.

## License
### This project is licensed under the MIT License.

