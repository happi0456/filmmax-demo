export const USER_ROLES = [
  {
    id: 'director',
    label: 'Director / Line Producer (Full Control)',
    shortLabel: 'Director & Line Producer',
    accessibleDeptIds: [
      'scripting',
      'casting',
      'styling',
      'inventory',
      'direction',
      'scene-mgmt',
      'production-mgmt',
    ],
  },
  {
    id: 'scriptwriter',
    label: 'Scriptwriter',
    shortLabel: 'Scriptwriter',
    accessibleDeptIds: ['scripting', 'scene-mgmt'],
  },
  {
    id: 'costume',
    label: 'Costume Department Head',
    shortLabel: 'Costume Head',
    accessibleDeptIds: ['styling', 'casting'],
  },
  {
    id: 'equipment',
    label: 'Equipment Manager',
    shortLabel: 'Equipment Manager',
    accessibleDeptIds: ['inventory', 'production-mgmt'],
  },
];

export const DEPARTMENT_CARDS = [
  { id: 'scripting', title: 'Scripting', metric: '12 Scenes' },
  { id: 'casting', title: 'Casting', metric: '8 Actors' },
  { id: 'styling', title: 'Styling', metric: '15 Costumes' },
  { id: 'inventory', title: 'Inventory', metric: '24 Gears' },
  { id: 'direction', title: 'Direction', metric: 'Approved' },
  { id: 'scene-mgmt', title: 'Scene Mgmt', metric: 'Breakdown OK' },
  { id: 'production-mgmt', title: 'Production Mgmt', metric: 'Logistics OK' },
];

export const SCENE_1_DATA = {
  id: 'scene-1',
  receiptNumber: 'SLIP-001-A',
  title: 'Scene 1: EXT. STREET - DAY',
  slugline: 'EXT. FINANCIAL DISTRICT - DAY',
  pages: '2 3/8 pgs',
  runtime: '03:15',
  hasConflict: false,
  locationTime: [
    { label: 'Location', value: '5th & Grand Plaza' },
    { label: 'Time & Setting', value: 'Daylight · 08:45 – 11:30 AM' },
    { label: 'Permit', value: 'Permit #LA-904B (Approved)' },
  ],
  cast: [
    { name: 'Marcus Vance', role: 'Det. Vance', callTime: '07:30 AM' },
    { name: 'Julian Cross', role: 'Klaus Miller', callTime: '08:00 AM' },
    { name: 'Elena Rostova', role: 'Courier (Stunt)', callTime: '08:15 AM' },
  ],
  equipment: [
    { name: 'Sony Venice 2 (8K A-Cam)', serial: 'SN-8802', status: 'Allocated' },
    { name: 'Cooke Anamorphic Primes', serial: 'CK-4410', status: 'Allocated' },
    { name: 'Sound Devices 888 Recorder', serial: 'SD-0912', status: 'Allocated' },
  ],
  costumes: [
    { character: 'Det. Vance', outfit: 'Charcoal Trench Coat', rack: 'Rack 2' },
    { character: 'Klaus Miller', outfit: 'Olive Field Jacket', rack: 'Rack 1' },
  ],
};

export const SCENE_2_DATA = {
  id: 'scene-2',
  receiptNumber: 'SLIP-002-B',
  title: 'Scene 2: INT. WAREHOUSE - NIGHT',
  slugline: 'INT. WAREHOUSE - NIGHT',
  pages: '3 5/8 pgs',
  runtime: '04:45',
  hasConflict: true,
  conflictReason: "Camera 'ARRI Alexa Mini' is already reserved for the 2nd Unit night shoot.",
  locationTime: [
    { label: 'Location', value: 'Pier 14 Terminal' },
    { label: 'Time & Setting', value: 'Night · 20:00 – 03:30 AM' },
    { label: 'Permit', value: 'Permit #LA-919C (Sound Pending)' },
  ],
  cast: [
    { name: 'Marcus Vance', role: 'Det. Vance', callTime: '19:00 PM', conflict: 'Overlaps ADR at Pinewood' },
    { name: 'Harlan Mercer', role: 'Boss Chen', callTime: '19:30 PM' },
    { name: 'Tariq Al-Mansoor', role: 'Enforcer Briggs', callTime: '19:45 PM' },
  ],
  equipment: [
    { name: 'ARRI Alexa Mini (Body #01)', serial: 'SN-9140', status: 'Double-Booked', conflict: true },
    { name: 'ARRI Master Anamorphics', serial: 'AR-9921', status: 'Allocated' },
    { name: 'Astera Titan 8-Tube Kit', serial: 'AST-08', status: 'Allocated' },
  ],
  costumes: [
    { character: 'Det. Vance', outfit: 'Distressed Trench (Squib)', rack: 'Rack 2-B' },
    { character: 'Boss Chen', outfit: 'Silk Tuxedo Jacket', rack: 'Rack 3' },
  ],
};

