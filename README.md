# Byron Pantoja | Front End React Developer Portfolio

> ## ABOUT ME
>
> I love transforming ideas into user-friendly web applications
> using React's component-based architecture. I thrive on
> collaborating with others, constantly learning, and staying up
> to date with the latest trends and best practices. I'm eager to
> join a team where I can contribute my skills, learn from
> experienced professionals, and make a meaningful impact through
> my work. Let's connect and build incredible experiences
> together!
>
> [Send me an Email](mailto:hello@byronpantoja.com)

## What's the purpose of this `README.md` file?

I'm creating this React portfolio repository for a few reasons. Firstly, it's a way for me to find employment as a front-end React developer. By showcasing my skills and projects, potential employers can see what I'm capable of. Secondly, I want to demonstrate that I can plan and document my work effectively. It shows that I'm organized and take my projects seriously. Lastly, I hope to give others insight into how I think and organize my projects. By sharing my coding process and project structure, I want to provide a glimpse into how I work. This portfolio is my way of presenting myself professionally and showing what I can do in the field of front-end development.

---

## PLANNING

**WHAT DO I NEED IN MY PORTFOLIO?**

- `Home` page with an introduction of who I am and what I do as a **Front-End React Developer**
  - Photo/headshot
  - Techstack Logos
  - Social Logos + `Links`
- `#contact` section on homepage with `contact form`
- `Projects` page to showcase my work
  - Tattoo Booking App (React/Supabase)
- `Notes` page to share and have quick access to useful concepts and code snippets
- Responsive Navigation for Desktop, Tablet, and Mobile

### PAGES TABLE

| PAGES    | SECTIONS                       | PATHS                    |
| -------- | ------------------------------ | ------------------------ |
| Home     | Profile, #Contact              | `/home`, `/home#contact` |
| Projects | Title, Projects Grid           | `/projects`              |
| Project  | Featured Image, Title, Content | `/projects/${projectId}` |
| Notes    | Notes                          | `/notes`                 |
| Note     | Note                           | `/notes/${noteId}`,      |
| 404      | Page not found message         | `/*`,                    |

**NICE TO HAVE'S...**

- A **database** to store my `Notes` and `Projects` data
- The ability to _Create/Read/Update/Delete_ `Projects` and/or `Notes`
- `Authentication` and a `Dashboard` that allows me to _add/remove/update_ `Projects` and `Notes` from the front end.
- Filter/sort functionality on for `Projects` and `Notes` page
  - Eventually, add pagination as well
- Dark mode
- Search bar with autocomplete
- Animations

---

## DESIGN

> Designed in Figma

### COLORS

| FILL COLORS | HEX     | SHADES OF GREY | HEX     |
| ----------- | ------- | -------------- | ------- |
| ACCENT      | #FF8482 | DARKEST        | #2f2f2f |
| BLACK       | #000    | DARK SHADE     | #A1A1A1 |
| WHITE       | #FFF    | LIGHT SHADE    | #E9E9E9 |
| BG          | #FCFCFC | LIGHTEST SHADE | #F2f2f2 |

### Home Page

- Profile Intro
- Contact Section

Home Page - Desktop

> ![Desktop Home- Byron Pantoja](https://i.imgur.com/bvpxiAr.png)

Home Page - Mobile

> ![Mobile Home- Byron Pantoja](https://i.imgur.com/4rKih2s.png)

### Projects Page

- Projects Header
- Projects Section

Project Data Structure:

| id      | created_at | featuredImage | name | description | repo | demo | status |
| ------- | ---------- | ------------- | ---- | ----------- | ---- | ---- | ------ |
| Integer | Time Stamp | Text          | Text | Text        | Text | Text | Text   |

> JSON Sample

```json
projectsData {
  "id": 1,
  "created_at": 2023-06-08 10:17:32.931+00,
  "image": "https://randomimgid.database.co/storage/v1/object/public/project-images/project-name.jpg",
  "name": "Project Name",
  "description": "Project Description...",
  "repo": "https://github.com/byronPantoja/project.git",
  "demo": "http://project.vercel.app/",
  "status": "complete",
}
```

Projects Page - Desktop

> ![Desktop Projects- Byron Pantoja](https://i.imgur.com/K6GJs4E.png)

Projects Page - Mobile

> ![Mobile Projects- Byron Pantoja](https://i.imgur.com/HPOUmYb.png)

### Notes Page

- Notes Header
- Notes Section

Notes Data Structure:

| id      | created_at | title | content | tags |
| ------- | ---------- | ----- | ------- | ---- |
| Integer | Time Stamp | Text  | Text    | Text |

> JSON Sample

```json
notesData {
  "id": 1,
  "created_at": 2023-06-08 10:17:32.931+00,
  "title": "Note Title",
  "content": "Content...",
  "tags": "tag-1, tag-2",
}
```

Notes Page - Desktop

> ![Desktop Notes- Byron Pantoja](https://i.imgur.com/F7wgYKs.png)

Notes Page - Mobile

> ![Mobile Notes- Byron Pantoja](https://i.imgur.com/o5MbgGK.png)

---

## INITIAL SETUP

### Packages

```json
"dependencies": {
  "@vitejs/plugin-react": "^4.0.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "styled-components": "^6.0.2"
},
"devDependencies": {
  "eslint": "^8.44.0",
  "eslint-config-react-app": "^7.0.1",
  "eslint-plugin-react": "^7.32.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.3.4",
  "eslint-config-prettier": "^8.8.0",
  "eslint-plugin-prettier": "^4.2.1",
  "prettier": "^2.8.8",
  "vite": "^4.4.1",
  "vite-plugin-eslint": "^1.8.1"
}
```

### Checklist

- [x] Set up React+Vite_Styled Components and make sure it's rendering.
- [x] create folders:

  ```zsh
    cd /app
    mkdir pages styles ui
  ```

- [x] create new files in `/pages`:

  ```zsh
    cd /pages
    touch Projects.jsx Notes.jsx PageNotFound.jsx
  ```

- [ ] Install + set up React Router: `npm i react-router-dom@latest`

- [ ] Build out Home Page `"/"`

  - [x] Header
    - [x] Logo
    - [x] Mobile Header
  - [ ] Dev Profile
    - [ ] SubHeading
    - [ ] Heading
    - [ ] LogoGrid - Tech Stack
    - [ ] TextArea - Intro paragraph
    - [ ] LogoGrid - Socials
    - [ ] ProfilePhoto
  - [ ] Contact Section
    - [ ] Heading
    - [ ] SubHeading
    - [ ] Form
      - [ ] Inputs - `name`, `email`, `Your Message`
      - [ ] Button - `Submit`
    - [ ] Add background image

- [ ] Build out Projects Page `"/projects"`

  - [ ] Header
    - [ ] Heading - Projects
    - [ ] ProjectLayout
      - [ ] ProjectCard
        - [ ] data: `name`,`description`, `status`, `repo`, `demo`, `image`

- [ ] Build out Notes Page `"/notes"`

  - [ ] Notes Layout - 2 columns
    - [ ] Header
      - [ ] Heading - Notes (order: 1)
      - [ ] Quote + author (order: 2)
    - [ ] NotesCard
      - [ ] Data (order: 1): `date`
      - [ ] Data (order: 2): `tags`, `title`, `content`
    - [ ] Button: Read More

---

## APP DEV

### Header
