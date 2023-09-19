import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'Sebflo11',
        name: 'Sebastián Flores',
        isFollowing: true,
    },
    {
        userName: 'joha',
        name: 'Johana',
        isFollowing: false,
    },
]

export function App () {

    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
            {/* <TwitterFollowCard  userName='Sebflo11' >
                Sebastián Flores
            </TwitterFollowCard>
            <TwitterFollowCard userName='Sebflo11'>
                Johana Viera
            </TwitterFollowCard> */}
        </section>
    )
}