export const PRODUCTION_STAGES = [
  { name: 'Pre-Production', status: 'Completed' },
  { name: 'Filming', status: 'Active (Day 14 of 32)' },
  { name: 'Post-Production', status: 'Scheduled' },
];

export const MASTER_EQUIPMENT_INVENTORY = [
  { name: 'Sony Venice 2 (8K A-Cam)', category: 'Camera', serial: 'SN-8802', operator: 'Sarah Lin', status: 'Allocated' },
  { name: 'ARRI Alexa Mini (Body #01)', category: 'Camera', serial: 'SN-9140', operator: 'Tyler Ross (Unit 2)', status: 'Double-Booked' },
  { name: 'RED V-Raptor 8K (Standby)', category: 'Camera', serial: 'SN-1190', operator: 'Vault', status: 'Available' },
  { name: 'Cooke Anamorphic Primes', category: 'Lenses', serial: 'CK-4410', operator: 'Leo Sterling', status: 'Allocated' },
  { name: 'ARRI Master Anamorphics', category: 'Lenses', serial: 'AR-9921', operator: 'Leo Sterling', status: 'Allocated' },
  { name: 'Sound Devices 888 Recorder', category: 'Audio', serial: 'SD-0912', operator: 'Derrick Thorne', status: 'Allocated' },
  { name: 'Lectrosonics Wireless Boom', category: 'Audio', serial: 'LC-0033', operator: 'Ray Chen', status: 'Allocated' },
  { name: 'Arri M40 HMI Daylight', category: 'Lighting', serial: 'AR-1049', operator: 'Gaffer Crew', status: 'Allocated' },
  { name: 'Astera Titan Tube Kit', category: 'Lighting', serial: 'AST-08', operator: 'Gaffer Crew', status: 'Allocated' },
  { name: 'Chapman Hybrid IV Dolly', category: 'Grip', serial: 'CH-0302', operator: 'Frank M.', status: 'Allocated' },
];

export const MASTER_ACTOR_ROSTER = [
  { actor: 'Marcus Vance', character: 'Det. Arthur Vance', agency: 'WME', callTime: '07:30 AM', status: 'On Set' },
  { actor: 'Julian Cross', character: 'Klaus Miller', agency: 'CAA', callTime: '08:00 AM', status: 'In Wardrobe' },
  { actor: 'Elena Rostova', character: 'Bicycle Courier', agency: 'Precision', callTime: '08:15 AM', status: 'Standby' },
  { actor: 'Harlan Mercer', character: 'Boss Chen', agency: 'ICM', callTime: '19:30 PM', status: 'Night Call' },
  { actor: 'Tariq Al-Mansoor', character: 'Enforcer Briggs', agency: 'Paradigm', callTime: '19:45 PM', status: 'Night Call' },
];

export const MASTER_SCRIPT_BREAKDOWN = [
  { sceneNum: '01', slug: 'EXT. FINANCIAL DISTRICT - DAY', pages: '2 3/8', cast: 'Vance, Miller, Courier', status: 'Ready' },
  { sceneNum: '02', slug: 'INT. WAREHOUSE - NIGHT', pages: '3 5/8', cast: 'Vance, Chen, Briggs', status: 'Review' },
  { sceneNum: '03', slug: 'INT. 4TH PRECINCT - DAY', pages: '4 1/8', cast: 'Vance, Lin', status: 'Wrapped' },
  { sceneNum: '04', slug: 'INT. SOUNDSTAGE B ADR - NIGHT', pages: '1 2/8', cast: 'Vance', status: 'ADR Call' },
];
