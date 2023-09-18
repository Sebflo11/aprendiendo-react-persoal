import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {

    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName='Sebflo11'>
                Sebastián Flores
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName='Sebflo11'>
                Johana Viera
            </TwitterFollowCard>
        </section>
    )
}

