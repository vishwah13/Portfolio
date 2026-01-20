import { createProject, type ProjectData } from '@/data/ProjectData'

const gameProjects: ProjectData[] = [
  createProject(
    'project-0',
    'Agni Game Engine',
    '/img/projects/NewProgressPic.png',
    `
    <div class="paragraph">
        <strong>Agni</strong> is a personal game engine built with modern graphics technology, featuring bleeding-edge <strong>Vulkan 1.4</strong>, physically-based rendering, entity-component-system architecture, and integrated physics simulation.
    </div>
    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/Yz6i8lrI2iY" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
      Rendering Features:
      <ul>
      <li>Vulkan 1.4 with dynamic rendering and bindless resources</li>
      <li>Physically-based rendering using metallic-roughness workflow</li>
      <li>Shadow mapping with PCF soft shadows for multiple light types</li>
      <li>Support for up to 256 point lights and 64 spot lights</li>
      <li>Frustum culling and configurable anti-aliasing (1x-8x MSAA)</li>
      </ul>
    </div>
    <div class="paragraph">
      Architecture & Tools:
      <ul>
      <li>Data-driven design using the <strong>Flecs ECS</strong> framework</li>
      <li><strong>Jolt Physics</strong> engine integration</li>
      <li>glTF 2.0 model loading with automatic material extraction</li>
      <li>ImGui-based editor with scene hierarchy and component inspector</li>
      <li>Tracy Profiler and RenderDoc integration for debugging</li>
      </ul>
    </div>
    <div class="paragraph">
      <div class="notice">
        Open Source project, source code is available at <a href="https://github.com/vishwah13/Agni" target="_blank">GitHub</a>
      </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/NewProgressPic.png" alt="Agni Game Engine Screenshot" />
    </div>
    `,
    '#f97316'
  ),

  createProject(
    'project-1',
    'Flatland In Chaos',
    '/img/projects/FlatLand1.webp',
    `
    <div class="paragraph">
     <strong>Flatland In Chaos</strong> is a thing of beauty that I am so proud of, because I learned to complete a game from scratch and published it on Google Play Store. Built using <strong>Unity and C#</strong>
    </div>
    <div class="paragraph center">
        <img class="phone-screenshot" src="https://play-lh.googleusercontent.com/pJiwNEyHVF63Tdwo2lkgDEiGxFoD_T5vEzl6RnYPlCJwMmggBVkA-se3YD1HvxGMdKk=w2560-h1440-rw" alt="FlatLand In Chaos" />
    </div>
    <div class="paragraph">
        Main features:
        <ul>
        <li>Score Gameplay type</li>
        <li><strong>Leaderboards</strong> and <strong>achievements</strong> from Google Play Services</li>
        <li>Original Art, Music and Sound effects</li>
        <li><strong>Monetization</strong> through both In-game items and Reward videos, using UnityAds</li>
        </ul>
    </div>
    <div class="paragraph center">
        <img class="phone-screenshot" src="/img/projects/FlatLand1.webp" alt="Flatland in Chaos Screenshot" />
        <img class="phone-screenshot" src="/img/projects/FlatLand2.webp" alt="Flatland in Chaos Screenshot" />
        <img class="phone-screenshot" src="/img/projects/FlatLand3.webp" alt="Flatland in Chaos Screenshot" />
        <img class="phone-screenshot" src="/img/projects/FlatLand4.webp" alt="Flatland in Chaos Screenshot" />
    </div>
    `,
    '#23bd69'
  ),

  createProject(
    'project-2',
    'T-Wrecks',
    '/img/projects/T-wrecks.gif',
    `
    <div class="paragraph">
    <strong>T-wrecks</strong> is a 2D Action Platformer game, where the player needs to use the ball to defend himself from enemies, made for Score Space Jam #14, made using <strong>Unity and C#</strong>.
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/T-wrecks.gif" alt="T-wrecks Gif" />
    </div>
    <div class="paragraph">
        Main features:
        <ul>
        <li>Bouncing ball physics</li>
        <li>High score system</li>
        <li>Game feel and effects</li>
        <li>Endless gameplay</li>
        <li>Object Oriented programming</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
        Play on browser and Windows is available at <a href="https://vishwah13.itch.io/t-wrecks" target="_blank">itch.io</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/T-wrecks.png" alt="T-wrecks Screenshot" />
        <img class="pc-screenshot" src="/img/projects/T-wrecks2.png" alt="T-wrecks Screenshot" />
    </div>
    `,
    '#e80fb7'
  ),

  createProject(
    'project-3',
    'War-Psychic',
    '/img/projects/WarPhysic.gif',
    `
    <div class="paragraph">
    <strong>War Psychic</strong> is a team project. It is a Survival First Person game. You play as a lone survivor soldier who has telekinetic powers. Use this power to your advantage to take down as many incoming enemies as possible. Made using <strong>Unreal Engine 5, C++ and Perforce</strong>.
    </div>
    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/Lo2xoCjnmgI" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Main features:
        <ul>
        <li>Destructible environment and Objects</li>
        <li>AI which patrols, chases and attacks player</li>
        <li>Game feel and effects</li>
        <li>Endless gameplay</li>
        <li>Object Oriented programming</li>
        </ul>
    </div>
    <div class="paragraph">
    Features I contributed:
    <ul>
    <li>All types of AI with Animations</li>
    <li>User Interface (UI)</li>
    <li>Gameplay Interaction between AI and player and GameLoop</li>
    <li>Setting up Perforce</li>
    <li>Music, SFX and VFX</li>
    </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
        Play on browser and Windows is available at <a href="https://usbgames.itch.io/war-psychic" target="_blank">itch.io</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/WarPhysic_8.png" alt="WarPhysic Screenshot" />
        <img class="pc-screenshot" src="/img/projects/WarPhysic_9.png" alt="WarPhysic Screenshot" />
        <img class="pc-screenshot" src="/img/projects/WarPhysic_1.png" alt="WarPhysic Screenshot" />
        <img class="pc-screenshot" src="/img/projects/WarPhysic_2.png" alt="WarPhysic Screenshot" />
        <img class="pc-screenshot" src="/img/projects/WarPhysic_3.png" alt="WarPhysic Screenshot" />
        <img class="pc-screenshot" src="/img/projects/WarPhysic_7.png" alt="WarPhysic Screenshot" />
    </div>
    `,
    '#e80fb7'
  ),

  createProject(
    'project-4',
    'StuBrew VR in UE5',
    '/img/projects/StuBrew2.png',
    `
    <div class="paragraph">
    <strong>StuBrew VR</strong> is a <strong>Virtual Reality</strong> game made for my dissertation. It is an interactive beer brewing experience made using <strong>Unreal Engine 5</strong>.
    </div>
    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/yTJsf_jb50w" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Main features:
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
        Source code is available at <a href="https://github.com/vishwah13/StuBrew" target="_blank">github.com/vishwah13</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/StuBrew.png" alt="StuBrew VR Screenshot" />
        <img class="pc-screenshot" src="/img/projects/StuBrew2.png" alt="StuBrew VR Screenshot" />
        <img class="pc-screenshot" src="/img/projects/StuBrew3.png" alt="StuBrew VR Screenshot" />
    </div>
    `,
    '#e80fb7'
  ),

  createProject(
    'project-8',
    'PaintGame in OpenGL',
    '/img/projects/splats.png',
    `
    <div class="paragraph">
        <strong>PaintGame</strong> is a team project. It is a Splatoon-like game where the player has to vandalize a museum by spraying paint on the paintings and statues. An NPC character tries to clean the paint and catch the player.
        <br/>Contributed by <a target="_blank" href="https://github.com/Team2-PaintGame/Team2-PaintingGame/graphs/contributors">Team</a>.
    </div>
    <div class="paragraph">
    Main features:
    <ul>
    <li>Custom game engine using OpenGL</li>
    <li>Works on PS4</li>
    <li>Networked multiplayer</li>
    <li>Co-op game mode</li>
    <li>AI to chase player</li>
    </ul>
    </div>
    <div class="paragraph">
         Features I contributed to:
        <ul>
        <li>Split-screen rendering</li>
        <li>Multi-threading for loading screen</li>
        <li>Animation system with state machine</li>
        <li>State machine for menus and handling the different types of game modes</li>
        <li>Gameplay mechanics</li>
        <li>Input from Controller</li>
        <li>Level design</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/Team2-PaintGame/Team2-PaintingGame" target="_blank">GitHub</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/splats.png" alt="splats Screenshot" />
        <img class="pc-screenshot" src="/img/projects/splats2.png" alt="splats Screenshot" />
        <img class="pc-screenshot" src="/img/projects/splats3.png" alt="splats Screenshot" />
        <img class="pc-screenshot" src="/img/projects/splats4.png" alt="splats Screenshot" />
    </div>
    `,
    '#f70207'
  ),

  createProject(
    'project-5',
    'Hopin',
    '/img/projects/Hopin.gif',
    `
    <div class="paragraph">
        <strong>Hopin</strong> is a platformer/puzzle game, made for Ludum Dare 49. Built using <strong>Unity and C#</strong>
        <br/>Art by <a target="_blank" href="https://kaylousberg.itch.io/">KAYKIT</a>.
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/Hopin.gif" alt="Hopin Gif" />
    </div>
    <div class="paragraph">
        Main features:
        <ul>
        <li>Unique gameplay</li>
        <li>Original music and sound effects</li>
        <li>Available on web and Windows</li>
        <li>SOLID design principles in C#</li>
        </ul>
    </div>
    <div class="paragraph">
    <div class="notice">
    Play on browser and Windows is available at <a href="https://vishwah13.itch.io/hopin" target="_blank">itch.io</a>.
    </div>
    </div>
    <div class="paragraph center">
    <img class="pc-screenshot" src="/img/projects/Hopin2.png" alt="Hopin Screenshot" />
    <img class="pc-screenshot" src="/img/projects/Hopin3.png" alt="Hopin Screenshot" />
    <img class="pc-screenshot" src="/img/projects/Hopin4.png" alt="Hopin Screenshot" />
    <img class="pc-screenshot" src="/img/projects/Hopin5.png" alt="Hopin Screenshot" />
    </div>
    `,
    '#5a78af'
  ),

  createProject(
    'project-7',
    'In Your Nightmare',
    '/img/projects/IYM.png',
    `
    <div class="paragraph">
        <strong>In Your Nightmare</strong> is my first <strong>procedural generation</strong> project, where each time a new maze is created for the player to escape and also an AI chases the player. Built using <strong>Unity and C#</strong>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="https://img.itch.zone/aW1nLzQ3NTg5NjcucG5n/original/DTEw%2Ff.png" alt="In Your Nightmare screenshot"/>
    </div>
    <div class="paragraph">
        Main features:
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
        <img class="pc-screenshot" src="/img/projects/IYM2.png" alt="In Your Nightmare Screenshot" />
        <img class="pc-screenshot" src="/img/projects/IYM3.png" alt="In Your Nightmare Screenshot" />
    </div>
    `,
    '#383838'
  ),

  createProject(
    'project-9',
    'UE5 Melee Combat System',
    '/img/projects/UE5_MCS.gif',
    `
    <div class="paragraph">
        <strong>Melee Combat System</strong> is a gameplay system built inside <strong>Unreal Engine 5</strong> using <strong>Gameplay Ability System</strong> and <strong>C++</strong>, inspired by Dark Souls.
    </div>
    <div class="paragraph">
      Main features:
      <ul>
      <li>Uses <strong>Gameplay Ability System (GAS)</strong></li>
      <li>Combo system, both light and heavy attack</li>
      <li>Lock into enemies</li>
      <li>Look at rotation</li>
      <li>Built modularly, new abilities can be easily added</li>
      </ul>
    </div>
    <div class="paragraph">
      <div class="notice">
        Open Source project, source code is available at <a href="https://github.com/vishwah13/UE5_MeleeCombat_System" target="_blank">GitHub</a>
      </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/UE5_MCS.gif" alt="Melee Combat Screenshot" />
        <img class="pc-screenshot" src="/img/projects/UE5_MCS2.gif" alt="Melee Combat Screenshot" />
        <img class="pc-screenshot" src="/img/projects/UE5_MCS3.gif" alt="Melee Combat Screenshot" />
    </div>
    `,
    '#1ca1e2'
  ),

  createProject(
    'project-10',
    'Doodle Jump in C',
    '/img/projects/Doodle.png',
    `
    <div class="paragraph">
        <strong>Doodle Jump in C</strong> is a clone of Doodle Jump built using Raylib library.
    </div>
    <div class="paragraph">
    Main features:
    <ul>
    <li>Built using C</li>
    <li>Only single header file is used</li>
    <li>Procedural programming</li>
    <li>Pixel art</li>
    <li>Infinite gameplay</li>
    </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/vishwah13/Doodle-Jump-in-C" target="_blank">GitHub</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/Doodle.png" alt="Doodle Screenshot" />
        <img class="pc-screenshot" src="/img/projects/Doodle2.png" alt="Doodle Screenshot" />
    </div>
    `,
    '#383838'
  ),

  createProject(
    'project-11',
    'Ultimate BreakOut',
    '/img/projects/BreakOut.gif',
    `
    <div class="paragraph">
        <strong>Ultimate BreakOut</strong> is a clone of Breakout built using Godot game engine for GMTK 2021 game jam.
    </div>
    <div class="paragraph">
    Main features:
    <ul>
    <li>Made using Godot Engine</li>
    <li>Co-op</li>
    <li>Post-Processing effects</li>
    <li>Infinite gameplay</li>
    </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
        Play on browser and Windows is available at <a href="https://vishwah13.itch.io/ultimate-breakout" target="_blank">Itch.io</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/BreakOut.gif" alt="BreakOut Screenshot" />
        <img class="pc-screenshot" src="/img/projects/BreakOut2.jpg" alt="BreakOut Screenshot" />
    </div>
    `,
    '#23bd69'
  ),

  createProject(
    'project-12',
    'UE4 Platformer',
    '/img/projects/Platformer_2.png',
    `
    <div class="paragraph">
        A <strong>story based third person platforming</strong> game built using <strong>Unreal Engine 4.27</strong>.
    </div>
    <div class="paragraph">
      Main features:
      <ul>
      <li>Dialog system</li>
      <li>Third person controller</li>
      <li>Water shader</li>
      <li>Story based gameplay</li>
      </ul>
    </div>
    <div class="paragraph">
      <div class="notice">
        Open Source project <a href="https://github.com/vishwah13/UE4_Platformer" target="_blank">source code</a> and <a href="https://github.com/vishwah13/UE4_Platformer/releases/tag/Prototype" target="_blank">game build</a> is available at GitHub.
      </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/Platformer_1.png" alt="Platformer Screenshot" />
        <img class="pc-screenshot" src="/img/projects/Platformer_2.png" alt="Platformer Screenshot" />
        <img class="pc-screenshot" src="/img/projects/Platformer_6.png" alt="Platformer Screenshot" />
        <img class="pc-screenshot" src="/img/projects/Platformer_4.png" alt="Platformer Screenshot" />
        <img class="pc-screenshot" src="/img/projects/Platformer_5.png" alt="Platformer Screenshot" />
    </div>
    `,
    '#1ca1e2'
  )
]

export default gameProjects
