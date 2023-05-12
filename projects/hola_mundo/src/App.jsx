import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    
    return(
        <section className='App'>
        <TwitterFollowCard  isFollowing={false} userName="juliethRuiz">
            Julieth Ruiz
        </TwitterFollowCard>
        <TwitterFollowCard  isFollowing userName="anaGaleano">
            Ofelia Galeano
        </TwitterFollowCard>
        <TwitterFollowCard  isFollowing userName="carlosRuiz">
            Carlos Ruiz
        </TwitterFollowCard>
        <TwitterFollowCard  isFollowing userName="isaiasRuiz">
            Isaias Ruiz
        </TwitterFollowCard>
        
        </section>
    
    )
}