import { aliasQuery, hasOperationName } from "../utils/graphql-test-utils";

describe('NewsStories component flow', () => {  
    it('Should display all the news selected by topic', () => {
        cy.selectTopic();
        cy.intercept('POST', 'https://3bb63f73-e6d2-4120-8a53-4f012668a561.mock.pstmn.io/graphql?test=1', (req) => {
            const { body } = req
            aliasQuery(req, 'News')
            if(hasOperationName(req, 'News')){
                req.alias = 'gqlNewsQuery'
                req.reply((res) => {
                    res.body.data.headlines = [
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
        });
        cy.get('.story__section').should('exist');
        cy.get('.story').children('.story__section').each(() => {
            cy.get('.btn-ta')
              .should('exist');
            cy.get('.story-container__topic')
              .should('exist');
            cy.get('.title')
              .should('exist');
            cy.get('.author-name')
              .should('exist');
            cy.get('.date')
              .should('exist');
        });
    })

    it('Should be able to go back to the homepage', () => {
        cy.get('.navbar__main--display').click();
        cy.url().should('eq', 'http://localhost:3000/');
    })

    it('Should be able to see the footer', () => {
        cy.get('.footer').should('contain', 'Helpline');
    })

    it('Should be able to click the Take Action button and see the CongressAction option', () => {
        cy.selectTopic();
        cy.intercept('POST', 'https://3bb63f73-e6d2-4120-8a53-4f012668a561.mock.pstmn.io/graphql?test=1', (req) => {
            const { body } = req
            aliasQuery(req, 'News')
            if(hasOperationName(req, 'News')){
                req.alias = 'gqlNewsQuery'
                req.reply((res) => {
                    res.body.data.headlines = [
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
        });
        cy.get('.btn-ta').eq(0).click();
        cy.get('.modal-window').should('exist');
        cy.contains('.congress-action', 'Write to your local Congress member');
        cy.contains('p', 'Take action by writing a letter or making a call to your local congress person about this issue!');
    })

    it('Should be able to click the CongressAction option inside the modal', () => {
        cy.selectTopic();
        cy.intercept('POST', 'https://3bb63f73-e6d2-4120-8a53-4f012668a561.mock.pstmn.io/graphql?test=1', (req) => {
            const { body } = req
            aliasQuery(req, 'News')
            if(hasOperationName(req, 'News')){
                req.alias = 'gqlNewsQuery'
                req.reply((res) => {
                    res.body.data.headlines = [
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
        });
        cy.get('.btn-ta').eq(0).click();
        cy.get('.congress-action').eq(0).click();
        cy.url().should('eq', 'http://localhost:3000/CongressAction');
    })
})