import { createProject, type ProjectData } from '@/data/ProjectData'

const otherProjects: ProjectData[] = [
  createProject(
    'project-13',
    'AR Map',
    'https://play-lh.googleusercontent.com/dy-ZDU249ZiH8ynNgy_U6n6d0SpW3GmBx7Lq5Hd5UVUQ1GU7dwpRJEATnRBdxG-X7g=w2560-h1440-rw',
    `
    <div class="paragraph">
      <strong>AR Map</strong> allows users to search for a city and display the whole Map in 3D augmented reality.
       AR Map is the first Augmented Reality app which I published. It's available on Google Play Store.
      I was always fascinated by both VR and AR and I always wanted to build something useful and cool in AR, that's why I developed it.
    </div>
    <div class="paragraph">
      Main features:
      <ul>
      <li>3D Map in Augmented Reality</li>
      <li>Search for places</li>
      <li>Works on many Android devices</li>
      <li>Google Design guidelines for augmented reality</li>
      </ul>
    </div>
    <div class="paragraph center">
      <img class="pc-screenshot" src="/img/projects/ARMap.webp" alt="AR Map Screenshot" />
      <img class="pc-screenshot" src="/img/projects/ARMap2.webp" alt="AR Map Screenshot" />
    </div>
    `,
    '#c10606',
    false,
    true
  ),

  createProject(
    'project-14',
    'Recipe Finder',
    '/img/projects/recipe.png',
    `
    <div class="paragraph">
        <strong>Recipe Finder</strong> is built using React. This is a learning project which I used to learn React JS.
         In this app the user can search for any recipe. It will provide the details for how to make the dishes and also provides calorie information.
    </div>
    <div class="paragraph">
      Main features:
      <ul>
      <li>Built with React</li>
      <li>Recipe search functionality</li>
      <li>Calorie information</li>
      <li>Responsive design</li>
      </ul>
    </div>
    <div class="paragraph">
      <div class="notice">
        Source code available on <a href="https://github.com/vishwah13/recipes-find" target="_blank">GitHub</a>.
      </div>
    </div>
    <div class="paragraph center">
        <img class="phone-screenshot" src="/img/projects/recipe.png" alt="Recipe Finder Screenshot" />
        <img class="phone-screenshot" src="/img/projects/recipe2.png" alt="Recipe Finder Screenshot" />
    </div>
    `
  )
]

export default otherProjects
