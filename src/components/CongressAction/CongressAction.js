import React from "react";
// import { useQuery, gql } from '@apollo/client';
import "./CongressAction.css";

const CongressAction = () => {

    const data = {"congress":[
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
    ]}
    
    // const GET_CONGRESS_INFO = gql`
    // query {
    //   congress(state: "CO"){
    //     fullName
    //     url
    //     party
    //     twitter
    //     contact
    //     nextElection
    //     phone
    //   }
    // }
    // `
    // const { loading, error, data } = useQuery(GET_CONGRESS_INFO)
  
    // if(loading) return "Loading..."
    // if(error) return `Error! ${error.message}`

    // if(!loading){
      const representatives = data.congress.map(person => {
        const party = person.party==='D' ? "Democrat" : "Republican";
        return (
            <div className="congress" key={person.fullName}>
                <section className="congress__section">
                    <div className="congress__section--tag-box">
                        <p className="tag">{person.__typename}</p>
                        <p className="tag">{party}</p>
                    </div>
                    <div className="congress__section--info-box">
                        <h2 className="name">{person.fullName}</h2>
                        <p className="details">Phone: {person.phone}</p>
                        <p className="details">Twitter username: {person.twitter}</p>
                        <p className="details"><a href={person.url}>Website</a></p>
                        <p className="details"><a href={person.contact}>Contact the representative</a></p>
                    </div>
                </section>
            </div>
        )
      })
        
        return (
          <div className="congress-container">
            {representatives}
          </div>
        )
    }      

// }

export default CongressAction;