import { aliasQuery, hasOperationName } from "../utils/graphql-test-utils";

describe('NewsStories component flow', () => {

    it('Should get all the news selected by topic', () => {
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
        // cy.get('.story__section').should('have.length', 2);
        cy.get('.story').children('.story__section').each('btn').should('exist')

    } )


})