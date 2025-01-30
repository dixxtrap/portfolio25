import { render } from 'preact'
import './index.css'
import { App } from './app.tsx'
import { BrowserRouter } from 'react-router'

render(
    <BrowserRouter>
<App /></BrowserRouter>, document.getElementById('app')!)
