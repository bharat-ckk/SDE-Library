import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/** Requirements ************
 * https://www.greatfrontend.com/questions/user-interface/holy-grail
Header=>
Stretches horizontally across the whole page.
60px tall.

Columns=>
Both the left and right columns have a fixed width of 100px.
The center column is fluid-width.
All the columns should have the same height, regardless of which column is the tallest.

Footer=>
Stretches horizontally across the whole page.
100px tall.
The footer should be at the bottom of the page even if there is not enough content to fill the viewport height.
 * **/