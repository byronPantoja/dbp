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

- Profile Header
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
projects {
  "id": 1,
  "created_at": 2023-06-08 10:17:32.931+00,
  "image": "https://randomimgid.database.co/storage/v1/object/public/project-images/project-name.jpg"
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

Notes Page - Desktop

> ![Desktop Notes- Byron Pantoja](https://i.imgur.com/F7wgYKs.png)

Notes Page - Mobile

> ![Mobile Notes- Byron Pantoja](https://i.imgur.com/o5MbgGK.png)
