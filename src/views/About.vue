<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div class="page about">
    <h1>Hello!</h1>

    <div class="about-content">
      <div class="about-text">
        <p>
          I'm <strong>Vishwah Sivagurunathan</strong>, a computer game engineering
          graduate with a distinction from Newcastle University and an aspiring game
          developer. I love making games and apps as a hobby and for fun. What drives
          my passion for programming video games is the challenge and creative ways
          to solve problems.
        </p>

        <p>
          I've worked on
          <RouterLink to="/game-projects">games</RouterLink> where most of them are
          made for game jams. Check out my
          <RouterLink to="/resume">resume</RouterLink> for more details.
        </p>

        <p>
          I'm <strong>currently looking for a job</strong> as a game developer. You
          can reach me at
          <a href="mailto:vishwahsivagurunathan@gmail.com">vishwahsivagurunathan@gmail.com</a>
          or <RouterLink to="/contact">through here</RouterLink>.
        </p>
      </div>

      <div class="about-photo">
        <img :src="`${baseUrl}img/Visu.png`" alt="Photo of Vishwah" />
      </div>
    </div>
  </div>
</template>
