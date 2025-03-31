// First few episodes with detailed information
const episodeDetails = {
  "Karl Gowen/Stuart Tahl": {
    description: "The mysterious disappearance of Karl Gowen from his home in 1986 and the unsolved murder of Stuart Tahl in a parking lot.",
    image: "/images/episodes/karl-gowen.jpg"
  },
  "The Jeanine Nicarico Murder": {
    description: "The tragic case of 10-year-old Jeanine Nicarico, who was abducted from her home in 1983, and the controversial investigation that followed.",
    image: "/images/episodes/nicarico.jpg"
  },
  "Mystery on the Rooftop": {
    description: "The bizarre death of Rey Rivera at the Belvedere Hotel in Baltimore, whose body was found in an unlikely location days after his disappearance.",
    image: "/images/episodes/rey-rivera.jpg"
  },
  "13 Minutes": {
    description: "The perplexing disappearance of Patrice Endres from her salon in just 13 minutes, leaving behind evidence of an unfinished lunch and open cash register.",
    image: "/images/episodes/patrice-endres.jpg"
  }
};

// Helper function to add details to episodes
const addEpisodeDetails = (episode) => ({
  ...episode,
  details: episodeDetails[episode.title] || {
    description: "A compelling investigation into one of America's most intriguing unsolved mysteries.",
    image: `/images/episodes/default-${episode.airDate.split(' ')[2]}.jpg`
  }
});

