import React from 'react'
import ReactDOM from 'react-dom/client'
import CourseList from './components/CourseList.tsx'
import CourseComponent from './components/Course.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CourseList />
    <CourseComponent />
  </React.StrictMode>,
)
