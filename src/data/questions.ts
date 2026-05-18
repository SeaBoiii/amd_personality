import type { Question } from '../types';

/**
 * 20 questions, 5 per axis pair (P/Z, U/E, O/I, D/C).
 * Each option contributes weights to one or more axes. Some questions
 * intentionally cross axes for richer scoring.
 */
export const questions: Question[] = [
  // --- Thinking: Parallel (P) vs Zen (Z) ---
  {
    id: 1,
    prompt: 'It is Saturday morning. Your laptop is open. You have:',
    options: [
      { label: 'Six tabs, three projects, two timers, one mug of cold coffee.', weights: { P: 2, U: 1 } },
      { label: 'One tab. One thing. The world has narrowed to a single task.', weights: { Z: 2, E: 1 } },
      { label: 'A bug I refuse to lose to. Time has stopped existing.', weights: { Z: 2, U: 1 } },
      { label: 'A vague plan and a strong feeling something will start moving soon.', weights: { P: 1, E: 1 } },
    ],
  },
  {
    id: 2,
    prompt: 'You get a new project brief. Your first instinct is to:',
    options: [
      { label: 'Start spinning up four parallel experiments. See what survives.', weights: { P: 2, U: 1, O: 1 } },
      { label: 'Sit. Stare. Think. Write one perfect paragraph defining the actual problem.', weights: { Z: 2, E: 1 } },
      { label: 'Find five people who have done something adjacent and bother them.', weights: { O: 2, P: 1 } },
      { label: 'Quietly redraw the architecture before anyone has agreed there is one.', weights: { Z: 2, I: 1 } },
    ],
  },
  {
    id: 3,
    prompt: 'You think best when:',
    options: [
      { label: 'Multiple ideas are colliding in real time.', weights: { P: 2, O: 1 } },
      { label: 'It is silent and nothing else exists.', weights: { Z: 2, E: 1 } },
      { label: 'Headphones are on and everyone has been quietly evicted from the room.', weights: { Z: 2, I: 1 } },
      { label: 'A whiteboard, three colours of marker, and someone to argue with.', weights: { P: 1, O: 1 } },
    ],
  },

  // --- Energy: Unleashed (U) vs Efficient (E) ---
  {
    id: 4,
    prompt: 'A friend says "let\'s build a quick prototype this weekend." You:',
    options: [
      { label: 'Buy three new domain names by Saturday lunchtime.', weights: { U: 2, P: 1, D: 1 } },
      { label: 'Ship the smallest possible thing that proves the point.', weights: { E: 2, Z: 1 } },
      { label: 'Quietly redesign the entire architecture in a notebook first.', weights: { Z: 2, E: 1 } },
      { label: 'Recruit three more friends. Now it is a startup.', weights: { U: 1, O: 2 } },
    ],
  },
  {
    id: 5,
    prompt: 'Pick a poison:',
    options: [
      { label: 'Burn out doing something extraordinary.', weights: { U: 2, P: 1 } },
      { label: 'Burn slow and steady for forty years.', weights: { E: 2, Z: 1, I: 1 } },
      { label: "Don't burn. Reflect. Optimize. Re-route.", weights: { E: 2, Z: 1 } },
      { label: 'Burn other things to fuel the work.', weights: { U: 2, I: 1 } },
    ],
  },
  {
    id: 6,
    prompt: 'On vacation, you are most likely to:',
    options: [
      { label: 'Wake up at 6am to do every single thing on the itinerary.', weights: { U: 2, P: 1 } },
      { label: 'Find one perfect cafe and return to it every day.', weights: { E: 2, Z: 1 } },
      { label: "Walk twenty kilometres because you saw a thing in the distance.", weights: { U: 1, D: 2 } },
      { label: 'Sleep. Read. Recover the year you just lost.', weights: { E: 2 } },
    ],
  },

  // --- Work: Open (O) vs Integrated (I) ---
  {
    id: 7,
    prompt: 'Your dream tool is:',
    options: [
      { label: 'Free, open, hackable, and gloriously unfinished.', weights: { O: 2, P: 1 } },
      { label: 'Polished, paid for, and works perfectly out of the box.', weights: { I: 2, E: 1 } },
      { label: 'Custom-built by me, for me, never to be released.', weights: { I: 1, Z: 2 } },
      { label: 'Whatever has the biggest, friendliest community.', weights: { O: 2, E: 1 } },
    ],
  },
  {
    id: 8,
    prompt: 'A team disagreement is happening. You usually:',
    options: [
      { label: 'Side with whoever is closer to the user. Even if it is awkward.', weights: { O: 1, D: 1, U: 1 } },
      { label: 'Sit, listen, then quietly propose the synthesis everyone was too tired to find.', weights: { I: 2, E: 1, Z: 1 } },
      { label: 'Bring in three more people for context. The truth is in the network.', weights: { O: 2, P: 1 } },
      { label: 'Stop the conversation. Re-frame the actual problem. Restart.', weights: { Z: 2, I: 1 } },
    ],
  },
  {
    id: 9,
    prompt: 'You would rather your work be:',
    options: [
      { label: 'Forked, remixed, and repurposed by strangers.', weights: { O: 2, C: 1 } },
      { label: "Used invisibly inside something the public will never see your name on.", weights: { I: 2, Z: 1 } },
      { label: 'A bright public landmark with your name on it.', weights: { U: 2, D: 1 } },
      { label: 'Shared only with the small group of people who will get it.', weights: { Z: 1, I: 2 } },
    ],
  },

  // --- Domain: Device/Edge (D) vs Cloud/Scale (C) ---
  {
    id: 10,
    prompt: 'A piece of tech you love most:',
    options: [
      { label: 'A handheld I can hold, fix, and replace the battery in.', weights: { D: 2, O: 1 } },
      { label: 'A cluster I will never touch but can scale to a million users tomorrow.', weights: { C: 2, P: 1 } },
      { label: 'A laptop that does not need anything else to do its job.', weights: { D: 2, E: 1 } },
      { label: 'A pipeline that quietly serves the world while I sleep.', weights: { C: 2, E: 1 } },
    ],
  },
  {
    id: 11,
    prompt: 'You feel most yourself when:',
    options: [
      { label: 'Building something physical I can hold up.', weights: { D: 2, U: 1 } },
      { label: 'Designing systems whose effects I will feel from far away.', weights: { C: 2, Z: 1 } },
      { label: 'Sitting next to one user and watching it click for them.', weights: { D: 2, O: 1 } },
      { label: 'Watching a metric move because of something I shipped last quarter.', weights: { C: 2, I: 1 } },
    ],
  },
  {
    id: 12,
    prompt: 'Your ideal scale of impact is:',
    options: [
      { label: "Fifty people who deeply love the thing.", weights: { D: 2, I: 1 } },
      { label: 'Fifty million people who barely notice the thing.', weights: { C: 2, E: 1 } },
      { label: 'A small group whose lives meaningfully change.', weights: { D: 1, I: 2 } },
      { label: 'An entire industry shifting one decimal place because of me.', weights: { C: 2, U: 1, P: 1 } },
    ],
  },

  // --- Mixed / cross-axis questions ---
  {
    id: 13,
    prompt: 'When you receive criticism you secretly know is fair:',
    options: [
      { label: 'I refactor immediately. The refactor takes three days.', weights: { U: 1, Z: 1, I: 1 } },
      { label: "I sit with it for a week. Then I quietly change.", weights: { Z: 2, E: 1 } },
      { label: 'I bring it up with the group and turn it into a discussion.', weights: { O: 2, P: 1 } },
      { label: "I take notes. I optimize. I move on.", weights: { E: 2, Z: 1 } },
    ],
  },
  {
    id: 14,
    prompt: 'You are at a party. You end up:',
    options: [
      { label: 'In four conversations at once, one of them about a side project.', weights: { P: 2, O: 1 } },
      { label: 'In one long, incredibly specific conversation in the kitchen.', weights: { Z: 2, I: 1 } },
      { label: 'Quietly observing. Logging data.', weights: { Z: 1, C: 1, E: 1 } },
      { label: 'Accidentally hosting it by hour two.', weights: { U: 2, O: 1 } },
    ],
  },
  {
    id: 15,
    prompt: 'You measure a great day by:',
    options: [
      { label: 'How many threads of progress moved forward.', weights: { P: 2, U: 1 } },
      { label: 'How deep into one thing I got.', weights: { Z: 2, E: 1 } },
      { label: 'How many people I helped without anyone noticing.', weights: { I: 2, E: 1 } },
      { label: 'How much I learned that I did not know yesterday.', weights: { O: 2, P: 1 } },
    ],
  },
  {
    id: 16,
    prompt: 'In a horror movie, you are:',
    options: [
      { label: 'The one trying twelve plans simultaneously to escape.', weights: { P: 2, U: 1 } },
      { label: 'The one calmly figuring out the rules of the monster.', weights: { Z: 2, E: 1 } },
      { label: 'The one bringing the group together and refusing to let anyone die.', weights: { O: 1, I: 2 } },
      { label: 'The one who quietly survived because they prepared in act one.', weights: { E: 2, D: 1 } },
    ],
  },
  {
    id: 17,
    prompt: 'You hear "we need to scale this." You think:',
    options: [
      { label: "Excellent. Time to redesign the foundations.", weights: { Z: 2, C: 2 } },
      { label: 'Throw more cores at it.', weights: { U: 2, P: 1, C: 1 } },
      { label: 'Optimize first. Buy hardware second.', weights: { E: 2, Z: 1 } },
      { label: 'Find someone who has already solved this and copy them faster than they can blink.', weights: { O: 2, U: 1 } },
    ],
  },
  {
    id: 18,
    prompt: 'You buy a new gadget. Within a week you have:',
    options: [
      { label: 'Voided the warranty.', weights: { U: 2, D: 1, O: 1 } },
      { label: 'Read the manual cover to cover.', weights: { Z: 2, E: 1 } },
      { label: 'Integrated it into your existing setup with zero cable mess.', weights: { I: 2, E: 1 } },
      { label: 'Built a script around it that the manufacturer would frown at.', weights: { P: 2, O: 1, U: 1 } },
    ],
  },
  {
    id: 19,
    prompt: 'Your relationship with rules:',
    options: [
      { label: 'Defaults are starting points, not finishing lines.', weights: { U: 2, O: 1 } },
      { label: 'Rules exist for a reason, usually a good one.', weights: { E: 2, I: 1 } },
      { label: 'I follow the rules I respect. I rewrite the rest.', weights: { Z: 1, U: 1, P: 1 } },
      { label: 'I prefer to invent the new rulebook entirely.', weights: { U: 1, P: 1, C: 2 } },
    ],
  },
  {
    id: 20,
    prompt: 'In ten years you would love to be known as:',
    options: [
      { label: 'The person who quietly changed everything from inside.', weights: { I: 2, Z: 1, C: 1 } },
      { label: 'The person who shipped the wild thing nobody believed in.', weights: { U: 2, P: 1, D: 1 } },
      { label: 'The person who made it possible for everyone else.', weights: { O: 2, I: 1 } },
      { label: 'The person whose work just kept working, year after year.', weights: { E: 2, D: 1, I: 1 } },
    ],
  },
];
