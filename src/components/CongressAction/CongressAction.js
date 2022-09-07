import React from "react";
import { useQuery, gql } from '@apollo/client';
import "./CongressAction.css";
import Loading from '../Loading/Loading';

const CongressAction = () => {
    
    const GET_CONGRESS_INFO = gql`
    query Representatives{
      congress(state: "CO"){
        fullName
        url
        party
        twitter
        contact
        nextElection
        phone
      }
    }
    `
    const { loading, error, data } = useQuery(GET_CONGRESS_INFO)
  
    if(loading) return <Loading />
    if(error) return `Error! ${error.message}`

    if(!loading){
      const representatives = data.congress.map(person => {
        const party = person.party==='D' ? "Democrat" : "Republican";
        return (
            <div className="congress" key={person.fullName}>
                <section className="congress__section">
                    <div className="congress__section--info-box">
                        <h2 className="name">{person.fullName}</h2>
                        <p className="party">{party}</p>
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
            <h2 className="congress-container__title">Congress Members</h2>
            <div className="congress-container__members">{representatives}</div>
          </div>
        )
    }      

 }

export default CongressAction;