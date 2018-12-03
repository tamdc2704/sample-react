const fakeData = [
    {
        id: "Apollo11Highlights",
        date: "2017-03-07T00:00:00Z",
        title: "Apollo 11 Highlights",
        mediaType: "audio",
        description: "Apollo 11 Highlights",
        favorite: true,
        links: null,
        href: "https://images-assets.nasa.gov/audio/Apollo11Highlights/collection.json"
    },
    {
        id: "NHQ_07_16_1969_Apollo 11 Launch HD _No Audio ",
        date: "2017-03-08T00:00:00Z",
        title: "Apollo 11 Launch HD  SILENT",
        mediaType: "video",
        description: "On July 16, 1969, the huge, 363-feet tall Saturn V rocket launches on the Apollo 11 mission from Pad A, Launch Complex 39, Kennedy Space Center, at 9:32 a.m. EDT. Onboard the Apollo 11 spacecraft are astronauts Neil A. Armstrong, commander; Michael Collins, command module pilot; and Edwin E. Aldrin Jr., lunar module pilot. Apollo 11 was the United States' first lunar landing mission. While astronauts Armstrong and Aldrin descended in the Lunar Module \"Eagle\" to explore the Sea of Tranquility region of the moon, astronaut Collins remained with the Command and Service Modules \"Columbia\" in lunar orbit.",
        favorite: false,
        links: [
            {
                rel: "captions",
                href: "https://images-assets.nasa.gov/video/NHQ_07_16_1969_Apollo 11 Launch HD _No Audio /NHQ_07_16_1969_Apollo 11 Launch HD _No Audio .srt"
            }
        ],
        href: "https://images-assets.nasa.gov/video/NHQ_07_16_1969_Apollo 11 Launch HD _No Audio /collection.json",
    },
    {
        id: "jsc2007e034221",
        date: "1969-07-11T00:00:00Z",
        title: "Apollo 11 spacecraft pre-launch",
        mediaType: "image",
        description: "Personnel atop the 402-ft. Mobile Service Structure look back at the Apollo 11 spacecraft as the tower is moved away during a Countdown Demonstration Test. Photo filed 11 July 1969. ",
        favorite: false,
        links: [
            {
                rel: "preview",
                render: "image",
                href: "https://images-assets.nasa.gov/image/jsc2007e034221/jsc2007e034221~thumb.jpg"
            }
        ],
        href: "https://images-assets.nasa.gov/image/jsc2007e034221/collection.json"
    }

]

let data = localStorage.getItem('posts')
if(!data) localStorage.setItem('posts', JSON.stringify(fakeData))

data = JSON.parse(localStorage.getItem('posts'))

const posts = (state = data, {type, payload}) => {
    switch(type) {
        case 'ADD_POST':
            return [
                ...state,
                payload.post
            ]
        case 'UPDATE_POST':
            return state.map(post => post.id === payload.post ? payload.post : post)
        case 'DELETE_POST':
            return state.filter(post => post.id !== payload.id)
        case 'TOGGLE_FAVORITE':
            return state.map(post => post.id === payload.id ? { ...post, favorite: !post.favorite } : post)
        default:
            return state
    }
}

export default posts