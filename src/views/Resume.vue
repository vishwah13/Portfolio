<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div class="page resume">
    <h1>Resume</h1>

    <div class="resume-header">
      <div class="resume-intro">
        <p>
          I'm <strong>Vishwah Sivagurunathan</strong>, a computer game engineering
          graduate with a distinction from Newcastle University, highly motivated to
          work in a team. I have created and published multiple games on both
          <a href="https://vishwah13.itch.io/" target="_blank">itch.io</a> and
          Google Play Store.
        </p>

        <p>
          Most of the game programming is self-learned by making games myself as a
          hobby. I love to design and program systems, gameplay and tools. Optimize
          and make things faster and stable while focusing on quality over quantity.
          I love teamwork because it is much more enjoyable to work with people who
          share the same passion as I do.
        </p>

        <p>
          Right now I'm looking for a job as a game developer, so if you have any
          opportunity or want to know more about how I've made my games, feel free
          to <RouterLink to="/contact">contact me</RouterLink>.
        </p>

        <p>
          Besides programming and developing, I'm passionate about weight-lifting,
          bouldering, cooking, reading random books and traveling to unknown places
          which I've never been.
        </p>

        <a class="download-link" :href="`${baseUrl}d/MyResume.pdf`" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download as PDF
        </a>
      </div>

      <div class="about-photo">
        <img :src="`${baseUrl}img/Visu.png`" alt="Photo of Vishwah" />
      </div>
    </div>

    <div class="resume-content">
      <h2>Education</h2>

      <h3>Newcastle University - 2023</h3>
      <h4>MSc in Computer Game Engineering</h4>
      <p>Specialty in making computer and console video games</p>

      <h3>Sri Manakula Vinayagar Engineering College - 2021</h3>
      <h4>B.Tech in Computer Science and Engineering</h4>
      <p>Specialty in software</p>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages & Scripting</h3>
        <span class="skill">C</span>
        <span class="skill">C#</span>
        <span class="skill">C++</span>
        <span class="skill">GLSL</span>
        <span class="skill">Unreal Blueprints</span>
        <span class="skill">GD Script</span>
        <span class="skill">HTML</span>
        <span class="skill">CSS</span>
        <span class="skill">JavaScript</span>
      </div>

      <div class="skill-set">
        <h3>Engines & Libraries</h3>
        <span class="skill">Unity</span>
        <span class="skill">Unreal Engine 4/5</span>
        <span class="skill">Godot Engine</span>
        <span class="skill">Raylib</span>
        <span class="skill">SDL</span>
        <span class="skill">OpenGL</span>
        <span class="skill">Vulkan</span>
        <span class="skill">VueJS</span>
        <span class="skill">React</span>
      </div>

      <div class="skill-set">
        <h3>Tools & Software</h3>
        <span class="skill">Visual Studio</span>
        <span class="skill">Git</span>
        <span class="skill">Perforce</span>
        <span class="skill">Trello</span>
        <span class="skill">Blender</span>
        <span class="skill">Aseprite</span>
        <span class="skill">Adobe Illustrator</span>
        <span class="skill">Figma</span>
      </div>

      <h2>Languages</h2>

      <h3>Tamil</h3>
      <p>My mother tongue</p>

      <h3>English</h3>
      <p>Fluent speaker and excellent listener</p>

      <h2>I love...</h2>

      <h3>Video Games</h3>
      <p>
        My all time favorites are the God of War series, The Witcher 3, Red Dead
        Redemption 2, Elden Ring and Hades
      </p>

      <h3>Sports</h3>
      <p>I do a lot of weight-lifting and I love Cricket.</p>

      <h3>Books</h3>
      <p>
        I am an avid reader and some of my favorites are The Stranger, The
        Alchemist, Half Girlfriend ;)
      </p>

      <h3>Cinema</h3>
      <p>
        The movies and series I love: Spider-Man: Across the Spider-Verse, Game of
        Thrones, Peaky Blinders, One Piece.
      </p>
    </div>
  </div>
</template>
