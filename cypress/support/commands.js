import { aliasQuery, hasOperationName } from "../utils/graphql-test-utils";

Cypress.Commands.add("selectTopic", () => {
    cy.visit('http://localhost:3000/')
        cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').contains('LGBTQ+')
        cy.intercept('POST', 'https://one-small-thing.herokuapp.com/graphql', (req) => {
            const { body } = req
            aliasQuery(req, 'News')
            if(hasOperationName(req, 'News')){
                req.alias = 'gqlNewsQuery'
                req.reply((res) => {
                    res.body.data.stories = [
                        {
                            author: "Holly Otterbein",
                            content: "The first candidate the group is taking on is Doug Mastriano, the Pennsylvania gubernatorial nominee who has said that LGBTQ couples should not be allowed to adopt children, gay marriage should not b… [+1903 chars]",
                            date: "09/01/2022",
                            description: "Agenda PAC says their aim is to defeat candidates who oppose same-sex marriage and other rights for LGBTQ Americans.",
                            img: "https://static.politico.com/62/45/637074744bdf911429331de29a2f/https-delivery.gettyimages.com/downloads/1405088974",
                            title: "New PAC forms to target anti-LGBTQ candidates",
                            url: "https://www.politico.com/news/2022/09/01/,new-pac-anti-lgbtq-candidates-00054441",
                            __typename: "TopStories"
                        },
                        {
                            author: "Trudy Ring",
                            content: "The father of a transgender son is objecting strongly to a set of school policies on LGBTQ+ identity issued recently by the Catholic Diocese of Sioux Falls, S.D.\r\nStudents may not advocate, celebrate… [+3676 chars]",
                            date: "08/17/2022",
                            description: "A Catholic diocese overseeing Catholic schools in South Dakota has issued a set of policies saying LGBTQ+ identity undermines the basis of society.",
                            img: "https://www.advocate.com/sites/default/files/shutterstock_174338483.jpg",
                            title: "Trans Football Player's Dad Slams School System's Anti-LGBTQ Policies",
                            url: "https://www.advocate.com/religion/2022/8/17/,trans-football-players-dad-slams-school-systems-anti-lgbtq-policies",
                            __typename: "TopStories"
                        }
                    ]
                    
                })
            }
        })
        .as('getNews');
        cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').click();
        cy.wait('@getNews');
});

Cypress.Commands.add("selectCongressTakeAction", () => {
    cy.visit('http://localhost:3000/')
        cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').contains('LGBTQ+')
        cy.intercept('POST', 'https://one-small-thing.herokuapp.com/graphql', (req) => {
            const { body } = req
            aliasQuery(req, 'News')
            if(hasOperationName(req, 'News')){
                req.alias = 'gqlNewsQuery'
                req.reply((res) => {
                    res.body.data.stories = [
                        {
                            author: "Holly Otterbein",
                            content: "The first candidate the group is taking on is Doug Mastriano, the Pennsylvania gubernatorial nominee who has said that LGBTQ couples should not be allowed to adopt children, gay marriage should not b… [+1903 chars]",
                            date: "09/01/2022",
                            description: "Agenda PAC says their aim is to defeat candidates who oppose same-sex marriage and other rights for LGBTQ Americans.",
                            img: "https://static.politico.com/62/45/637074744bdf911429331de29a2f/https-delivery.gettyimages.com/downloads/1405088974",
                            title: "New PAC forms to target anti-LGBTQ candidates",
                            url: "https://www.politico.com/news/2022/09/01/,new-pac-anti-lgbtq-candidates-00054441",
                            __typename: "TopStories"
                        },
                        {
                            author: "Trudy Ring",
                            content: "The father of a transgender son is objecting strongly to a set of school policies on LGBTQ+ identity issued recently by the Catholic Diocese of Sioux Falls, S.D.\r\nStudents may not advocate, celebrate… [+3676 chars]",
                            date: "08/17/2022",
                            description: "A Catholic diocese overseeing Catholic schools in South Dakota has issued a set of policies saying LGBTQ+ identity undermines the basis of society.",
                            img: "https://www.advocate.com/sites/default/files/shutterstock_174338483.jpg",
                            title: "Trans Football Player's Dad Slams School System's Anti-LGBTQ Policies",
                            url: "https://www.advocate.com/religion/2022/8/17/,trans-football-players-dad-slams-school-systems-anti-lgbtq-policies",
                            __typename: "TopStories"
                        }
                    ]
                    
                })
            }
        })
        .as('getNews');
        cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').click();
        cy.wait('@getNews');
        cy.get('.btn-ta').eq(0).click();
        cy.intercept('POST', 'https://one-small-thing.herokuapp.com/graphql', (req) => {
            const { body } = req
            aliasQuery(req, 'Representatives')
            if(hasOperationName(req, 'Representatives')){
                req.alias = 'gqlRepresentativesQuery'
                req.reply((res) => {
                    res.body.data.congress = [
                        {
                            contact: "https://www.bennet.senate.gov/public/index.cfm/contact",
                            fullName: "Michael Bennet",
                            nextElection: "2022",
                            party: "D",
                            phone: "202-224-5852",
                            twitter: "SenBennetCo",
                            url: "https://www.bennet.senate.gov/public",
                            __typename: "Congress"
                        },
                        {
                            contact: "https://www.hickenlooper.senate.gov",
                            fullName: "John Hickenlooper",
                            nextElection: "2026",
                            party: "D",
                            phone: "202-224-5941",
                            twitter: "SenatorHick",
                            url: "https://www.hickenlooper.senate.gov",
                            __typename: "Congress"
                        }
                    ]
                    
                })
            }
        })
        .as('getRepresentatives');
        cy.get('.congress-action').eq(0).click();
        cy.wait('@getRepresentatives');
});