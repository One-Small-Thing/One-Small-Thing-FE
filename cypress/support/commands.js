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
                            date: '08/31/2022',
                            title: 'Death of Soviet Union\'s last leader, Mikhail Gorbachev, unearths Pizza Hut ad - The Washington Post',
                            img: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CJZ2A2VIPFFGFINXOGRHNU4XFY.jpg&w=1440",
                            url:"https://www.washingtonpost.com/nation/2022/08/31/mikhail-gorbachev-pizza-hut-soviet-russia-meme/"
                        },
                        {
                            date: '08/31/2022',
                            title: 'Death of Soviet Union\'s last leader, Mikhail Gorbachev, unearths Pizza Hut ad - The Washington Post',
                            img: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CJZ2A2VIPFFGFINXOGRHNU4XFY.jpg&w=1440",
                            url:"https://www.washingtonpost.com/nation/2022/08/31/mikhail-gorbachev-pizza-hut-soviet-russia-meme/"
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
                            date: '08/31/2022',
                            title: 'Death of Soviet Union\'s last leader, Mikhail Gorbachev, unearths Pizza Hut ad - The Washington Post',
                            img: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CJZ2A2VIPFFGFINXOGRHNU4XFY.jpg&w=1440",
                            url:"https://www.washingtonpost.com/nation/2022/08/31/mikhail-gorbachev-pizza-hut-soviet-russia-meme/"
                        },
                        {
                            date: '08/31/2022',
                            title: 'Death of Soviet Union\'s last leader, Mikhail Gorbachev, unearths Pizza Hut ad - The Washington Post',
                            img: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CJZ2A2VIPFFGFINXOGRHNU4XFY.jpg&w=1440",
                            url:"https://www.washingtonpost.com/nation/2022/08/31/mikhail-gorbachev-pizza-hut-soviet-russia-meme/"
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