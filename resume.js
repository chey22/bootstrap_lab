let name = "Cheyenne Mangum"

console.log("Name: " + name.toUpperCase())

var career = "Web Developer"

console.log("Career: " + career)

var aboutMe = "blah"

console.log("About Me: " + aboutMe)

console.log("")

var interests = ["Traveling", "Kayaking", "Coding", "Real estate", "Interior design"]

console.log("My Interests:")
console.log("* " + interests[0])
console.log("* " + interests[1])
console.log("* " + interests[2])
console.log("* " + interests[3])
console.log("* " + interests[4])

console.log("")

var position = [
    {
        company: "Keller Williams Realty",
        title: "Realtor, Associate Broker",
        description: "KW more blah"
    },

    {
        company: "RE/MAX BJC Real Estate",
        title: "Realtor",
        description: "RM more blah"
    },

    {
        company: "Valor Communities",
        title: "Community Sales Manager/Realtor",
        description: "VC more blah"
    },

    {
        company: "Davidson Homes",
        title: "New Home Sales Counselor/Realtor",
        description: "DH more blah"
    }
]

console.log("My Previous Experience:")

function displayPosition(company, title, description) {

    console.log("* " + title + " at " + company + " - " + description);
}

for (let i = 0; i < position.length; i++) {
    displayPosition(position[i].company, position[i].title, position[i].description)
}

console.log("")

console.log("My Skills:")

function displaySkills(skillName, isCool) {
    if (isCool === true) {
        console.log(`* BAM: ${skillName}`)
    } else {
        console.log(`* ${skillName}`)
    }
}

displaySkills("Cooking", true)
displaySkills("Swift", false)
displaySkills("Marketing", false)
displaySkills("CRM software", false)
displaySkills("Amazon Alexa Skills Development", false)
displaySkills("Home staging", true)
displaySkills("HTML", false)
displaySkills("CSS", false)
displaySkills("Spanish", true)