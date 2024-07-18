const brand_information = [
    {
        img: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/64d8f1f21fab27b222a10911_nodejs-1-logo-p-500.png",
        heading: "Node.js",
        description: "Building & deploy web apps, APIs, and other software solutions with scalability & high performance at the core.",
    },
    {
        img: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/648075665ea350dc691d1497_2%20(Large)-p-500.png",
        heading: "ONDC Partner",
        description: "Complete e-commerce solutions to meet your business goals.",
    },
    {
        img: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6480757a6410b57715391921_1%20(Large)-p-500.png",
        heading: "Google Premier Partner",
        description: "Leverage the power of Google Ads to scale your business.",
    },
    {
        img: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6483768cc3d75ee3ac3fc879_Zoho%20Partner%20Updated.png",
        heading: "Zoho Premium Partner",
        description: "Design and implement integrated business architectures and digital transformation solutions.",
    },
    {
        img: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/64807591e6895ba2a0e984d3_4%20(Large)-p-500.png",
        heading: "MoEngage Partner",
        description: "Leverage the marketing automation platform to boost customer engagement and retention",
    },
    {
        img: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6480759dd647777427305c00_5%20(Large)-p-500.png",
        heading: "Adobe Solution Partner",
        description: "Develop sophisticated and personalised solutions for enterprises with deeper consumer understanding and built-in analytics.",
    },
    {
        img: "https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/648075bda17e7f2920f7c4e2_7%20(Large)-p-500.png",
        heading: "Shopify Partner",
        description: "Build robust and effective online stores with the leading e-commerce platform.",
    },
]

console.log(brand_information.length)
const brandCard = document.getElementById("technology_cards");
for(var i =0; i <= brand_information.length; i++){

    const card = document.createElement("div");
    card.classList.add("card");

    const cardImg = document.createElement("div");
    cardImg.classList.add("card_img");
    cardImg.innerHTML = `<img src="${brand_information[i].img}" class="cardimg" alt="brand_image" />`;
    card.appendChild(cardImg);

    const cardText = document.createElement("div");
    cardText.classList.add("card_text");
    cardText.innerHTML += `<h3 class="cardHtext">${brand_information[i].heading}</h3>`;
    cardText.innerHTML += `<p class="cardptext">${brand_information[i].description}</p>`
    card.appendChild(cardText);

    brandCard.appendChild(card);
}
