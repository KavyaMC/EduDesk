# EduDesk

## Learning and Teaching Management System

EduDesk is a browser-based learning and teaching management system designed to help organize educational content, activities, assessments, resources, deadlines, and progress in one place.

The project is being developed as a practical JavaScript application while learning and applying modern web development concepts.

## Purpose

EduDesk is intended to make it easier for a teacher or learner to organize and manage course-related information.

It can be used to manage:

- Courses
- Modules and lessons
- Learning sections
- Assignments
- Exercises
- Projects
- Assessments and questions
- Notes
- Learning resources
- Deadlines
- Completion status
- Progress and scores

The application is designed to provide both a structured view of course content and separate views for managing activities across courses.

## Features

### Course Management

- Create and manage courses.
- Organize course content into modules and lessons.
- View course progress and related information.
- Manage courses taken and courses taught.

### Learning Content

- Organize lessons into sections.
- Add notes and learning resources.
- Keep related learning material together.
- Search and sort course information.

### Assessments

- Create assessments for lessons.
- Add multiple questions to an assessment.
- Record scores and completion status.
- Keep assessment information associated with the relevant course content.

### Assignments, Exercises, and Projects

- Create practical learning activities.
- Manage assignments and exercises.
- Record projects used to evaluate practical knowledge.
- Track completion and deadlines.

### Progress Tracking

- Track course and lesson completion.
- Monitor assignments and assessments.
- Record scores and feedback.
- Identify incomplete or overdue work.
- Display useful summaries for different areas of the application.

### Search and Sorting

- Search available information.
- Sort information using relevant fields.
- Filter information when required.
- Provide different views of the same educational information.

### Data Persistence

EduDesk is designed to preserve application data between browser sessions using browser storage.

The application should be able to:

1. Create or update information.
2. Store the information.
3. Close the browser.
4. Open EduDesk again.
5. Load the stored information.
6. Display the information again.

## Accessibility

Accessibility is considered as part of the interface design rather than being added after the application is built.

EduDesk aims to provide an interface that can be used with a keyboard and screen reader.

Accessibility considerations include:

- Semantic HTML5.
- Logical heading structure.
- Proper form labels.
- Native HTML controls wherever possible.
- Keyboard-accessible buttons and links.
- Logical tab order.
- Clear focus movement.
- Screen-reader-friendly content.
- Meaningful control names.
- Accessible navigation.
- Appropriate use of ARIA when semantic HTML alone is not sufficient.
- Live announcements for important application changes.
- `aria-live` and `aria-atomic` for dynamic status information.
- Bootstrap components used with accessibility considerations.

The interface is designed to support users who navigate primarily with the keyboard, including users who rely on the Tab key rather than browser-specific navigation shortcuts.

## User Interface

EduDesk uses semantic HTML as the foundation of its interface.

The application uses:

- Headings for page structure.
- Navigation landmarks for site navigation.
- Sections for related content.
- Lists for collections of information.
- Forms for data entry.
- Buttons for actions.
- Links for navigation.
- Native expandable elements where appropriate.
- Tables where tabular data is actually being represented.

Bootstrap may be used to provide layout and responsive presentation, but it is not intended to replace semantic HTML.

The goal is to keep the HTML meaningful even when visual styling is removed.

## Technology

EduDesk is being developed using:

- HTML5
- CSS3
- Bootstrap
- JavaScript ES6+
- DOM APIs
- Browser APIs
- Local Storage
- Asynchronous JavaScript
- Web APIs where required

## JavaScript Concepts

The project provides practical experience with several JavaScript concepts, including:

- Variables and data types
- Arrays
- Objects
- Functions
- Higher-order functions
- Modules
- DOM manipulation
- Events and event handling
- Event delegation
- Forms and form handling
- Validation
- Data transformation
- Searching
- Filtering
- Sorting
- Application state
- Local Storage
- JSON
- Promises
- Asynchronous programming
- API interaction
- Dynamic content rendering

## Development Approach

EduDesk is being developed incrementally.

Rather than attempting to build the complete application at once, individual parts of the system are developed and tested one at a time.

The development process focuses on:

- Understanding the problem before writing code.
- Building a simple working version first.
- Using semantic HTML before adding visual enhancements.
- Keeping JavaScript understandable and maintainable.
- Testing keyboard interaction.
- Testing screen-reader accessibility.
- Adding functionality gradually.
- Avoiding unnecessary complexity.
- Refactoring when the application structure becomes clearer.

## Project Goals

The project has two main goals.

The first is to create a useful application for organizing learning and teaching activities.

The second is to gain practical experience building a complete web application using JavaScript.

The project brings together individual concepts learned during web development and applies them to a larger, real-world application.

## Future Possibilities

Future development may include additional functionality such as:

- More detailed progress reports.
- Improved search and filtering.
- Advanced assessment tracking.
- Additional resource management.
- More detailed course analytics.
- API-based data.
- Improved data import and export.
- Additional accessibility improvements.
- More flexible course and activity management.

These are possibilities for future development and are not necessarily part of the current version.

## Conclusion

EduDesk is a practical learning and teaching management application built while learning JavaScript and modern web development.

The project focuses on more than simply writing JavaScript code. It provides an opportunity to work with real application data, user interaction, forms, persistence, accessibility, navigation, and information management.

The goal is to build the application gradually while keeping the interface understandable, usable, and accessible.
