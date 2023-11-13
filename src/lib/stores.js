import { writable } from 'svelte/store'

export const SongStore= writable([
    {
        id: 1,
        title: "I am here",
        href: "i-am-here",
        keywords: ['song','collocation','vocabulary','time expressions','Bahasa Indonesia'],
        description: "Demonstrating prepositions in time expressions."
    },
    {
        id: 2,
        title: "Lack of 'lack'",
        href: "lack-of-lack",
        keywords: ['song','collocation','vocabulary','grammar'],
        description: "Encouraging the use of 'lack' as a verb and 'lack of' as a noun."
    },
    {
        id: 3,
        title: "The this, the that",
        href: "the-this-the-that",
        keywords: ['song','collocation','vocabulary','grammar','articles','Bahasa Indonesia'],
        description: "Encouraging the memorisation of nouns that are always preceded by 'the'."
    },
    {
        id: 4,
        title: "Some People",
        href: "some-people",
        keywords: ['song','collocation','vocabulary'],
        description: "Clearing up confusion about 'Some/Some of' and 'Most/Most of'!"
    },
    {
        id: 5,
        title: "No Money No Honey",
        href: "no-money-no-honey",
        keywords: ['song','collocation','vocabulary'],
        description: "Money collocations - These don't translate well from Bahasa Indonesia to English"
    },
    {
        id: 6,
        title: "Lemon Squeezy",
        href: "lemon-squeezy",
        keywords: ['song','collocation','vocabulary'],
        description: "Collocation when using the words 'easy' and 'difficult'."
    },
    {
        id: 7,
        title: "The Impact Song",
        href: "impact-song",
        keywords: ['song','collocation','vocabulary'],
        description: "Collocation when using the word 'impact'."
    },
    {
        id: 8,
        title: "Scissor!",
        href: "scissor",
        keywords: ['song','pronunciation','linking'],
        description: "An exercise in 'juncture' - One of 4 strategies used by native speakers to join words together when speaking."
    }
])
