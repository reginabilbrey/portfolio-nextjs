 
const projects = [ 
    {   
        id: "1",
        title: "My Favorite Type",
        description: "Specific typeface showcased on a poster that includes its history, characteristics and context of the era it was created",
        slug: "my-favorite-type",
        category: "Typography",
        createdAt: "2026-03-13T23:59:00Z",
        image: {
            url:"/images/favorite_type_rockwell.png",
            alt: "Poster of the Rockwell typeface including history and characteristics",
            title: "Rockwell Typeface Poster"
        },

        process: [
            {
                title: "Sketching",
                description: "initial sketch of possible layouts with elements to include",
                image: {
                    url: "",
                    alt: "sketch of poster ideas",
                    title: "Rockwell Sketch",
                },
                type: "sketch"
            },
    
            {
                title: "Inspiration",
                description: "Images found on internet",
                image: {
                    url: "/images/rockwell_moodboard.png",
                    alt: "typeface moodboard",
                    title: "Rockwell Moodboard"
                },
                type: "moodboard"
            },
        ]
    },    

            
 
    {
        id: "2",
        title: "Mascot",
        description: "Mascot vector graphic of an otter",
        slug: "mascot",
        category: "Mascot",
        createdAt: "2025-09-03T22:00:00Z",
        image: {
            url: "/images/otter_mascot.png",
            alt: "otter mascot in navy, gold, maroon color theme",
            title: "Animal Mascot" 
        },

        process: [
            {
                title: "Inspiration",
                description: "Images found on internet",
                image: {
                    url: "",
                    alt: "collection of images of otters, river rocks, wetlands, fish scales and colors",
                    title: "Mascot Moodboard"
                },
                type: "moodboard"
            }
        ]
    },


    {
        id: "3",
        title: "Rapid Design",
        description: "Thumbnail sketch turned into three different logos",
        slug: "rapid-design",
        category: "Logos",
        createdAt: "2026-03-12T10:52:00Z",
        image: {
            url: "/images/rapid_design_v3.png",
            alt: "three logos with yellow, red and purple abstract birds and text",
            title: "Rapid Design Logos"
        },

        process: [
            {
                title: "Thumbnail Sketch",
                description: "Sketch done by pencil in a .75 inch x .75 inch box",
                image: {
                    url: "/images/thumbnail_bird_sketch.png",
                    alt: "simple sketch of abstract bird",
                    title: "Thumbnail Bird Sketch"
                },
                type: "sketch"
                
            },
            {
                title: "Version 1",
                description: "first version of logo created in Adobe Illustrator",
                image: {
                    url: "/images/rapid_design_v1.png",
                    alt: "version one of logo with yellow bird and text",
                    title: "Rapid Design V1"
                },
                type: "artboard v1" 
            },
            {
                title: "Version 2",
                description: "Second version of logo created in Adobe Illustrator",
                image: {
                    url: "/images/rapid_design_v2.png",
                    alt: "version two of logo with red bird and text",
                    title: "Rapid Design V2"
                },
                type: "artboard v2"
            },
            {
                title: "Version 3",
                description: "Third version of logo created in Adobe Illustrator",
                image: {
                    url: "/images/rapid_design_v3.png",
                    alt: "version three of logo with purple bird and text",
                    title: "Rapid Design V3"
                },
                type: "artboard v3"
            }
        ]
    }
]

export default projects