export const episodes = [
  {
    number: 1,
    year: 1987,
    network: "NBC",
    episodes: [
      { title: "Karl Gowen/Stuart Tahl", airDate: "January 20, 1987" },
      { title: "The Jeanine Nicarico Murder/The John Dillinger Gang", airDate: "February 3, 1987" },
      { title: "Al Kite/Gerald Cavanaugh", airDate: "February 10, 1987" },
      { title: "The Son of Sam/Wanted: David Burke", airDate: "April 12, 1987" },
      { title: "The Murder of Catherine Walsh/Missing: Jay Cook and Tanya Van Cuylenborg", airDate: "May 1, 1987" }
    ].map(addEpisodeDetails)
  },
  {
    number: 2,
    year: 1988,
    network: "NBC",
    episodes: [
      { title: "The Keddie Murders/The Disappearance of Cynthia Anderson", airDate: "September 14, 1988" },
      { title: "The Murder of Dexter Stefonek/Missing: Patricia Meehan", airDate: "September 21, 1988" },
      { title: "The Original Night Stalker/The Murder of Russell Evans", airDate: "September 28, 1988" },
      { title: "The Disappearance of Amy Billig/The Murder of Russell Evans", airDate: "October 5, 1988" },
      { title: "The Murder of Lisa Au/The Colonial Parkway Murders", airDate: "October 12, 1988" }
    ].map(addEpisodeDetails)
  },
  {
    number: 3,
    year: 1989,
    network: "NBC",
    episodes: [
      { title: "The Murder of Kaitlyn Arquette/Missing: Keith Warren", airDate: "September 20, 1989" },
      { title: "The Oakland County Child Killer/The Murder of Blair Adams", airDate: "September 27, 1989" },
      { title: "The Las Cruces Bowling Alley Massacre/The Murder of Dorothy Jane Scott", airDate: "October 4, 1989" },
      { title: "The Murder of Kurt McFall/Missing: Amy Wroe Bechtel", airDate: "October 11, 1989" },
      { title: "The Death Valley Germans/The Murder of Don Henry and Kevin Ives", airDate: "October 18, 1989" }
    ].map(addEpisodeDetails)
  },
  // Seasons 4-9 (NBC Era)
  {
    number: 4,
    year: 1990,
    network: "NBC",
    episodes: Array.from({ length: 24 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `1990`
    })).map(addEpisodeDetails)
  },
  {
    number: 5,
    year: 1991,
    network: "NBC",
    episodes: Array.from({ length: 22 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `1991`
    })).map(addEpisodeDetails)
  },
  {
    number: 6,
    year: 1992,
    network: "NBC",
    episodes: Array.from({ length: 26 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `1992`
    })).map(addEpisodeDetails)
  },
  {
    number: 7,
    year: 1993,
    network: "NBC",
    episodes: Array.from({ length: 25 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `1993`
    })).map(addEpisodeDetails)
  },
  {
    number: 8,
    year: 1994,
    network: "NBC",
    episodes: Array.from({ length: 27 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `1994`
    })).map(addEpisodeDetails)
  },
  {
    number: 9,
    year: 1995,
    network: "NBC",
    episodes: Array.from({ length: 23 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `1995`
    })).map(addEpisodeDetails)
  },
  // Seasons 10-11 (CBS Era)
  {
    number: 10,
    year: 1997,
    network: "CBS",
    episodes: Array.from({ length: 12 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `1997`
    })).map(addEpisodeDetails)
  },
  {
    number: 11,
    year: 1998,
    network: "CBS",
    episodes: Array.from({ length: 14 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `1998`
    })).map(addEpisodeDetails)
  },
  // Seasons 12-14 (Lifetime Era)
  {
    number: 12,
    year: 2001,
    network: "Lifetime",
    episodes: Array.from({ length: 16 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `2001`
    })).map(addEpisodeDetails)
  },
  {
    number: 13,
    year: 2002,
    network: "Lifetime",
    episodes: Array.from({ length: 18 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `2002`
    })).map(addEpisodeDetails)
  },
  {
    number: 14,
    year: 2002,
    network: "Lifetime",
    episodes: Array.from({ length: 15 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      airDate: `2002`
    })).map(addEpisodeDetails)
  },
  // Netflix Reboot
  {
    number: 15,
    year: 2020,
    network: "Netflix",
    episodes: [
      { title: "Mystery on the Rooftop", airDate: "July 1, 2020" },
      { title: "13 Minutes", airDate: "July 1, 2020" },
      { title: "House of Terror", airDate: "July 1, 2020" },
      { title: "No Ride Home", airDate: "July 1, 2020" },
      { title: "Berkshires UFO", airDate: "July 1, 2020" },
      { title: "Missing Witness", airDate: "July 1, 2020" }
    ].map(addEpisodeDetails)
  },
  {
    number: 16,
    year: 2020,
    network: "Netflix",
    episodes: [
      { title: "Washington Insider Murder", airDate: "October 19, 2020" },
      { title: "Death in Oslo", airDate: "October 19, 2020" },
      { title: "Death Row Fugitive", airDate: "October 19, 2020" },
      { title: "Tsunami Spirits", airDate: "October 19, 2020" },
      { title: "Lady in the Lake", airDate: "October 19, 2020" },
      { title: "Stolen Kids", airDate: "October 19, 2020" }
    ].map(addEpisodeDetails)
  },
  {
    number: 17,
    year: 2022,
    network: "Netflix",
    episodes: [
      { title: "Mystery at Mile Marker 45", airDate: "July 1, 2022" },
      { title: "Something in the Sky", airDate: "July 1, 2022" },
      { title: "Body in Bags", airDate: "July 1, 2022" },
      { title: "Death in a Vegas Motel", airDate: "July 1, 2022" },
      { title: "Paranormal Rangers", airDate: "July 1, 2022" },
      { title: "What Happened to Josh?", airDate: "July 1, 2022" },
      { title: "Body in the Bay", airDate: "July 1, 2022" },
      { title: "The Ghost in Apartment 14", airDate: "July 1, 2022" },
      { title: "Abducted by a Parent", airDate: "July 1, 2022" }
    ].map(addEpisodeDetails)
  }
].map(season => ({
  ...season,
  episodes: season.episodes.map(addEpisodeDetails)
}));

export const statistics = {
  totalEpisodes: episodes.reduce((total, season) => total + season.episodes.length, 0),
  totalSeasons: episodes.length,
  networks: ["NBC", "CBS", "Lifetime", "Netflix"],
  yearsActive: ["1987-1995", "1997-1998", "2001-2002", "2020-Present"],
  originalHost: "Robert Stack",
  currentHost: "Various"
};
