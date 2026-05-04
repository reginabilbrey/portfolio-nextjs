const project1 = 
    {   
        id: "1",
        title: "My Favorite Type",
        description: "Specific typeface showcased on a poster that includes its history, characteristics and context of the era it was created",
        slug: "/projects/my-favorite-type",
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
                description: "images found on internet",
                image: {
                    url: "/images/rockwell_moodboard.png",
                    alt: "typeface moodboard",
                    title: "Rockwell Moodboard"
                },
                type: "moodboard"
            },

            {
                title: "Rockwell Poster V1",
                description: "version one",
                image: {
                    url: "",
                    alt: "version one of Rockwell Poster",
                    title: "Rockwell V1"
                },
                type: "artboard v1"
            },

            {
                title: "Rockwell Poster V2",
                description: "version two",
                image: {
                    url: "",
                    alt: "version two of Rockwell Poster",
                    title: "Rockwell V2"
                },
                type: "artboard v2"

            }
        ]
    };


const project2 =    
    {
        id: "2",
        title: "Mascot",
        description: "Mascot vector graphic of an otter",
        slug: "/projects/mascot",
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
                description: "images found on internet",
                image: {
                    url: "",
                    alt: "collection of images of otters, river rocks, wetlands, fish scales and colors",
                    title: "Mascot Moodboard"
                },
                type: "moodboard"
            }
        ]
    };


const project3 = 
    {
        id: "3",
        title: "Rapid Design",
        description: "Thumbnail sketch turned into three different logos",
        slug: "/projects/rapid-design",
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
                description: "third version of logo created in Adobe Illustrator",
                image: {
                    url: "/images/rapid_design_v3.png",
                    alt: "version three of logo with purple bird and text",
                    title: "Rapid Design V3"
                },
                type: "artboard v3"
            }
        ]
    };


const portfolio = [
    project1, 
    project2, 
    project3
];


const projectContainer = document.getElementById("portfolio");
//grabs the container



//The Loop of the portfolio array
portfolio.forEach(project => {
    
    // Creates the project wrapper
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    //Project content of Title, Image, Summary, Description, Steps list
    // Title
    const title = document.createElement("h2");
    title.textContent = project.title;
    projectDiv.appendChild(title);

    // Image (at least one)
    //this prevents a broken image icon to display if there is no image url, but also allows for steps without images to be included in the process
    if (project.image.url) {
        const img = document.createElement("img");
        img.src = project.image.url;
        img.alt = project.image.alt;
        projectDiv.appendChild(img);
    }

    // Summary
    const summary = document.createElement("p");
    summary.textContent = project.category; // Using category as summary
    projectDiv.appendChild(summary);

    // Description
    const description = document.createElement("p");
    description.textContent = project.description;
    projectDiv.appendChild(description);

    //Loop for the process array
    const processContainer = document.createElement("div");
    processContainer.classList.add("process-container");

    project.process.forEach(step => {
        const stepDiv = document.createElement("div");
        stepDiv.classList.add("step");

        const stepTitle = document.createElement("h4");
        stepTitle.textContent = step.title;

        const stepDesc = document.createElement("p");
        stepDesc.textContent = step.description;

        stepDiv.appendChild(stepTitle);
        stepDiv.appendChild(stepDesc);

        //this prevents an broken image icon to display if there is no image url, but also allows for steps without images to be included in the process
        if (step.image.url) {
            const stepImg = document.createElement("img");
            stepImg.src = step.image.url;
            stepImg.alt = step.image.alt;

            stepDiv.appendChild(stepImg);
        }

        processContainer.appendChild(stepDiv);
    });

    projectDiv.appendChild(processContainer);
    
    // Steps list
    const stepsList = document.createElement("ul");
    project.process.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step.title; // Just the step title
        stepsList.appendChild(li);
    });
    projectDiv.appendChild(stepsList);

    // Append the project div to the container
    projectContainer.appendChild(projectDiv);
});
