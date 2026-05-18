import type { Personality } from '../types';

/**
 * 16 personalities mapped to a 4-axis system:
 *   Thinking: P (Parallel) | Z (Zen / focused)
 *   Energy:   U (Unleashed) | E (Efficient)
 *   Work:     O (Open)      | I (Integrated)
 *   Domain:   D (Device)    | C (Cloud)
 *
 * These are creative archetypes inspired by AMD's portfolio,
 * NOT official AMD branding. Names are evocative, not literal.
 */
export const personalities: Personality[] = [
  {
    code: 'PUOD',
    name: 'The Threadripper',
    vibe: 'Maximalist Multitasker',
    tagline: "You don't count threads — you ARE the threads.",
    description:
      "Twelve tabs. Three side projects. A half-finished home lab humming in the closet. You don't slow down — you parallelize. While most people burn out trying to do two things at once, you're orchestrating six and somehow they all land. Your mind branches and merges like a workload graph; what looks like chaos to others is your own internal scheduler running flat-out. You're not afraid of big problems, just bored by small ones. Give you the impossible deliverable and the cold brew, and watch what happens.",
    traits: ['Parallel-thinker', 'High-bandwidth', 'Open-source soul', 'Workshop-built'],
    chipFamily: 'Threadripper',
    accent: '#FF3A3A',
  },
  {
    code: 'PUOC',
    name: 'The Instinct',
    vibe: 'AI Visionary',
    tagline: 'While others guess, you already trained the model.',
    description:
      "You see patterns where everyone else sees noise. You're the friend who casually predicts the plot twist, the trend, the breakup — three weeks early. You operate on signal, not vibes, and you'd rather train your intuition than trust it raw. People bring you their messy questions because you turn them into clean answers. You don't show your work because the work was a 70-billion-parameter shower thought. You're not trying to be the smartest in the room; you just keep ending up there.",
    traits: ['Pattern-finder', 'Compute-hungry', 'Open-minded', 'Cloud-native'],
    chipFamily: 'Instinct MI',
    accent: '#FF5555',
  },
  {
    code: 'PUID',
    name: 'The Radeon',
    vibe: 'High-Frame Aesthete',
    tagline: "Life's a canvas. You render it at 240 frames per second.",
    description:
      "You feel things in high resolution. A perfect sunset, a song that hits, a clean cut in a film — you notice the texture of the moment when everyone else is half-watching. You chase beauty and you chase smoothness; jank ruins your day. You'll rebuild a slide three times to fix one wrong gradient because you know people feel polish even if they can't name it. You're vivid, a little dramatic, and unapologetically tuned for maximum experience. Low-fi people find you exhausting. The rest of us call you alive.",
    traits: ['Visual-first', 'Performance-obsessed', 'Vibe-tight', "Show-don't-tell"],
    chipFamily: 'Radeon RX',
    accent: '#FF1F4D',
  },
  {
    code: 'PUIC',
    name: 'The EPYC',
    vibe: 'Datacenter Conqueror',
    tagline: 'The room gets quieter when you walk in.',
    description:
      "You don't enter rooms — you take ownership of them. There's a calm gravity to you that makes people lean in and shut up. You think in scale: not the project, the program. Not the team, the org. Not the quarter, the decade. While others are optimizing the leaf, you're rebuilding the trunk. You don't need to be loud because the move you just made is doing the talking. You make people uncomfortable in the best way — they realize they've been thinking too small.",
    traits: ['Strategic', 'Scale-native', 'Quietly dominant', 'Long-horizon'],
    chipFamily: 'EPYC',
    accent: '#ED1C24',
  },
  {
    code: 'PEOD',
    name: 'The APU',
    vibe: 'Everywhere Generalist',
    tagline: 'Everywhere. Efficient. Unimpressed by excess.',
    description:
      "You don't need a custom rig for every situation — you ARE the custom rig. CPU, GPU, common sense, and emotional bandwidth, all on one tidy die. You're the friend who can host the dinner, fix the WiFi, calm the toddler, and still close the laptop on time. You distrust over-engineering: the elegant answer is usually the small one done well. You travel light, run cool, and never make a fuss. People underestimate how much you actually carry. Then they need you, and they remember.",
    traits: ['All-in-one', 'Low-drama', 'Resourceful', 'Quietly capable'],
    chipFamily: 'Ryzen APU',
    accent: '#E94B5A',
  },
  {
    code: 'PEOC',
    name: 'The ROCm Pioneer',
    vibe: 'Open-Source Idealist',
    tagline: 'You believe the best tools should be free for everyone.',
    description:
      "You read the changelog. You file the issue. You write the patch. You believe walled gardens are an apology for bad architecture, and that the future deserves to be a fair fight. You're patient with people and impatient with monopolies. Your friends call you idealistic; your reply is that someone has to be, otherwise nothing actually changes. You're slowly building something the world doesn't know it needs yet — and when it lands, it'll be unowned, unkillable, and free.",
    traits: ['Principled', 'Community-first', 'Patient builder', 'Anti-fragile'],
    chipFamily: 'ROCm Stack',
    accent: '#FF6B6B',
  },
  {
    code: 'PEID',
    name: 'The SmartShift',
    vibe: 'Adaptive Optimizer',
    tagline: "You balance things others don't even notice are off.",
    description:
      "You read rooms like power-state tables. Energy is shifting toward the introvert who hasn't spoken? You ask them a question. The conversation is overheating? You crack the perfect joke. You don't manage people, you load-balance them — and they feel taken care of without quite knowing why. You hate waste: of words, of time, of attention. Your superpower isn't doing more; it's quietly redirecting effort to where it actually matters. Most people will never know how much you smoothed the path for them. That's kind of the point.",
    traits: ['Emotionally tuned', 'Quietly fixing things', 'Efficient', 'Read-the-room'],
    chipFamily: 'SmartShift',
    accent: '#FF4D6D',
  },
  {
    code: 'PEIC',
    name: 'The Infinity Fabric',
    vibe: 'The Connector',
    tagline: "You're the reason the whole team actually works.",
    description:
      "You're not the loudest, the fastest, or the one giving the demo. You're the one who knows everyone, who introduces the right two people, who makes sure the docs got written, who shows up to the unsexy meeting because someone has to. You hold the system together with relationships and small invisible kindnesses. Without you, things technically still run — for about a week. Then it all starts subtly falling apart and nobody can name why. You make collaboration possible at a scale most people can't even perceive.",
    traits: ['Glue', 'Trust-builder', 'Bandwidth-rich', 'Cross-domain'],
    chipFamily: 'Infinity Fabric',
    accent: '#FF7878',
  },
  {
    code: 'ZUOD',
    name: 'The Overclocker',
    vibe: 'Limit-Breaking Maverick',
    tagline: 'Rules are just factory defaults to you.',
    description:
      "Voltage curves, life curves, social curves — you're tweaking all of them. The default settings are someone else's compromise; you'd rather find the edge yourself. You run hot. You burn out occasionally. You also routinely do things people said couldn't be done, then shrug and say 'it was fine.' You don't trust authority that hasn't earned it, and you don't trust limits that haven't been tested. You're not reckless. You're just allergic to wasted potential — yours or anyone else's.",
    traits: ['Edge-seeker', 'Self-experimenter', 'High-risk / high-reward', 'Hands-on'],
    chipFamily: 'Unlocked-K SKU',
    accent: '#FF1818',
  },
  {
    code: 'ZUOC',
    name: 'The Zen Architect',
    vibe: 'Foundational Thinker',
    tagline: 'Your best work happens at the architecture level.',
    description:
      "You don't fix bugs — you fix the conditions that allowed the bug. While the team is patching symptoms, you're quietly redrawing the diagram on a napkin. You think in invariants and trade-offs, in 'this decision will compound for ten years.' You're slow to commit and impossible to rush, but when you finally ship, the design just keeps working. People learn, eventually, to stop arguing with you in week one and just wait until week three. By then, you're usually right. Annoyingly so.",
    traits: ['Systems-thinker', 'Long-game', 'Disciplined', 'First-principles'],
    chipFamily: 'Zen Microarchitecture',
    accent: '#D8141B',
  },
  {
    code: 'ZUID',
    name: 'The Embedded',
    vibe: 'Behind-the-Scenes Engine',
    tagline: 'You power the world from places no one looks.',
    description:
      "You're inside the kiosk, the medical device, the satellite, the parking meter. You don't need an audience — you'd actually prefer not to have one. You are reliable in a way that makes people forget you exist, which suits you fine because that's literally the goal. You'd rather build the one thing that runs for fifteen years than the ten things that go viral for fifteen minutes. You take craft seriously. You take credit lightly. The world runs on people like you, and most of the world doesn't know it.",
    traits: ['Quietly essential', 'Long-life', 'Low-overhead', 'No-drama'],
    chipFamily: 'Embedded Ryzen',
    accent: '#C71017',
  },
  {
    code: 'ZUIC',
    name: 'The Semi-Custom',
    vibe: 'Ghost Genius',
    tagline: "Your greatest work has someone else's name on it. And you're fine with that.",
    description:
      "Consoles, custom silicon, the inside of products you didn't sign. You're the engine; someone else gets the badge. And you genuinely don't mind, because you know what you built and so does the small circle of people who matter. You take a brief seriously. You'd rather solve the exact right problem invisibly than the slightly wrong problem loudly. You're not without ego — you just spend it carefully, on the work itself. When something you secretly powered ships and gets a standing ovation, you smile, take a sip of your drink, and move on.",
    traits: ['Bespoke', 'Discreet', 'Client-craftsperson', 'Tailored excellence'],
    chipFamily: 'Semi-Custom Silicon',
    accent: '#B30E15',
  },
  {
    code: 'ZEOD',
    name: 'The RDNA Dreamer',
    vibe: 'Quiet Romantic',
    tagline: 'You see beauty in framerates and light in ray traces.',
    description:
      "You believe a well-lit scene can fix a bad day. You linger on details — the way a shader catches an edge, the right amount of bloom on a streetlight, the shape of a font you'll never use but love anyway. You're efficient with your energy because you spend so much of it caring deeply about how things look and feel. People who don't get you think you're picky. People who do get you bring you their work first because they know you'll see what's almost there. You make ordinary things shimmer.",
    traits: ['Aesthete', 'Soft-power', 'Detail-sensitive', 'Imaginative'],
    chipFamily: 'RDNA Architecture',
    accent: '#FF4D7E',
  },
  {
    code: 'ZEOC',
    name: 'The Pensando Guardian',
    vibe: 'Silent Protector',
    tagline: "Quietly protecting what others don't know exists.",
    description:
      "You see the threat surface. You see the social one too. You're the friend who quietly checks the lock twice, who adjusts the contract clause, who notices the tone shift before anyone else does. You don't fearmonger; you just don't gamble with things that matter. You're paranoid in a useful, almost loving way — a watchtower for the people you care about. You'd rather prevent ten disasters nobody hears about than fix one publicly. Trust is your currency, and you spend it like it's printed on rare metal.",
    traits: ['Vigilant', 'Trustworthy', 'Calm under fire', 'Privacy-respecting'],
    chipFamily: 'Pensando DPU',
    accent: '#E63946',
  },
  {
    code: 'ZEID',
    name: 'The Ryzen',
    vibe: 'The Reliable One',
    tagline: 'Dependable, dominant, and always in demand.',
    description:
      "You're the default pick. The trusted call. The one your friends, your team, and your group chat actually listen to. You're not the loudest or the flashiest, but everyone notices when you're not in the room. You've built your reputation the slow way — one shipped promise at a time — and now people just assume you'll figure it out. The pressure that comes with being everyone's go-to person is real, but you carry it well. You're the upgrade everyone keeps making and never regrets.",
    traits: ['Solid', 'Versatile', 'Quietly confident', 'Mainstream-strong'],
    chipFamily: 'Ryzen',
    accent: '#ED1C24',
  },
  {
    code: 'ZEIC',
    name: 'The Xilinx Alchemist',
    vibe: 'The Reconfigurable Mind',
    tagline: "You don't fit in a box. You reprogram the box.",
    description:
      "Yesterday you were a writer. Today you're learning to mix records. Next month you'll be deep in tax law because a friend needs help. You're the most adaptable person anyone knows — not flaky, just genuinely, structurally changeable. You re-wire yourself to the problem in front of you and that scares people who picked one lane and stayed in it. You're proof that 'fixed function' is a choice, not a fate. The world calls people like you 'unfocused.' You know the truth: you're field-programmable.",
    traits: ['Reconfigurable', 'Polymath', 'Curious', 'Cross-domain'],
    chipFamily: 'Adaptive SoC (FPGA)',
    accent: '#C81E29',
  },
];

export const personalityByCode = (code: string): Personality | undefined =>
  personalities.find((p) => p.code === code);
