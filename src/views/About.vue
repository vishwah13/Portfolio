<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Vishwah Sivagurunathan</strong>, a computer game engineering graduate with a distinction from Newcastle University and also a aspiring game developer, And I like to make games and apps as a hobby and also for fun. What makes my passion for programming video games is the challenge and creative ways to solve it.<br/>
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">games</router-link> where most of them are made for game jams, my other notable <router-link to="/other-projects">projects</router-link>, and my <router-link to="/resume">resume</router-link>.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game developer. You can reach me at <a href="mailto:vishwahsivagurunathan@gmail.com">vishwahsivagurunathan@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/Visu.png" alt="pic of Vishwah" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>