import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Flatland In Chaos", "img/projects/FlatLand1.webp",
    `
    <div class="paragraph">
     <strong>Flatland In Chaos</strong> is a thing of beauty that I am so proud of. Because I learn to complete game from scratch and published it on Google play store.
     
    </div>
    <div class="paragraph center">
        <img class="phone-screenshot" src="https://play-lh.googleusercontent.com/pJiwNEyHVF63Tdwo2lkgDEiGxFoD_T5vEzl6RnYPlCJwMmggBVkA-se3YD1HvxGMdKk=w2560-h1440-rw" alt= "FlatLand In Chaos" />
    </div>
    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=com.vishwah.FlatLandInChaos" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Score Gameplay type</li>
        <li>Leaderboards and achivements from Google Play Services</li>
        <li>Original Art, Music and Sound effects</li>
        <li>Monetization though both In-game items and Reward videos, using UnityAds</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/FlatLand1.webp" alt="Flatland in Chaos Screenshot" />
        <img class="phone-screenshot" src="img/projects/FlatLand2.webp" alt="Flatland in Chaos Screenshot" />
        <img class="phone-screenshot" src="img/projects/FlatLand3.webp" alt="Flatland in Chaos Screenshot" />
        <img class="phone-screenshot" src="img/projects/FlatLand4.webp" alt="Flatland in Chaos Screenshot" />
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Hopin", "img/projects/Hopin.gif", `
    <div class="paragraph">
        <strong>Hopin</strong> is a platformer/puzzle game, Made for ludum dare 49.
        <br/>Art by <a target="_blank" href="https://kaylousberg.itch.io/">KAYKIT</a>.
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Hopin.gif" alt="Hopin Gif" />
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Unique gameplay</li>
        <li>Original music and sound effects</li>
        <li>Avaibale on web and windows</li>
        <li>SOLID design principles</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
    Play on browser and Windows is available at <a href="https://vishwah13.itch.io/hopin" target="_blank">itch.io</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/Hopin2.png" alt="Hopin Screenshot" />
    <img class="pc-screenshot" src="img/projects/Hopin3.png" alt="Hopin Screenshot" />
    <img class="pc-screenshot" src="img/projects/Hopin4.png" alt="Hopin Screenshot" />
    <img class="pc-screenshot" src="img/projects/Hopin5.png" alt="Hopin Screenshot" />
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "In Your Nightmare", "img/projects/IYM.png", `
    <div class="paragraph">
        <strong>In Your Nightmare</strong> is my first procedural generation project, where each time new maze is created for the player to escape and also an AI chases the player
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="https://img.itch.zone/aW1nLzQ3NTg5NjcucG5n/original/DTEw%2Ff.png" alt="paint game screenshot"/>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Infinite Procedural generation</li>
        <li>AI with state machine</li>
        <li>Visual effects (rain) and PostProcessing effects</li>
        <li>First-person character controller</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
       Windows build is available on <a href="https://vishwah13.itch.io/in-your-nightmare" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/IYM2.png" alt="In Your Nightmare Screenshot" />
        <img class="pc-screenshot" src="img/projects/IYM3.png" alt="In Your Nightmare Screenshot" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "StuBrew VR", "img/projects/StuBrew2.png", `
    <div class="paragraph">
    <strong>StuBrew VR</strong> is a Virtual Reality game made for my dissertation, It is a interactive beer brewing experience made using <strong>Unreal Engine 5</strong>  .
    </div>
    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/yTJsf_jb50w" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Main features :
        <ul>
        <li>Virtual Reality</li>
        <li>Realistic graphics</li>
        <li>Interactive learning experience</li>
        <li>Smooth controls and Interactions</li>
        <li>Dynamic Liquid shader in bottle</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code is availabe at <a href="https://github.com/vishwah13/StuBrew" target="_blank">github.com/vishwah13</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/StuBrew.png" alt="StuBrew VR Screenshot" />
        <img class="pc-screenshot" src="img/projects/StuBrew2.png" alt="StuBrew VR Screenshot" />
        <img class="pc-screenshot" src="img/projects/StuBrew3.png" alt="StuBrew VR Screenshot" />
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "PaintGame", "img/projects/splats.png", `
    <div class="paragraph">
        <strong>PaintGame</strong> is a team project, It is a spalatoon-like game where the player have to vandalise a museum by spraying paint on the paintings and the statues, 
        And a NPC character tries to clean the paint and catch the player.
        <br/>Contributed by <a target="_blank" href="https://github.com/Team2-PaintGame/Team2-PaintingGame/graphs/contributors">Team</a>.
    </div>
    
    <div class="paragraph">
         Features I contributed to :
        <ul>
        <li>Split-screen rendering</li>
        <li>Multi-threading for loading screen</li>
        <li>Animation system with state machine</li>
        <li>State machine for menus and handling the different types of game modes</li>
        <li>GamePlay mechanics</li>
        <li>Input form Controller</li>
        <li>level design</li>
        </ul>
    </div>
    <div class="paragraph">
    Main features :
    <ul>
    <li>Custome game engine using OpenGL</li>
    <li>Works on PS4</li>
    <li>Networked multiplayer</li>
    <li>co-op game mode</li>
    <li>AI to chase player</li>
    </ul>
</div>

    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/Team2-PaintGame/Team2-PaintingGame" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/splats.png" alt="splats Screenshot" />
        <img class="pc-screenshot" src="img/projects/splats2.png" alt="splats Screenshot" />
        <img class="pc-screenshot" src="img/projects/splats3.png" alt="splats Screenshot" />
        <img class="pc-screenshot" src="img/projects/splats4.png" alt="splats Screenshot" />
    </div>`, "#e48246"),
    new ProjectData("project-6", "Doodle Jump in C", "img/projects/Doodle.png", `
    <div class="paragraph">
        <strong>Doodle Jump in C</strong> is a clone of Doodle jump built using Raylib library.
    </div>
    <div class="paragraph">
    Main features :
    <ul>
    <li>Built using C</li>
    <li>Only single header file is used</li>
    <li>Procedural programming</li>
    <li>Pixel art</li>
    <li>infinit gameplay</li>
    </ul>
</div>

    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/vishwah13/Doodle-Jump-in-C" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Doodle.png" alt="Doodle Screenshot" />
        <img class="pc-screenshot" src="img/projects/Doodle2.png" alt="Doodle Screenshot" />
    </div>`, "#e48246"),
    new ProjectData("project-7", "Ultimate BreakOut", "img/projects/BreakOut.gif", `
    <div class="paragraph">
        <strong>Ultimate BreakOut</strong> is a clone of Breakout built using Godot game engine for GMTK 2021 game jam.
    </div>
    <div class="paragraph">
    Main features :
    <ul>
    <li>Made using Godot Engine</li>
    <li>Co-op</li>
    <li>Post-Processing effects</li>
    <li>infinit gameplay</li>
    </ul>
</div>

    <div class="paragraph">
        <div class="notice">
        Play on browser and Windows is available at <a href="https://vishwah13.itch.io/ultimate-breakout" target="_blank">Itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/BreakOut.gif" alt="BreakOut Screenshot" />
        <img class="pc-screenshot" src="img/projects/BreakOut2.jpg" alt="BreakOut Screenshot" />
    </div>`, "#e48246")
];