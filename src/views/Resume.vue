<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Vishwah Sivagurunathan</strong>, a Computer Science Student with a major in game engineering, highly motivated to work in a team.
       Have created and published multiple games on both itch.io and google play store.
      <br />
      <br />Most of the game programming is self-learned by making games myself as a hobby.
      <br />I love to program and design systems, gameplay and tools. Optimize and make things faster and stable focusing on quality over quantity. 
      <br />I love teamwork, because it is much more fun to work with people who share the same passion as you.
      <br />
      <br />Right now I'am looking for a job as game developer, so if you have any opportunity or want to know about some stuff how I made feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides programming and developing, I'm passionate about weight-lifting, bouldering, cooking, reading random books and traveling to unknown places which I never been.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/My_CV.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/Visu.jpg" alt="Photo of Visu" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Education</h2>

      <h3>Newcastle University - 2023</h3>
      <h4>Msc in Computer Game Engineering</h4>
      <div>Specialty in making computer and console video games</div>

      <h3>Sri Manakula Vinayagar Engineering Colleges - 2021</h3>
      <h4>B.Tech in Computer Science and Engineering</h4>
      <div>Specialty in software</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages & Scripting</h3>
       <div class="skill">c</div>
       <div class="skill">c#</div>
       <div class="skill">c++</div>
       <div class="skill">Unreal Blueprints</div>
       <div class="skill">GD Script</div>
      </div>
      <div style="clear:both" />
      <div class="skill-set">
        <h3>Engines & Libraries</h3>
        <div class="skill">Unity</div>
        <div class="skill">Unreal Engine 4/5</div>
        <div class="skill">Godot Engine</div>
        <div class="skill">Raylib</div>
        <div class="skill">SDL</div>
        <div class="skill">OpenGL</div>
      </div>
      <div style="clear:both" />
      <div class="skill-set">
        <h3>Tools & softwares</h3>
        <div class="skill">Visual Studio</div>
        <div class="skill">Git</div>
        <div class="skill">Trello</div>
        <div class="skill">Blender</div>
        <div class="skill">Aseprite</div>
        <div class="skill">Illustrator</div>
        <div class="skill">Bosca Ceoil</div>
        <div class="skill">Chiptone</div>
      </div>
      <div style="clear:both" />
      <div class="skill-set">
        <h3>Web</h3>
        <div class="skill">HTML</div>
        <div class="skill">CSS</div>
        <div class="skill">Vue</div>
       
      </div>
      <div style="clear:both" />

      <h2>Languages</h2>

      <h3>Tamil</h3>
      <div>My Mother tongue</div>

      <h3>English</h3>
      <div>Fluent speaker and excellent listener</div>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Video Games</h3>
        <div>My all time favorites are the Witcher 3, god of war 2018 & ragnarok, red dead redemption 2, elden ring and Hades</div>

        <h3>I 🧡 Sports</h3>
        <div>I do lot of weight-lifting and I love Cricket.</div>

        <h3>I 💛 Books</h3>
        <div>I am a avid reader and some of my favorites are the Stranger, the Alchemist, half girlfriend ;)</div>

        <h3>I 💚 Cinema</h3>
        <div>The Movie and series I love Spider-Man across the spider verse, game of thrones, Peaky Blinders, one piece.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    //SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}
.skill {
  float: left;
  border: 1px solid hsla(0, 0%, 86.3%,.44);
  padding: 2px 10px;
  margin: 5px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>