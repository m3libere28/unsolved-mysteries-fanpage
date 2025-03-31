export const baseCases = [
  {
    id: 1,
    title: "The Black Dahlia",
    category: "Murder",
    year: 1947,
    location: "Los Angeles, CA",
    status: "Unsolved",
    shortDescription: "The gruesome murder of Elizabeth Short that shocked Hollywood",
    fullDescription: `On January 15, 1947, the body of Elizabeth Short was found mutilated and bisected at the waist in Los Angeles. 
    The case garnered massive media attention and became one of the most infamous unsolved murders in American history.`,
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800",
    videoUrl: "https://www.youtube.com/embed/EHl5BKPzQvw",
    keyFacts: [
      "Victim was nicknamed 'The Black Dahlia' by the press",
      "Body was found by local resident Betty Bersinger",
      "Over 150 suspects were investigated",
      "Case has inspired numerous books and films"
    ],
    theories: [
      "George Hodel theory",
      "Walter Bayley theory",
      "Leslie Dillon theory"
    ]
  },
  {
    id: 2,
    title: "The Somerton Man",
    category: "Mysterious Death",
    year: 1948,
    location: "Adelaide, Australia",
    status: "Partially Solved",
    shortDescription: "Unidentified man found on Somerton Beach with mysterious code",
    fullDescription: "An unidentified man found dead on Somerton Park beach with a mysterious code and possible cold war connections.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    videoUrl: "https://www.youtube.com/embed/QZqV8P6ymzo",
    keyFacts: [
      "Mysterious code found in his pocket",
      "No cause of death determined",
      "Possible spy connections",
      "Identity remained unknown for decades"
    ],
    theories: [
      "Cold War spy theory",
      "Poisoning theory",
      "Local connection theory"
    ]
  },
  {
    id: 3,
    title: "Dyatlov Pass Incident",
    category: "Mysterious Death",
    year: 1959,
    location: "Ural Mountains, Russia",
    status: "Partially Solved",
    shortDescription: "Nine experienced hikers died mysteriously in the Ural Mountains",
    fullDescription: "Nine skilled hikers found dead in mysterious circumstances, with unexplained injuries and radiation traces.",
    image: "https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?w=800",
    videoUrl: "https://www.youtube.com/embed/Y8RigxxiilI",
    keyFacts: [
      "Tent was cut from inside",
      "Bodies found partially clothed",
      "Unexplained internal injuries",
      "Traces of radiation found"
    ],
    theories: [
      "Avalanche theory",
      "Military testing theory",
      "Infrasound theory"
    ]
  },
  {
    id: 4,
    title: "Roswell Incident",
    category: "UFO",
    year: 1947,
    location: "Roswell, New Mexico",
    status: "Unresolved",
    shortDescription: "Mysterious crash that sparked decades of UFO theories",
    fullDescription: `In July 1947, something crashed on a ranch near Roswell, New Mexico. The military initially announced they had recovered a "flying disc" but later claimed it was just a weather balloon. This incident became the most famous alleged UFO crash in history.`,
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800",
    videoUrl: "https://www.youtube.com/embed/LTf5-TNASoI",
    keyFacts: [
      "Military changed official story multiple times",
      "Witnesses reported unusual debris",
      "Project Mogul connection",
      "Sparked worldwide UFO interest"
    ],
    theories: [
      "Extraterrestrial spacecraft",
      "Military experiment",
      "Weather balloon"
    ],
    tags: ["physical", "military", "alien", "ufo"]
  },
  {
    id: 5,
    title: "Phoenix Lights",
    category: "UFO",
    year: 1997,
    location: "Phoenix, Arizona",
    status: "Unresolved",
    shortDescription: "Mass sighting of mysterious lights over Phoenix",
    fullDescription: "Thousands of Arizona residents reported seeing a series of stationary lights and a V-shaped craft in the night sky.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    keyFacts: [
      "Witnessed by thousands",
      "Multiple video recordings",
      "Military flare explanation disputed",
      "Governor Symington later admitted seeing craft"
    ],
    theories: [
      "Military aircraft",
      "Extraterrestrial craft",
      "Military flares"
    ],
    tags: ["mass-sighting", "aviation", "ufo"]
  },
  {
    id: 6,
    title: "Betty and Barney Hill Abduction",
    category: "UFO",
    year: 1961,
    location: "White Mountains, NH",
    status: "Unresolved",
    shortDescription: "First widely-publicized alien abduction case in the US",
    fullDescription: "The Hills reported being abducted by extraterrestrial beings while driving late at night, with missing time and physical evidence.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    keyFacts: [
      "Missing time incident",
      "Physical marks on car",
      "Detailed hypnosis accounts",
      "Star map drawing matched Zeta Reticuli"
    ],
    theories: [
      "Extraterrestrial abduction",
      "Sleep deprivation",
      "False memory syndrome"
    ],
    tags: ["abduction", "beings", "physical", "ufo"]
  },
  {
    id: 7,
    title: "The Cash-Landrum Incident",
    category: "UFO",
    year: 1980,
    location: "Huffman, Texas",
    status: "Unresolved",
    shortDescription: "Three witnesses encountered a diamond-shaped UFO emitting intense heat, resulting in radiation-like symptoms.",
    fullDescription: "On December 29, 1980, Betty Cash, Vickie Landrum, and Colby Landrum encountered a huge diamond-shaped object hovering over the road. The UFO was accompanied by military helicopters. All three witnesses developed severe health problems consistent with radiation exposure.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["physical", "military", "witnesses", "radiation", "ufo"],
    keyFacts: [
      "Diamond-shaped craft emitting intense heat",
      "Multiple military helicopters observed",
      "Witnesses suffered severe health effects",
      "Physical evidence of radiation exposure",
      "Government denied involvement despite helicopter presence"
    ],
    theories: [
      "Military experiment gone wrong",
      "Extraterrestrial craft",
      "Atmospheric phenomenon"
    ]
  },
  {
    id: 8,
    title: "The Tehran UFO Incident",
    category: "UFO",
    year: 1976,
    location: "Tehran, Iran",
    status: "Unresolved",
    shortDescription: "Multiple F-4 Phantom II jets encountered a UFO that disabled their electronics and weapons systems.",
    fullDescription: "On September 19, 1976, the Iranian Air Force dispatched two F-4 Phantom II fighter jets to investigate a bright object over Tehran. Both aircraft experienced complete electronics and communications failure when approaching the UFO. The object demonstrated incredible maneuverability and released a smaller object that targeted one of the jets.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["military", "aviation", "electronics-failure", "ufo"],
    keyFacts: [
      "Multiple military witnesses and radar confirmation",
      "Complete aircraft systems failure",
      "Object demonstrated intelligent behavior",
      "Smaller objects deployed from main craft",
      "Documented in US Defense Intelligence Agency reports"
    ],
    theories: [
      "Advanced foreign technology",
      "Extraterrestrial craft",
      "Natural phenomenon"
    ]
  },
  {
    id: 9,
    title: "The Rendlesham Forest Incident",
    category: "UFO",
    year: 1980,
    location: "Suffolk, England",
    status: "Unresolved",
    shortDescription: "Multiple encounters with UFOs near RAF Woodbridge, including physical evidence and radiation traces.",
    fullDescription: "Over three nights in December 1980, US Air Force personnel stationed at RAF Woodbridge witnessed strange lights in Rendlesham Forest. Deputy base commander Lt. Col. Charles Halt led an investigation, documenting high radiation readings and finding physical evidence including ground indentations and broken branches. A detailed encounter with a triangular craft was recorded on audio tape.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["military", "physical", "radiation", "landing", "ufo"],
    keyFacts: [
      "Multiple military witnesses over several nights",
      "Physical evidence including ground traces",
      "Abnormal radiation readings recorded",
      "Audio recording of the investigation",
      "Official memorandum filed by base commander"
    ],
    theories: [
      "Extraterrestrial investigation",
      "Military experiment",
      "Lighthouse misidentification"
    ]
  },
  {
    id: 10,
    title: "The Lonnie Zamora Incident",
    category: "UFO",
    year: 1964,
    location: "Socorro, New Mexico",
    status: "Unresolved",
    shortDescription: "Police officer encountered landed craft and beings near Socorro.",
    fullDescription: "Police officer Lonnie Zamora witnessed a landed egg-shaped craft and two small beings. Physical evidence was found at the site, including landing marks and burned vegetation. The case was investigated by Project Blue Book and remains one of the most credible UFO encounters.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["physical", "beings", "landing", "ufo"],
    keyFacts: [
      "Credible law enforcement witness",
      "Physical landing traces found",
      "Multiple independent witnesses",
      "Project Blue Book investigation",
      "Burned vegetation at site"
    ],
    theories: [
      "Extraterrestrial landing",
      "Secret test vehicle",
      "Hoax theory"
    ]
  },
  {
    id: 11,
    title: "The Japan Airlines Flight 1628 Incident",
    category: "UFO",
    year: 1986,
    location: "Alaska, USA",
    status: "Unresolved",
    shortDescription: "Cargo flight crew observed massive UFO for over 30 minutes, confirmed by radar.",
    fullDescription: "Captain Kenju Terauchi and his crew witnessed three UFOs during a flight over Alaska. The main object was described as twice the size of an aircraft carrier. The incident was tracked on military and civilian radar, lasting over 30 minutes. FAA officials later provided radar data confirming the presence of unknown objects.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["aviation", "radar", "multiple-witness", "commercial-pilot", "ufo"],
    keyFacts: [
      "Experienced commercial pilot witness",
      "Multiple radar confirmations",
      "Duration over 30 minutes",
      "FAA documentation and investigation",
      "Objects demonstrated intelligent movement"
    ],
    theories: [
      "Extraterrestrial spacecraft",
      "Military experiment",
      "Atmospheric phenomenon"
    ]
  },
  {
    id: 12,
    title: "The Westall UFO Incident",
    category: "UFO",
    year: 1966,
    location: "Melbourne, Australia",
    status: "Unresolved",
    shortDescription: "Over 200 students and teachers witnessed a UFO land and take off near their school.",
    fullDescription: "On April 6, 1966, more than 200 students and teachers at Westall High School witnessed a silver-grey flying saucer descend, land, and take off again, leaving a circle of flattened grass. Military personnel arrived shortly after and warned witnesses not to discuss the incident.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["mass-sighting", "landing", "physical", "school", "ufo"],
    keyFacts: [
      "Over 200 witnesses",
      "Physical ground traces found",
      "Military involvement reported",
      "Multiple photographs taken (later confiscated)",
      "Consistent witness descriptions"
    ],
    theories: [
      "Extraterrestrial landing",
      "Military experiment",
      "Hoax theory"
    ]
  },
  {
    id: 13,
    title: "The Levelland UFO Case",
    category: "UFO",
    year: 1957,
    location: "Levelland, Texas",
    status: "Unresolved",
    shortDescription: "Multiple vehicles experienced electrical failure near a glowing UFO over one night.",
    fullDescription: "On November 2-3, 1957, numerous motorists reported their vehicles stalling when encountering a bright, egg-shaped object on or near the ground. In each case, the object was described as glowing brightly and causing complete electrical failure in nearby vehicles. The incidents occurred over several hours and were investigated by the US Air Force.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["vehicle-interference", "multiple-witness", "electrical", "ufo"],
    keyFacts: [
      "Multiple independent witnesses",
      "Consistent vehicle electrical failures",
      "Official Air Force investigation",
      "Similar events across multiple locations",
      "Police officers among witnesses"
    ],
    theories: [
      "Extraterrestrial spacecraft",
      "Military experiment",
      "Atmospheric phenomenon"
    ]
  },
  {
    id: 14,
    title: "The Coyne Helicopter Incident",
    category: "UFO",
    year: 1973,
    location: "Mansfield, Ohio",
    status: "Unresolved",
    shortDescription: "Army helicopter crew encountered UFO that took control of their aircraft.",
    fullDescription: "Captain Lawrence Coyne and his helicopter crew encountered a cigar-shaped UFO that approached their helicopter and caused it to rise uncontrollably. The crew reported a green light filling the cabin and the helicopter being pulled upward without pilot input. Ground witnesses confirmed the encounter.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["military", "aviation", "physical-effects", "multiple-witness", "ufo"],
    keyFacts: [
      "Experienced military flight crew",
      "Ground witnesses confirmed sighting",
      "Physical effect on aircraft",
      "Multiple crew members",
      "Unexplained altitude gain"
    ],
    theories: [
      "Extraterrestrial spacecraft",
      "Military experiment",
      "Atmospheric phenomenon"
    ]
  },
  {
    id: 15,
    title: "The Minot Air Force Base Incident",
    category: "UFO",
    year: 1968,
    location: "Minot, North Dakota",
    status: "Unresolved",
    shortDescription: "Multiple UFOs observed near nuclear missile silos, causing system interference.",
    fullDescription: "On October 24, 1968, multiple UFOs were observed by military personnel near nuclear missile silos at Minot AFB. Ground radar tracked the objects, and a B-52 bomber crew got a close look at one hovering object. Several missile maintenance teams reported system anomalies during the incident.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["military", "nuclear", "radar", "multiple-witness", "ufo"],
    keyFacts: [
      "Multiple military witnesses",
      "Radar confirmation",
      "Nuclear facility involvement",
      "System interference reported",
      "Official documentation exists"
    ],
    theories: [
      "Extraterrestrial spacecraft",
      "Military experiment",
      "Atmospheric phenomenon"
    ]
  },
  {
    id: 16,
    title: "The Allagash Waterway Abduction",
    category: "UFO",
    year: 1976,
    location: "Maine, USA",
    status: "Unresolved",
    shortDescription: "Four men experienced missing time and recalled alien abduction under hypnosis.",
    fullDescription: "Four art students camping in the Allagash Waterway reported seeing a bright object and experiencing missing time. Under hypnosis, all four recalled being taken aboard a craft and subjected to medical examinations. The witnesses passed lie detector tests and their stories remained consistent over the years.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["abduction", "missing-time", "multiple-witness", "hypnosis", "ufo"],
    keyFacts: [
      "Four consistent witness accounts",
      "Passed polygraph tests",
      "Missing time experienced",
      "Identical memories under hypnosis",
      "Physical marks found on witnesses"
    ],
    theories: [
      "Extraterrestrial abduction",
      "Sleep deprivation",
      "False memory syndrome"
    ]
  },
  {
    id: 17,
    title: "The Colares UFO Flap",
    category: "UFO",
    year: 1977,
    location: "Colares, Brazil",
    status: "Unresolved",
    shortDescription: "Months-long wave of UFO attacks leaving physical injuries on witnesses.",
    fullDescription: "From August to December 1977, inhabitants of Colares reported UFOs firing beams of light that left burns and puncture marks. The Brazilian Air Force investigated (Operation Saucer), gathering photos, films, and medical reports. Many victims required medical treatment for radiation-like burns.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["mass-sighting", "physical", "military", "radiation", "ufo"],
    keyFacts: [
      "Hundreds of witnesses",
      "Physical injuries documented",
      "Official military investigation",
      "Photographic evidence",
      "Medical records of injuries"
    ],
    theories: [
      "Extraterrestrial attack",
      "Military experiment",
      "Atmospheric phenomenon"
    ]
  },
  {
    id: 18,
    title: "The Pascagoula Abduction",
    category: "UFO",
    year: 1973,
    location: "Pascagoula, Mississippi",
    status: "Unresolved",
    shortDescription: "Two shipyard workers encountered robot-like beings and were taken aboard a UFO.",
    fullDescription: "Charles Hickson and Calvin Parker were fishing when they encountered strange beings who floated them into a craft. The beings were described as robot-like with claw-like hands. Both men passed lie detector tests, and their fear was evident in a secretly recorded conversation at the police station.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["abduction", "beings", "multiple-witness", "physical", "ufo"],
    keyFacts: [
      "Both witnesses passed polygraph tests",
      "Secret police recording captured genuine fear",
      "Consistent accounts over decades",
      "Physical effects reported",
      "Multiple independent investigations"
    ],
    theories: [
      "Extraterrestrial abduction",
      "Sleep deprivation",
      "False memory syndrome"
    ]
  },
  {
    id: 19,
    title: "The Ariel School Encounter",
    category: "UFO",
    year: 1994,
    location: "Ruwa, Zimbabwe",
    status: "Unresolved",
    shortDescription: "Over 60 schoolchildren witnessed a UFO landing and alien beings during recess.",
    fullDescription: "During morning break at Ariel School, over 60 children reported seeing multiple UFOs and alien beings in their schoolyard. The beings were described as wearing black suits with large eyes. The children drew similar pictures and gave consistent accounts to investigators, including Harvard psychiatrist John Mack.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["mass-sighting", "beings", "landing", "children", "ufo"],
    keyFacts: [
      "Over 60 consistent witness accounts",
      "Professional investigation by John Mack",
      "Consistent drawings by witnesses",
      "Multiple follow-up studies",
      "Witnesses maintain accounts as adults"
    ],
    theories: [
      "Extraterrestrial visitation",
      "Mass hysteria",
      "Hoax theory"
    ]
  },
  {
    id: 20,
    title: "The Kelly-Hopkinsville Encounter",
    category: "UFO",
    year: 1955,
    location: "Kelly, Kentucky",
    status: "Unresolved",
    shortDescription: "Farm family engaged in hours-long encounter with small alien beings.",
    fullDescription: "The Sutton family reported a UFO landing and a prolonged encounter with small metallic beings with large ears and glowing eyes. Multiple family members fought off the creatures for hours. Police investigation found evidence of gunfire and strange lights. The family's terror was considered genuine.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["beings", "multiple-witness", "physical", "prolonged", "ufo"],
    keyFacts: [
      "Multiple family members as witnesses",
      "Physical evidence of gunfire",
      "Police investigation",
      "Consistent accounts under questioning",
      "Witnesses fled their home in terror"
    ],
    theories: [
      "Extraterrestrial visitation",
      "Mass hysteria",
      "Hoax theory"
    ]
  },
  {
    id: 21,
    title: "The Hudson Valley Wave",
    category: "UFO",
    year: "1982-1986",
    location: "Hudson Valley, New York",
    status: "Unresolved",
    shortDescription: "Thousands witnessed large, silent, V-shaped UFOs over multiple years.",
    fullDescription: "Over a period of four years, thousands of residents in the Hudson Valley area reported seeing large, silent, V-shaped formations of lights. Multiple police officers witnessed the objects, and a special task force was formed to investigate. The objects were often described as the size of a football field.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=800",
    videoUrl: "https://www.youtube.com/embed/HGS09LzpARs",
    tags: ["mass-sighting", "multiple-years", "police", "formation", "ufo"],
    keyFacts: [
      "Thousands of witnesses over years",
      "Multiple police officer sightings",
      "Consistent description of V-shape",
      "Task force investigation",
      "Photos and videos collected"
    ],
    theories: [
      "Extraterrestrial spacecraft",
      "Military experiment",
      "Atmospheric phenomenon"
    ]
  }
];
