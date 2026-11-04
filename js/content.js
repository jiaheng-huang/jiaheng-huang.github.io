/* =====================================================================
   CONTENT FILE — this is the only file you need to edit.
   ---------------------------------------------------------------------
   MEDIA
     Every image / video is an object like:
       { type: "image",   src: "assets/go-kart/hero.jpg", caption: "..." }
       { type: "video",   src: "assets/go-kart/launch.mp4", poster: "assets/go-kart/launch.jpg", caption: "..." }
       { type: "youtube", src: "dQw4w9WgXcQ", caption: "..." }   // just the video ID
     Optional: ratio: "16/9"  (forces a crop; default is the file's own shape)
     Project `thumb` and `hero` fill a full-width band, so use wide, high-res photos
     (2400px+). A `video` there plays silently on loop as the background.
               hint: "..."    (note shown on the empty placeholder box)

     If the file doesn't exist yet, the site shows a dashed placeholder
     box with the expected path, so you can see what to drop in.
     Set showPlaceholders: false before publishing to hide those boxes.

   TEXT
     Body paragraphs accept basic HTML: <a href="...">, <em>, <strong>.
   ===================================================================== */

window.SITE = {
  showPlaceholders: false,  // true shows dashed boxes for photos you haven't added yet

  name: "Jiaheng Huang",
  role: "Mechanical Engineering, Northeastern University",
  gradYear: "2029",
  location: "Fremont, California / Boston, Massachusetts",

  email: "huang.jiahen@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/jiaheng-huang-",
  github: "",                       // e.g. "https://github.com/yourname" (leave "" to hide)
  resume: "assets/resume.pdf",

  // Full-screen photo behind your name at the top of the home page.
  // Pick something wide and a little dark at the bottom-left so the name reads (you + the kart, the shop, a part close-up).
  // Leave commented out for a plain black opener.
  // hero: { type: "image", src: "assets/about/hero.jpg" },

  // One or two plain sentences. Say what you build, not adjectives about yourself.
  intro:
    "I'm a mechanical engineering student at Northeastern. I like projects where the CAD, " +
    "the electronics and the machining all have to work together.",

  now: [
    "Designing a quasi-direct-drive actuator",
    "Vehicle Dynamics, Northeastern Electric Racing",
    "1 lb antweight combat robot, NURobotics",
  ],

  about: {
    // Optional photo next to your About text. Doesn't need to be a headshot: you at the lathe,
    // working on the kart, or at a team build all work. Uncomment when you have one.
    // photo: { type: "image", src: "assets/about/portrait.jpg", ratio: "4/5" },
    paragraphs: [
      "I'm from Fremont, CA, and I've been drawn to building things for as long as I can remember. In high school, I helped " +
      "teach LEGO robotics to students with special needs, which first introduced me to engineering as a way to turn ideas " +
      "into something tangible. The summer before college, I took on a bigger challenge: converting a vintage race kart to " +
      "electric drive, bringing together mechanical design, fabrication, and electrical integration.",
      "Outside of engineering, I've spent time in the world of drum corps, marching mellophone with Blue Devils B and earning " +
      "a contract with the Mandarins. The experience taught me the value of discipline, consistency, and putting in the work " +
      "when things get difficult. Whether I'm working on a project or learning something new, I bring that same mindset to everything I do.",
    ],
    interests: ["Rock climbing", "Music production", "Brass performance", "Photography"],
    // Optional smaller photo under your interests, e.g.:
    // interestsPhoto: { type: "image", src: "assets/about/climbing.jpg", caption: "Bouldering" },
  },

  /* -------------------------------------------------------------------
     PROJECTS — shown in this order. `id` becomes the page URL:
     project.html?id=go-kart
     ------------------------------------------------------------------- */
  projects: [
    {
      id: "go-kart",
      title: "Electric Go-Kart",
      context: "Personal project, Fremont CA",
      dates: "May – Jul 2025",
      year: "2025",
      tags: ["VESC / FOC", "Battery integration", "Sheet metal", "3D printing", "Chassis setup"],
      summary: "Converted a vintage race kart to electric drive: rebuilt the chassis and brakes, integrated a custom pack and VESC, and tuned it on track.",
      keyStat: { value: "4.23 s", label: "0–45 mph" },
      // position: which part of the photo stays in view when it's cropped to fit the band.
      // Use fit: "contain" instead to show a tall photo whole on the right, fading into black.
      thumb: { type: "image", src: "assets/go-kart/thumb.jpg", position: "center 12%" },
      specs: [
        ["0–45 mph", "4.23 s"],
        ["Peak power", "14.39 kW"],
        ["Controller", "VESC, field-oriented control"],
        ["Chassis", "Vintage race kart, restored"],
        ["Brakes", "Hydraulic, rebuilt"],
        // ["Pack", "__S __P, __ V nominal"],
        // ["Motor", "..."],
      ],
      hero: { type: "image", src: "assets/go-kart/thumb.jpg", position: "center 12%" },
      sections: [
        {
          heading: "Overview",
          body: [
            "I started with a vintage race kart and converted it to electric drive. The chassis was restored and the " +
            "hydraulic brakes rebuilt before any of the drivetrain went in.",
          ],
        },
        {
          heading: "Drivetrain & packaging",
          body: [
            "A custom battery pack feeds a VESC motor controller. I designed a sheet-metal motor mount and 3D-printed " +
            "brackets for the electronics, including the motor controller mount.",
            // Add: why this motor/pack, how you sized it, what the mount had to survive, what broke.
          ],
          media: [
            { type: "image", src: "assets/go-kart/motor-mount.png", caption: "Sheet-metal motor mount (CAD)" },
            { type: "image", src: "assets/go-kart/controller-mount.png", caption: "3D-printed motor controller mount (CAD)" },
          ],
        },
        {
          heading: "Tuning & testing",
          body: [
            "I tuned the field-oriented control alongside the chassis setup (toe, caster, tire pressure and track width) " +
            "to balance torque delivery against handling. On-track testing measured 4.23 s from 0 to 45 mph and a peak output of 14.39 kW.",
          ],
          media: [
            { type: "youtube", src: "Y4UuLjq0PiY", caption: "On-track testing" },
          ],
        },
        // {
        //   heading: "What I'd change",
        //   body: ["..."],
        // },
      ],
    },

    {
      id: "save-spongebob",
      title: "Save SpongeBob",
      context: "Cornerstone of Engineering, Northeastern",
      dates: "Jan – Apr 2026",
      year: "2026",
      tags: ["Raspberry Pi Pico", "Python", "MATLAB", "Load cell", "Laser cutting", "CAD"],
      summary: "A portable museum exhibit that teaches 4th and 5th graders about overfishing through a magnetic fishing game.",
      keyStat: { value: "69%", label: "of expo players won" },
      thumb: { type: "image", src: "assets/save-spongebob/expo.jpg", position: "center 40%" },
      specs: [
        ["Team", "4 people"],
        ["My role", "Electronics, game logic, button enclosure"],
        ["Audience", "4th–5th graders"],
        ["Budget", "Under $100"],
        ["Footprint", "36 × 28 in table"],
        ["Controller", "Raspberry Pi Pico + MATLAB interface"],
        ["Expo result", "13 played, 9 won"],
      ],
      hero: { type: "image", src: "assets/save-spongebob/expo.jpg", position: "center 40%" },
      sections: [
        {
          heading: "The exhibit",
          body: [
            "Many 4th and 5th graders don't have a science museum nearby, and the usual alternatives (lectures and worksheets) " +
            "don't hold their attention. Our brief was a portable, child-safe exhibit that teaches a sustainability topic, " +
            "fits on a 36 × 28 in table, packs into a 27.7 × 13.8 × 16.5 in transport bag, and costs under $100.",
            "Players answer quiz questions about overfishing to unlock a round, catch 3D-printed fish from a motorized spinning pool " +
            "with a magnetic rod, then weigh and measure each catch and decide whether to keep it or release it under sustainable catch rules. " +
            "The game gives instant feedback on every decision.",
          ],
          media: [
            { type: "image", src: "assets/save-spongebob/expo.jpg", caption: "The exhibit at the expo" },
            { type: "image", src: "assets/save-spongebob/tub.jpg", caption: "The fishing pool, with the coral and SpongeBob obstacles I modeled" },
            { type: "image", src: "assets/save-spongebob/trifold.jpg", caption: "Trifold with the rules and the answers to the quiz" },
          ],
        },
        {
          heading: "Electronics and game logic",
          body: [
            "I flowcharted the game logic and built the first proof of concept on a Raspberry Pi Pico, with button inputs and LED feedback on a breadboard. " +
            "I then added the load cell and programmed the full game in Python: the question-and-answer loop, the keep-or-release decision, " +
            "point and life tracking, and automatic game-start and win counters. The final exhibit runs through a MATLAB interface connected to the Pico.",
            "I was also project manager for Milestone 2, where I led the team's concept ideation and wrote the memo and presentation.",
          ],
          media: [
            { type: "image", src: "assets/save-spongebob/gui-question.jpg", caption: "Quiz question screen" },
            { type: "image", src: "assets/save-spongebob/gui-keep.jpg", caption: "Keep-or-release decision after weighing and measuring" },
          ],
        },
        {
          heading: "Button enclosure and drive",
          body: [
            "I designed and laser cut the button enclosure through several iterations. Its panels use interlocking profiles so it press-fits together, " +
            "with cutouts for the arcade buttons, the LCD and the load cell, plus an etched ruler for measuring each fish.",
            "I also troubleshot the rotating pool. Our original direct-drive concept couldn't work: the DC gear motor made only 0.07 N·m of peak torque, " +
            "far too little against the lazy susan's friction. I redesigned it so the motor drives a wheel that turns the tub by friction.",
          ],
          media: [
            { type: "image", src: "assets/save-spongebob/button-iterations.jpg", caption: "Button enclosure iterations, initial to final" },
            { type: "image", src: "assets/save-spongebob/button-housing.jpg", caption: "Final button enclosure" },
          ],
        },
        {
          heading: "Results",
          body: [
            "At the expo, 13 of the 29 people who came up to the exhibit chose to play, and 9 of them won, a 69% win rate. Winning required " +
            "reading the trifold, so most players were picking up the content. Every player we asked said the game was fun. " +
            "The exhibit met every physical requirement: it fit the table, packed into the transport bag, and came in under $100.",
          ],
          table: {
            head: ["", "Count"],
            rows: [
              ["Approached the exhibit", "29"],
              ["Chose to play", "13"],
              ["Won", "9 (69%)"],
            ],
          },
        },
        {
          heading: "What I'd change",
          body: [
            "Some buttons were unresponsive, the load cell drifted and needed recalibration during the expo, and the game ran long enough " +
            "that some players lost focus. The rotating pool was a patch on a failed first concept, and its 1/8 in MDF housing wasn't strong enough for the new drive.",
            "Next time I'd use a lower-friction lazy susan or a stronger motor, mount the tub concentric to its axis, and add fish with bigger weight differences " +
            "plus a moving average on the load cell to make weighing reliable. Above all, I'd lock in the concept earlier so the team isn't redoing parts.",
          ],
        },
      ],
    },

    {
      id: "pasta-bridge",
      title: "Pasta Bridge",
      context: "Cornerstone of Engineering, Northeastern",
      dates: "Jan – Feb 2026",
      year: "2026",
      tags: ["Truss design", "Iterative testing", "Joint design", "Teamwork"],
      summary: "A penne truss bridge built for the highest load-to-weight ratio. Our second bridge took 1st place in our Cornerstone section by a wide margin, built on my truss design.",
      keyStat: { value: "1st place", label: "load-to-weight ratio 472.9" },
      thumb: { type: "image", src: "assets/pasta-bridge/full.jpg", position: "center 28%" },
      specs: [
        ["Result", "1st place in section"],
        ["Max load", "83.4 lb"],
        ["Bridge weight", "80 g"],
        ["Load-to-weight ratio", "472.9"],
        ["Material", "Penne, superglued joints"],
        ["Team", "4 people"],
        ["My role", "Structural (truss) design"],
      ],
      hero: { type: "image", src: "assets/pasta-bridge/full.jpg", fit: "contain" },
      sections: [
        {
          heading: "The challenge",
          body: [
            "Each team in our Cornerstone of Engineering section built pasta bridges and loaded them until failure. " +
            "Bridges were scored on how much weight they held relative to their own weight, with a separate score for aesthetics. " +
            "We built and tested two bridges.",
          ],
        },
        {
          heading: "My contribution",
          body: [
            "Our team had two candidate designs, mine and a teammate's. The final bridge used the structure of my design: " +
            "a truss made entirely of triangles, including a triangular center section where most teams used a rectangle. " +
            "We built it in penne, which came from my teammate's design and turned out to be far stronger than the long pastas " +
            "like bucatini and fettuccine that most other teams used.",
            "We also reinforced the areas that carried the load: extra beams along the top chord and extra pasta at the ends where the bridge sat on the test fixture.",
          ],
          media: [
            { type: "image", src: "assets/pasta-bridge/front.jpg", caption: "Final bridge, front view" },
          ],
        },
        {
          heading: "Iteration",
          body: [
            "Our first bridge placed 5th. After testing, I traced its failure to weak bonds at the joints. For the second bridge " +
            "we superglued every joint and sanded notches into the pasta to give the glue more surface to grip.",
            "The second bridge was 23% lighter, held 2.6 times the load, and raised our load-to-weight ratio from 139.6 to 472.9, roughly 3.4 times the first.",
          ],
          table: {
            head: ["", "Bridge 1", "Bridge 2"],
            rows: [
              ["Weight", "104 g", "80 g"],
              ["Max load", "32 lb", "83.4 lb"],
              ["Load-to-weight ratio", "139.6", "472.9"],
              ["Placement", "5th", "1st"],
            ],
          },
          media: [
            { type: "image", src: "assets/pasta-bridge/top.jpg", caption: "Top view" },
            { type: "image", src: "assets/pasta-bridge/end.jpg", caption: "End view: triangular cross-section" },
          ],
        },
        {
          heading: "What I'd change",
          body: [
            "Bridge 2 eventually failed when the penne cracked and the top joint gave out. We also lost points on aesthetics: " +
            "the beams weren't perfectly straight and the bridge looked sparse next to others. For a full-scale version, " +
            "I'd keep the design and add beams to the end triangles.",
          ],
        },
      ],
    },

    {
      id: "robot-actuator",
      title: "QDD Robot Actuator",
      context: "Personal project",
      dates: "Sep 2026 – present",
      year: "2026",
      status: "In progress",
      tags: ["Planetary gearing", "Motor design", "Electromagnetic FEA", "3D printing", "Robot arm"],
      summary: "A 3D-printed quasi-direct-drive planetary actuator for a robot arm.",
      keyStat: { value: "5 N·m", label: "continuous target" },
      thumb: { type: "image", src: "assets/robot-actuator/band.jpg" },
      specs: [
        ["Status", "Electromagnetic simulation of rotor"],
        ["Type", "Quasi-direct-drive, planetary"],
        ["Gear ratio", "6:1"],
        ["Target torque", "5 N·m continuous"],
        ["Manufacturing", "3D printed"],
        ["Application", "Robot arm joint"],
        // ["Motor", "..."],
      ],
      hero: { type: "image", src: "assets/robot-actuator/band.jpg" },
      sections: [
        {
          heading: "Goal",
          body: [
            "I'm designing a 3D-printed quasi-direct-drive planetary actuator targeting 5 N·m of continuous torque, to drive a robot arm.",
            // Add: why QDD, how you picked the ratio, bearing choices, test plan.
          ],
        },
        {
          heading: "Current status",
          body: [
            "A sun gear drives three planets inside a ring gear, packaged inside the motor, " +
            "for a 6:1 reduction. That keeps the ratio low enough for the actuator to stay backdrivable while multiplying the motor's torque.",
            "I'm now running electromagnetic simulations of the rotor: 2D magnetostatic finite-element analysis of the motor's " +
            "cross-section. I'm varying the magnet arrangement, magnet thickness, air gap and rotor back-iron thickness, and " +
            "checking each version for air-gap flux density, saturation in the iron, and the torque and cogging torque it produces.",
            "Through the 6:1 reduction, hitting the 5 N·m continuous target means the motor itself needs to deliver about 0.83 N·m " +
            "before gearbox losses. The goal is a rotor that gets there without saturating or overheating. I'm currently working through these simulations, and I'll CAD the rest of the actuator once I'm satisfied with the results.",
            // Add the software you're using, e.g. "...in FEMM" / "...in Ansys Maxwell", and any numbers you have so far.
          ],
          media: [
            { type: "image", src: "assets/robot-actuator/hero.png", caption: "Current CAD: motor with the planetary gearset inside" },
            { type: "image", src: "assets/robot-actuator/flux-plot.png", caption: "Flux density from the rotor simulation", hint: "Screenshot of a flux density plot" },
            // { type: "image", src: "assets/robot-actuator/torque-plot.png", caption: "Simulated torque vs. rotor angle" },
          ],
        },
        // { heading: "Progress log", body: ["..."], media: [ ... ] },
      ],
    },
  ],

  /* -------------------------------------------------------------------
     TEAMS — clubs (shown under "Clubs"). `media` (a photo) is optional; leave it out and the card is text only.
     ------------------------------------------------------------------- */
  teams: [
    {
      name: "Northeastern Electric Racing",
      role: "Vehicle Dynamics Member",
      dates: "Jan 2026 – present",
      points: [
        "Machined suspension jig parts and frame weld tabs.",
        "Turned suspension bushings on a manual lathe.",
      ],
      // media: { type: "image", src: "assets/electric-racing/lathe.jpg", ratio: "4/3", hint: "Parts you machined / the car" },   // uncomment when you have a photo
    },
    {
      name: "NURobotics",
      role: "Combat Robotics, 1 lb Plastic Antweight",
      dates: "Sep 2026 – present",
      points: [
        "Co-designing a 2WD horizontal-spinner combat robot in Onshape for 3D-printed fabrication.",
      ],
      // media: { type: "image", src: "assets/combat-robot/robot.jpg", ratio: "4/3", hint: "Onshape screenshot or the bot" },   // uncomment when you have a photo
    },
  ],

  skills: [
    { group: "CAD", items: ["SolidWorks", "Fusion 360", "Onshape", "AutoCAD"] },
    { group: "Programming", items: ["Python", "MATLAB", "MicroPython", "Excel"] },
    { group: "Fabrication", items: ["3D printing", "Manual lathe", "Waterjet", "Laser cutting"] },
    { group: "Certifications", items: ["Six Sigma Green Belt (IISE)", "SolidWorks CSWA (in progress)"] },
  ],

  coursework: [
    "Statics", "Materials Science", "Differential Equations", "Physics 2 (E&M)",
    "Cornerstone of Engineering 1 & 2", "Intro to Program Design",
  ],

  experience: [
    {
      name: "Drum Corps International",
      role: "Mellophone, Blue Devils B & Mandarins",
      dates: "2023 – 2024",
      text: "Marched with Blue Devils B (Open Class) through 12-hour rehearsal days, then earned a contract with the Mandarins, a Top 5 World Class corps, through a two-round audition.",
    },
    {
      name: "In-Home Supportive Services",
      role: "Care Provider",
      dates: "2023 – 2025",
      text: "Provided independent in-home care for 21 months, managing daily tasks and adapting to changing needs.",
    },
    {
      name: "Friends of Children with Special Needs",
      role: "Volunteer TA, LEGO Robotics",
      dates: "2019 – 2023",
      text: "Coached 10–15 students with special needs alongside the lead instructor, adapting guidance to each student.",
    },
  ],
};
